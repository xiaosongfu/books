

```
$ wapm
wapm-cli 0.3.0
The Wasmer Engineering Team <engineering@wasmer.io>
WebAssembly Package Manager CLI

USAGE:
    wapm <SUBCOMMAND>

FLAGS:
    -h, --help       Prints help information
    -V, --version    Prints version information

SUBCOMMANDS:
    bin            Get the .bin dir path
    completions    Generate autocompletion scripts for your shell
    config         Config related subcommands
    help           Prints this message or the help of the given subcommand(s)
    init           Set up current directory for use with wapm
    install        Install a package
    keys           Manage minisign keys for verifying packages
    list           List the currently installed packages and their commands
    login          Logins into wapm, saving the token locally for future commands
    logout         Remove the token for the registry
    publish        Publish a package
    run            Run a command from the package or one of the dependencies
    search         Search packages
    uninstall      Uninstall a package
    validate       Check if a directory or tar.gz is a valid wapm package
    whoami         Prints the current user (if authed) in the stdout
```

## wapm install

```
$ wapm install -g cowsay
[INFO] Installing _/cowsay@0.1.3
Global package installed successfully!
```

## wapm run

```
$ wapm run cowsay HelloWorld!
 _____________
< HelloWorld! >
 -------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
               ||----w |
                ||     ||
```

## wapm list