# Design ||20

```js script
import "@rocket/launch/inline-notification/inline-notification.js";
import { html } from "lit-html";
import {
  EntryContents,
  HolochainPlaygroundContainer,
  EntryGraph,
  CallZomeFns,
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
```

## Exercise

### Problem statement

We need to code a small zome that satisfies these capabilities:

- Create a new post, passing a content and some tags
- Get all posts that have been created
- Get all the tags that have been created
- Get all posts that have been created with a certain tag
  - "get me all posts that have been posted with the tag "nature""

We can follow this entry design to accomplish it:

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

const simulatedDnaTemplate1 = {
  zomes: [sampleZome1],
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
          style="height: 300px; margin-bottom: 20px; margin-right: 20px;"
        >
        </call-zome-fns>

        <entry-contents style="height: 300px; flex: 1; margin-bottom: 20px;">
        </entry-contents>
      </div>
      <div style="display: flex; flex-direction: row">
        <dht-cells
          style="height: 600px; flex: 1; margin-bottom: 20px; margin-right: 20px;"
        >
        </dht-cells>
        <entry-graph
          .showFilter=${false}
          style="height: 600px; width: 100%; margin-bottom: 20px;"
        ></entry-graph>
      </div>
    </holochain-playground-container>
  `;
};
```
