## 1. Xcode 中添加 SPM 包

Xcode 中找到 `File -> Swift Packages -> Add package Dependency` 就可以快速添加，只需要输入 git 地址即可。

本地的 Swift Package 也可以直接把包文件夹拖到 Xcode 里引用。

这种去中心化，优雅的代码共享方案非常清新。

## 2. 手动添加

在 Package.swift 清单文件的 dependencies 中添加依赖的地址和版本号：

```
dependencies: [
    // Dependencies declare other packages that this package depends on.
    // .package(url: /* package url */, from: "1.0.0"),
    .package(url: "https://github.com/apple/swift-log.git", from: "1.2.0"),
    .package(url: "https://github.com/xiaosongfu/HelloSPM.git", from: "0.1.1")
]
```

添加完成后执行 `swift build` 命令就自动下载依赖并编译。