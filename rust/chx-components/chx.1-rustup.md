# Rustup: the Rust installer and version management tool

* https://rustup.rs/
* rustup doc：https://github.com/rust-lang/rustup.rs/blob/master/README.md

---

rustup 是系统级编程语言 Rust 的安装程序。

rustup 从官方发布渠道安装 Rust，使您可以在 stable，beta 和 nightly 编译器之间轻松切换并保持更新。

## 1. 配置自动补全

rustup 现在支持为 Bash，Fish 和 Zsh 的自动补全功能。有关完整详细信息，请参阅 `rustup help completions`。

配置自动补全只需要一条命令即可：

```
# Bash
$ rustup completions bash > /etc/bash_completion.d/rustup.bash-completion

# Bash (macOS/Homebrew)
$ rustup completions bash > $(brew --prefix)/etc/bash_completion.d/rustup.bash-completion

# Fish
$ rustup completions fish > ~/.config/fish/completions/rustup.fish
```

## 2. 命令

### 2.x 

更新工具链：`rustup update stable`  `rustup update nightly`

`rustup update` 默认是更新 stable

### 2.x 

安装 nightly 版本的编译工具链：`rustup install nightly`

设置默认工具链为 nightly 版本：`rustup default nightly`

### 2.x 更新 rustup 本身

运行 `rustup update` 也会检查 rustup 本身并自动安装最新版本。要手动检查更新并安装最新版本的 rustup 而不更新已安装的工具链，请键入：

```
rustup self update
```