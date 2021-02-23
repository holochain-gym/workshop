# Chain-of-Custody Zome ||40

Steps to create this zome:

1. Define a `Transfer` entry and add it to the `entry_defs`

```rust
#[hdk_entry(id = "resource")]
struct Transfer {
    transfer_from: AgentPubKey,
    transfer_to: AgentPubKey,
    resource_hash: EntryHash,
    last_transfer_hash: Option<HeaderHash> // On the first transfer, this will be None
}

entry_defs![Transfer::entry_def()];
```

2. Add a `transfer_resource(resource_hash: EntryHash, transfer_to: AgentPubKey, last_transfer_hash: Option<HeaderHash>) -> ExternResult<()>` function that:

   1. Gets the public key of the executing agent with [agent_info](https://developer.holochain.org/rustdoc/hdk3/host_fn/agent_info/fn.agent_info).
   2. Defines a new `Transfer` struct.
   3. If `last_transfer_hash` is `None`, creates a new transfer entry, and links the resource entry to the transfer hash.
   4. If `last_transfer_hash` exists, updates the `last_transfer_hash` header with the `Transfer` struct.

3. Add a `get_resource_trace(resource_hash: EntryHash) -> ExternResult<Vec<(Element, Transfer)>>` that:

   1. Does a `get_links` with the resource hash as the base to get the first `Transfer`.
   2. In a loop:
      1. Does a [get_details](https://developer.holochain.org/rustdoc/hdk3/host_fn/get_details/fn.get_details) with the transfer hash.
      2. Adds the element and entry to the result vector.
      3. If there is any update with the entry, continue the loop with the new transfer hash.

4. Add the validation functions for the links and the transfer:

```rust
#[hdk_extern]
fn validate_create_entry_transfer(data: ValidationData) -> ExternResult<ValidationCallbackResult> {
    // Validate that the author of the element matches the `transfer_from` field
    // If `last_transfer_hash` doesn't exist:
    //   - Get the resource with the resource hash
    //   - Validate that the author of the element matches the owner field of the resource
}

#[hdk_extern]
fn validate_update_entry_transfer(data: ValidationData) -> ExternResult<ValidationCallbackResult> {
    // `get_details` from the `last_transfer_hash`
    // Validate that the header has not been updated already
    //      Note: this is what prevents a holder of the resource from transferring twice
}

#[hdk_extern]
fn validate_link(data: ValidationData) -> ExternResult<ValidationCallbackResult> {
    // Validate that the author of the link matches the owner of the resource
    // Validate that there is only one link attached to the base of the resource
    //      Note: this prevents the owner of the resource from transferring twice two start
}
```
