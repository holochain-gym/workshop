# Requirements >> Setup ||10

```js script
import "@rocket/launch/inline-notification/inline-notification.js";
```

- Install `nix-shell` following [these instructions](https://nixos.org/download.html).
  - If you want, setup your current terminal with nix with the instruction at the end of the output of this command.
- Clone the repository for this workshop and `cd` into it:

```bash
git clone https://github.com/holochain-gym/workshop-chain-of-custody && cd workshop-chain-of-custody
```

- Enter the `nix-shell` for the repository:

```bash
$(nix-build https://holochain.love --no-link -A pkgs.holonix)/bin/holonix
```

That's it! Now you should have the `holochain` binary installed:

```bash
holochain --version
```

<inline-notification type="tip" title="IDE">

We recommend using [VSCode](https://code.visualstudio.com/) with the [rust-analyzer](https://rust-analyzer.github.io/) extension while coding rust.

</inline-notification>
<inline-notification type="warning" title="warn">

Take into account that at this stage, only linux has solid support. Windows is not supported by nix, and MacOs can work but people have had some issues with it. To install with Windows, you can use [WSL](https://forum.holochain.org/t/holochain-on-wsl/4895).

</inline-notification>

<inline-notification type="warning" title="Troubleshooting">

If you have some problems installing nix, you can try these solutions:

- [Full installation instructions](https://developer.holochain.org/docs/install/)
- ["warning: the group 'nixbld' specified in 'build-users-group' does not exist"](https://forum.holochain.org/t/holochain-rsm-getting-started-troubles/4746)
- [MacOS] ["no binary distribution of nix for your platform"](https://forum.holochain.org/t/cannot-install-nix-package-manager-in-mac-saying-no-binary-distribution-of-nix-for-your-platform/1204)

</inline-notification>
