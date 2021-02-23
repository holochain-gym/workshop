# Chain-of-Custody Zome ||40

Steps to create this zome:

1. Define a `Transfer` entry and add it to the `entry_defs`

```rust
#[hdk_entry(id = "resource")]
struct Transfer {
    transfer_from: AgentPubKey,
    transfer_to: AgentPubKey,
    resource_hash: EntryHash,
    last_transfer_hash: Option<EntryHash> // On the first transfer, this will be None
}

entry_defs![Transfer::entry_def()];
```

2. Add a `transfer_resource(resource_hash: EntryHash, transfer_to: AgentPubKey, last_transfer_hash: Option<EntryHash>) -> ExternResult<()>` function that:
   1. Gets the public key of the executing agent with [agent_info](https://developer.holochain.org/rustdoc/hdk3/host_fn/agent_info/fn.agent_info).
   2. If `last_transfer_hash` is `None`, creates a new transfer entry.
   3. If `last_transfer_hash` is 