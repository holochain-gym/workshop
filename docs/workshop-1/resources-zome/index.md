# Resources Zome ||30

Steps to create this zome:

0. Delete boilerplate zome

1. Define a `Resource` entry and add it to the `entry_defs`

```rust
#[hdk_entry(id = "resource")]
struct Resource {
    owner_pub_key: AgentPubKey,
    name: String,
}

entry_defs![Resource::entry_def()];
```

2. Add the `create_resource` function that:
   1. Receives the name of the resource.
   2. Gets the public key of the executing agent with [agent_info](https://developer.holochain.org/rustdoc/hdk3/host_fn/agent_info/fn.agent_info).
   3. Creates the resource with [create_entry](https://developer.holochain.org/rustdoc/hdk3/entry/create_entry/fn.create_entry).
   4. Creates a link between the public key and the entry hash (using [hash_entry](https://developer.holochain.org/rustdoc/hdk3/entry/hash_entry/fn.hash_entry) and [create_link](https://developer.holochain.org/rustdoc/hdk3/host_fn/create_link/fn.create_link)).
   
3. Add the `get_my_resources` function that:
   1. Gets the public key of the executing agent with [agent_info](https://developer.holochain.org/rustdoc/hdk3/host_fn/agent_info/fn.agent_info).
   2. Does a [get_links](https://developer.holochain.org/rustdoc/hdk3/host_fn/get_links/fn.get_links) with the public key as the base.
   3. For each target hash, performs a [get](https://developer.holochain.org/rustdoc/hdk3/host_fn/get/fn.get) to get the contents of the `Resource` entry.
   4. Returns the list of resources.


4. Add the validation functions for the links and the resources:

```rust
#[hdk_extern]
fn validate_create_entry_resource(data: ValidationData) -> ExternResult<ValidationCallbackResult> {
    ...
}

#[hdk_extern]
fn validate_link(data: ValidationData) -> ExternResult<ValidationCallbackResult> {
    ...
}
```

## Gym Exercises

Not understanding something? You can look at this gym exercises to play a bit with the concepts:

- [Entries](https://holochain-gym.github.io/developers/basic/entries/)
- [Links](https://holochain-gym.github.io/developers/basic/links/)
- [DHT](https://holochain-gym.github.io/developers/intermediate/dht/)