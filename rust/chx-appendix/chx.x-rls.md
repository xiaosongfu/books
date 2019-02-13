RLS（Rust Language Server）是官方提供的一个标准化的编辑器增强工具。它也是开源的，项目地址在 https://github.com/rust-lang-nursery/rls。

它是一个单独的进程，通过进程间通信给编辑器或者集成开发环境提供一些信息，实现比较复杂的功能，比如代码自动提示、跳转到定义、显示函数签名等。

安装最新的RLS的方法为：

```
// 更新 rustup 到最新
$ rustup self update
// 更新 rust 编译器到最新 nightly
$ rustup update nightly
// 安装 RLS
$ rustup component add rls --toolchain nightly
$ rustup component add rust-analysis --toolchain nightly
$ rustup component add rust-src --toolchain nightly
```

有了这些准备，大家就可以在 Visual Studio Code 中下载支持 Rust 的插件，提升编辑体验。理论上来说，RLS 可以跟任何编辑器或者集成开发环境配合使用，只要这个编辑器实现了它们之间的通信协议即可。