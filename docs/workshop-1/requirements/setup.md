# Requirements >> Setup ||10

```js script
import "@rocket/launch/inline-notification/inline-notification.js";
```

- Install `nix-shell` following [these instructions](https://nixos.org/download.html).
- Clone the repository for this workshop:

```bash
git clone
```

<inline-notification type="tip" title="Warning">

Take into account that at this stage, only linux has solid support. Windows is not supported by nix, and MacOs can work but people have had some issues with it.

</inline-notification>

<inline-notification type="tip" title="Solutions">

We recommend using [VSCode](https://code.visualstudio.com/) with the [rust-analyzer](https://rust-analyzer.github.io/) extension while coding rust.

</inline-notification>

<inline-notification type="tip" title="Warning">

If you have some problems installing nix, you can try these solutions:

- [`warning: the group 'nixbld' specified in 'build-users-group' does not exist`](https://forum.holochain.org/t/holochain-rsm-getting-started-troubles/4746)
- [MacOS] [`no binary distribution of nix for your platform`](https://forum.holochain.org/t/cannot-install-nix-package-manager-in-mac-saying-no-binary-distribution-of-nix-for-your-platform/1204)

</inline-notification>
