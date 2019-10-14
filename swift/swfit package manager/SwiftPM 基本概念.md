## SwiftPM 基本概念

1. 什么是 Packages？

一个 package（包）由 Swift 源码文件和一个清单文件组成。这个清单文件被称为 Package.swift，它使用 PackageDescription 模块来定义包的名称和内容。一个包通常有一个或者多个 targets（目标），每个 target 指定一个 product（产品）并声明一个或者多个 dependencies（依赖）。

2. 什么是 Products？

在 package（包）中的每一个 target（目标）最终可能构建成一个 library（库）或者一个 executable（可执行文件）作为其 product（产品）。库是包含可以被其他 Swift 代码引用的模块，可执行文件是一段可以被操作系统运行的程序。