# Design ||20

```js script
import "@rocket/launch/inline-notification/inline-notification.js";
import { html } from "lit-html";
import {
  EntryContents,
  HolochainPlaygroundContainer,
  EntryGraph,
  CallZomeFns,
  SourceChain,
  DhtCells,
} from "@holochain-playground/elements";

customElements.define(
  "holochain-playground-container",
  HolochainPlaygroundContainer
);
customElements.define("entry-graph", EntryGraph);
customElements.define("entry-contents", EntryContents);
customElements.define("call-zome-fns", CallZomeFns);
customElements.define("dht-cells", DhtCells);
customElements.define("source-chain", SourceChain);
```

## Use case

In our small town, only a handful of people have the necessary resources for certain tasks. Things like tools, trucks or books are needed only in very specific times, and they aren't consumed when used. But, although everyone kind of knows each other, they don't want to give away their things to their neighbors without knowing where they will end up.

So! We need to create a small [chain-of-custody](https://en.wikipedia.org/wiki/Chain_of_custody) application. With this, the owner of a resource will be able to lend someone a tool, knowing that whenever it changes hands, it will be logged in our app, and if at some point something is lost, we know who was the last person to hold it.

We can follow this design to accomplish it. Try to create a resource, and then transfer it between the three agents in the network.

```js story
const sampleZome1 = {
  name: "resources",
  entry_defs: [
    {
      id: "resource",
      visibility: "Public",
    },
  ],
  zome_functions: {
    create_resource: {
      call: (hdk) => async ({ name }) => {
        const { agent_latest_pubkey } = await hdk.agent_info();

        const content = {
          owner: agent_latest_pubkey,
          name,
        };

        await hdk.create_entry({
          content,
          entry_def_id: "resource",
        });
        const resourceHash = await hdk.hash_entry({ content });

        await hdk.create_link({
          base: agent_latest_pubkey,
          target: resourceHash,
          tag: null,
        });

        return resourceHash;
      },
      arguments: [{ name: "name", type: "String" }],
    },
    get_my_resources: {
      call: (hdk) => async () => {
        const { agent_latest_pubkey } = await hdk.agent_info();

        const links = await hdk.get_links(agent_latest_pubkey);

        const promises = links.map((link) => hdk.get(link.target));

        const resources = await Promise.all(promises);

        return resources.map((resource) => resource.entry.content.name);
      },
      arguments: [],
    },
  },
};
const custodyZome = {
  name: "chain_of_custody",
  entry_defs: [
    {
      id: "transfer",
      visibility: "Public",
    },
  ],
  zome_functions: {
    transfer_resource: {
      call: (hdk) => async ({
        resource_hash,
        last_transfer_header_hash,
        transfer_to,
      }) => {
        const { agent_latest_pubkey } = await hdk.agent_info();

        if (agent_latest_pubkey === transfer_to)
          throw new Error("You cannot transfer a resource to yourself");

        if (!last_transfer_header_hash) {
          const element = await hdk.get(resource_hash);
          if (!element) throw new Error("Could not find resource");
          if (element.entry.content.owner !== agent_latest_pubkey)
            throw new Error(
              "You are not the owner of this resource, nor are holding it"
            );

          const elements2 = await hdk.query();

          const previousTransfer = elements2.find((element) => {
            if (element.signed_header.header.content.entry_hash) {
              if (
                element.entry &&
                element.entry.content.resource_hash === resource_hash
              )
                return true;
            }
            return false;
          });

          if (previousTransfer)
            throw new Error("You don't hold this resource anymore");
        } else {
          const element = await hdk.get(last_transfer_header_hash);
          if (!element.entry.content.resource_hash)
            throw new Error(
              "Given last_transfer_header_hash does not correspond to a transfer"
            );

          if (element.signed_header.header.hash !== last_transfer_header_hash)
            throw new Error(
              "The last_transfer_header_hash must be the header hash, not the entry one"
            );

          if (element.entry.content.transfer_to !== agent_latest_pubkey)
            throw new Error("You are not holding this resource");
        }

        const elements = await hdk.query();

        const previousTransfer = elements.find((element) => {
          if (element.signed_header.header.content.entry_hash) {
            if (
              element.entry &&
              element.entry.content.last_transfer_header_hash &&
              element.entry.content.last_transfer_header_hash ===
                last_transfer_header_hash
            )
              return true;
          }
          return false;
        });

        if (previousTransfer)
          throw new Error("You don't hold this resource anymore");

        const content = {
          resource_hash,
          last_transfer_header_hash,
          transfer_from: agent_latest_pubkey,
          transfer_to,
        };

        if (!last_transfer_header_hash) {
          await hdk.create_entry({
            content,
            entry_def_id: "transfer",
          });

          const transferHash = await hdk.hash_entry({ content });

          await hdk.create_link({
            base: resource_hash,
            target: transferHash,
            tag: "First transfer",
          });
        } else {
          await hdk.update_entry({
            original_header_address: last_transfer_header_hash,
            content,
            entry_def_id: "transfer",
          });
        }
      },
      arguments: [
        { name: "resource_hash", type: "EntryHash" },
        { name: "last_transfer_header_hash", type: "Option<HeaderHash>" },
        { name: "transfer_to", type: "AgentPubKey" },
      ],
    },
    get_resource_trace: {
      call: (hdk) => async ({ resource_hash }) => {
        const links = await hdk.get_links(resource_hash);

        if (links.length === 0) return [];

        const transfers = [];
        let nextTransferHash = links[0].target;

        while (nextTransferHash) {
          let transferDetails = await hdk.get_details(nextTransferHash);

          if (!transferDetails)
            throw new Error("Couldn't get a transfer in the chain: try again");

          transfers.push({
            transfer: transferDetails.content.entry,
            headers: transferDetails.content.headers,
          });

          nextTransferHash = undefined;

          if (transferDetails.content.updates.length > 0) {
            nextTransferHash =
              transferDetails.content.updates[0].header.content.entry_hash;
          }
        }

        return transfers;
      },
      arguments: [{ name: "resource_hash", type: "EntryHash" }],
    },
  },
};

const simulatedDnaTemplate1 = {
  zomes: [sampleZome1, custodyZome],
};
export const Exercise = () => {
  return html`
    <holochain-playground-container
      .numberOfSimulatedConductors=${3}
      .simulatedDnaTemplate=${simulatedDnaTemplate1}
      @ready=${(e) => {
        const conductor = e.detail.conductors[0];

        const cellId = conductor.getAllCells()[0].cellId;

        e.target.activeAgentPubKey = cellId[1];
        conductor.callZomeFn({
          cellId,
          zome: "resources",
          fnName: "create_resource",
          payload: { name: "sample resource" },
          cap: null,
        });
      }}
    >
      <div style="display: flex; flex-direction: row">
        <call-zome-fns
          id="call-zome"
          style="height: 420px; margin-bottom: 20px; margin-right: 20px;"
        >
        </call-zome-fns>
        <entry-contents
          style="height: 420px; flex-basis: 4500px; margin-bottom: 20px;"
        >
        </entry-contents>
      </div>
      <div style="display: flex; flex-direction: row">
        <dht-cells
          style="height: 600px; flex: 1; margin-bottom: 20px; margin-right: 20px;"
        >
        </dht-cells>
        <entry-graph
          .showFilter=${false}
          .showEntryContents=${false}
          style="height: 600px; width: 100%; margin-bottom: 20px;"
        ></entry-graph>
      </div>
    </holochain-playground-container>
  `;
};
```
