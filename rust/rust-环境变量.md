## RUSTUP_DIST_SERVER 和 RUSTUP_UPDATE_ROOT

```
export RUSTUP_DIST_SERVER=https://mirrors.ustc.edu.cn/rust-static
export RUSTUP_UPDATE_ROOT=https://mirrors.ustc.edu.cn/rust-static/rustup
```

* `RUSTUP_DIST_SERVER` 用于更新 `toolchain`
* `RUSTUP_UPDATE_ROOT` 用于更新 `rustup`

## 为 cargo 设置代理

```
[source.crates-io]
replace-with = 'ustc'

[source.ustc]
registry = "https://mirrors.ustc.edu.cn/crates.io-index"
```
