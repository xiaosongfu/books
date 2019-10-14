* 添加 Package 依赖

---

```
// swift-tools-version:5.1
// The swift-tools-version declares the minimum version of Swift required to build this package.

import PackageDescription

let package = Package(
    name: "MyLibrary",
    products: [
        // Products define the executables and libraries produced by a package, and make them visible to other packages.
        .library(
            name: "MyLibrary",
            targets: ["MyLibrary"]),
    ],
    dependencies: [
        // Dependencies declare other packages that this package depends on.
        // .package(url: /* package url */, from: "1.0.0"),
    ],
    targets: [
        // Targets are the basic building blocks of a package. A target can define a module or a test suite.
        // Targets can depend on other targets in this package, and on products in packages which this package depends on.
        .target(
            name: "MyLibrary",
            dependencies: []),
        .testTarget(
            name: "MyLibraryTests",
            dependencies: ["MyLibrary"]),
    ]
)
```

## 添加 Package 依赖

如果你的 package 需要依赖于其它 package，你只需要在 Package.swift 配置清单文件中添加依赖的 GitHub URL 和对应的版本号即可：

```
import PackageDescription

let package = Package(
    name: "MyPackage",
    dependencies: [
        // 添加依赖包：PlayingCard
        .Package(url: "https://github.com/apple/example-package-playingcard.git", from: "3.0.0"),
    ]
)
```

接下来你就可以在当前 package 中的任何源文件中 `import PlayingCard`，并调用它的公开 APIs。
同时，你也可以通过修改 Package.swift 文件中相关依赖的版本号，并执行 `swift package update` 命令来更新依赖包。
