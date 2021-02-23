# Posts Zome >> Design ||10

```js script
import "@rocket/launch/inline-notification/inline-notification.js";
import { html } from "lit-html";
import { EntryDetail, HolochainPlaygroundContainer, EntryGraph, CallZomeFns } from "@holochain-playground/elements";

customElements.define(
  "holochain-playground-container",
  HolochainPlaygroundContainer
);
customElements.define("entry-graph", EntryGraph);
customElements.define("entry-detail", EntryDetail);
customElements.define("call-zome-fns", CallZomeFns);
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
  name: "sample",
  entry_defs: [
    {
      id: "post",
      visibility: "Public",
    },
    {
      id: "path",
      visibility: "Public",
    },
  ],
  zome_functions: {
    create_post: {
      call: (hdk) => async ({ content, tag1, tag2 }) => {
        await hdk.create_entry({
          content,
          entry_def_id: "post",
        });
        const postHash = await hdk.hash_entry({ content });

        const pathStr = `all_posts`;

        await hdk.path.ensure(pathStr, hdk);
        const pathHash = await hdk.hash_entry({ content: pathStr });

        await hdk.create_link({ base: pathHash, target: postHash, tag: null });

        for (const tag of [tag1, tag2]) {
          if (tag) {
            const pathContent = `all_tags.${tag}`;
            await hdk.path.ensure(pathContent, hdk);

            const tagPathHash = await hdk.hash_entry({ content: pathContent });
            await hdk.create_link({
              base: tagPathHash,
              target: postHash,
              tag: null,
            });
          }
        }

        return postHash;
      },
      arguments: [
        { name: "content", type: "String" },
        { name: "tag1", type: "String" },
        { name: "tag2", type: "String" },
      ],
    },
  },
};

const simulatedDnaTemplate1 = {
  zomes: [sampleZome1],
};
export const Exercise = () => {
  return html`
    <holochain-playground-container
      .numberOfSimulatedConductors=${1}
      .simulatedDnaTemplate=${simulatedDnaTemplate1}
      @ready=${(e) => {
        const conductor = e.detail.conductors[0];

        const cellId = conductor.getAllCells()[0].cellId;

        e.target.activeAgentPubKey = cellId[1];
        conductor.callZomeFn({
          cellId,
          zome: "sample",
          fnName: "create_post",
          payload: { content: "good morning", tag1: "nature", tag2: "giraffe" },
          cap: null,
        });
      }}
    >
      <call-zome-fns
        id="call-zome"
        hide-results
        hide-zome-selector
        style="height: 300px; margin-bottom: 20px;"
      >
      </call-zome-fns>
      <entry-graph
        .excludedEntryTypes=${["Agent"]}
        .showFilter=${false}
        style="height: 600px; width: 100%; margin-bottom: 20px;"
      ></entry-graph>
      <entry-detail style="height: 250px; flex: 1; margin-bottom: 20px;">
      </entry-detail>
    </holochain-playground-container>
  `;
};
```

<inline-notification type="tip" title="Exercise">

1. Go to the [source code for the exercise](https://github.com/holochain-gym/developer-exercises/tree/master/intermediate/1.paths).
2. Implement all `unimplemented!()` functions in the exercise.
3. Run `npm test` to test your implementation.

</inline-notification>
