# https://www.rust-lang.org/learn/get-started

### 1. 生成一个新项目

`cargo new hello-rust` 这将生成一个名为 hello-rust 的新目录，其中包含以下文件：

```
fuxiaosongdeMac-mini:rust fuxiaosong$ cargo new hello-rust
     Created binary (application) `hello-rust` package
fuxiaosongdeMac-mini:rust fuxiaosong$ tree hello-rust/
hello-rust/
├── Cargo.toml
└── src
    └── main.rs

1 directory, 2 files
```

* `Cargo.toml` 是 Rust 的清单文件。您可以在此处保存项目的元数据(metadata)以及依赖项(dependencies)。

```
[package]
name = "hello-rust"
version = "0.1.0"
authors = ["xiaosongfu <xiaosong.fu@outlook.com>"]
edition = "2018"

[dependencies]

```

* `src / main.rs` 是我们编写应用程序代码的地方。

```
fn main() {
    println!("Hello, world!");
}
```

### 2. 运行项目

```
fuxiaosongdeMac-mini:hello-rust fuxiaosong$ cargo run
   Compiling hello-rust v0.1.0 (/Users/fuxiaosong/dev/project/rust/hello-rust)
    Finished dev [unoptimized + debuginfo] target(s) in 2.88s
     Running `target/debug/hello-rust`
Hello, world!
```

### 3. 添加依赖

在 Rust 中，我们经常将 `packages` 称为 `crates`。

在 `Cargo.toml` 文件中添加：

```
[dependencies]
ferris-says = "0.1.1"
```

接着执行 `cargo build` 命令，cargo 就会为我们安装这个依赖。

您将看到运行此命令为我们创建了一个新文件 Cargo.lock。此文件是我们在本地使用的依赖项的确切版本的日志。

### 4. 一个小的Rust应用程序

现在让我们用新的依赖项编写一个小应用程序。在我们的 main.rs 中，添加以下代码：

```
use ferris_says::say;
use std::io::{stdout, BufWriter};

fn main() {
    let stdout = stdout();
    let out = b"Hello fellow Rustaceans Rustaceans Rustaceans Rustaceans!";
    let width =104;
    
    let mut writer = BufWriter::new(stdout.lock());
    say(out, width, &mut writer).unwrap();
}
```

接着执行 `cargo run`，如果没有报错，可以看到如下输出：

```
fuxiaosongdeMac-mini:hello-rust fuxiaosong$ cargo run
   Compiling hello-rust v0.1.0 (/Users/fuxiaosong/dev/project/rust/hello-rust)
    Finished dev [unoptimized + debuginfo] target(s) in 0.81s
     Running `target/debug/hello-rust`
----------------------------
| Hello fellow Rustaceans! |
----------------------------
              \
               \
                  _~^~^~_
              \) /  o o  \ (/
                '_   -   _'
                / '-----' \
```