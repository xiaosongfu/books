https://blog.rust-lang.org/2019/04/11/Rust-1.34.0.html

---

从 1.34.0 开始，rust 支持自定义 registry，

```
vi ~/.cargo/config
```

```
[registries]
my-registry = { index = "https://my-intranet:8080/git/index" }
```

```
[dependencies]
other-crate = { version = "1.0", registry = "my-registry" }
```

```
cargo login --registry=my-registry
```

```
cargo publish --registry=my-registry
```
