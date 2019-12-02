## 1. 创建

方式一：Xcode 中找到 `File -> New -> Swift Package` 即可进入创建流程。

方式二：使用命令行创建：

```
$ mkdir spm-lib
$ cd spm-lib
$ swfit package init // 或 swift package init --type library
$ swift build
$ swift test
```

包的目录结构如下：

```
$ tree .
.
├── Package.swift
├── README.md
├── Sources
│   └── spm-lib
│       └── spm_lib.swift
└── Tests
    ├── LinuxMain.swift
    └── spm-libTests
        ├── XCTestManifests.swift
        └── spm_libTests.swift

4 directories, 6 files
```

这个目录没有 iOS 开发者以前熟悉的 `.xcodeproj` 文件，可以使用 `swift package generate-xcodeproj` 命令生成，当然也可以直接使用 Xcode 选择 `File -> Open` 打开这个包的根目录，就会根据 Package.swift 自动生成 Target。

---

> 彩蛋：

```
$ mkdir spm-exec
$ cd spm-exec
$ swift package init --type executable

$ tree
.
├── Package.swift
├── README.md
├── Sources
│   └── spm-exec
│       └── main.swift
└── Tests
    ├── LinuxMain.swift
    └── spm-execTests
        ├── XCTestManifests.swift
        └── spm_execTests.swift

4 directories, 6 files
```
