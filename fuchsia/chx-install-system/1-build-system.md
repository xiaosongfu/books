
> Fuchsia 源代码中包含 Zircon 的源代码，Zircon 是支撑 Fuchsia 的核心平台。构建 Fuchsia 的过程中会同时构建 Zircon，如果只是想构建 Zircon，请参考：[Zircon's Getting Started](https://fuchsia.dev/zircon/docs/getting_started.md)。

## 1. 先决条件

> 准备您的构建环境(每个构建环境一次)

* macOS
    1. 安装命令行工具：`xcode-select --install`
    2. 除了命令行工具，您还需要安装最新版本的 Xcode

## 2. 获取源码

参考 `2-get-fuchsia-source.md`

## 3. 构建 Fuchsia

执行如下命令：

```
fx set core.x64 --with
fx build
```

## 4. 启动 Fuchsia



## 5. 体验 Fuchsia


