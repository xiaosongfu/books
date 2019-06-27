
```
$ wasmer
wasmer 0.5.0
The Wasmer Engineering Team <engineering@wasmer.io>
Wasm execution runtime.

USAGE:
    wasmer <SUBCOMMAND>

FLAGS:
    -h, --help       Prints help information
    -V, --version    Prints version information

SUBCOMMANDS:
    cache          Wasmer cache
    help           Prints this message or the help of the given subcommand(s)
    run            Run a WebAssembly file. Formats accepted: wasm, wast
    self-update    Update wasmer to the latest version
    validate       Validate a Web Assembly binary

```


---

wasmer 运行时还可以嵌入到不同的语言。
* go：language/golang/使用-wasmer-运行时加载其他WASM.md -- https://github.com/wasmerio/go-ext-wasm