* 1. 安装编译器 protoc
* 2. 安装 go 语言编译器插件和运行时
    * 2.1 安装 go 语言编译器插件 protoc-gen-go
    * 2.2 安装 go 语言运行时
* 3. 安装 dart 语言编译器插件和运行时
    * 3.1 安装 dart 语言编译器插件 protoc-gen-dart
    * 3.2 安装 dart 语言运行时
* 4. 

---

要安装 protobuf，你需要安装 protocol compiler（用来编译 .proto 文件），还需要为你所选择的编程语言安装其运行时。

如果不是官方直接支持的编程语言，还需要额外安装编译器插件，如 protoc-gen-go(golang 语言的编译器插件)、protoc-gen-dart(dart 语言的编译器插件) 等。官方直接支持的有 java、C++ 等。

* protoc 编译器
* 特定编程语言的运行时
* 特定编程语言的编译器插件

`tag numbers`

## 1. 安装编译器 protoc

protocol compiler 使用 C++ 语言编写。

在 Github release 页面下载预编译好的二进制文件，文件名称为：protoc-$VERSION-$PLATFORM.zip，里面包含 protc 二进制文件和一些标准的 .proto 文件。

下载：protoc-3.7.0-osx-x86_64.zip

```
wget https://github.com/protocolbuffers/protobuf/releases/download/v3.7.0/protoc-3.7.0-osx-x86_64.zip
```

解压以后在 bin 目录就可以看到 protoc 可执行文件。

## 2. 安装 go 语言编译器插件和运行时

#### 2.1 安装 go 语言编译器插件 protoc-gen-go

```
go get -u github.com/golang/protobuf/protoc-gen-go
```

这会在 $GOPATH/bin 目录下安装 protoc-gen-go 可执行文件。

`protoc-gen-go` protocol compiler plugin 用于生成 go 源码文件，编译后就可以访问和管理 protocol buffers。

#### 2.2 安装 go 语言运行时

```
go get -u github.com/golang/protobuf/proto
```

运行时库实现了 encoding (marshaling), decoding (unmarshaling), and accessing protocol buffers 的运行时支持功能。

调用 protoc 命令时使用了 --go_out 标记， protoc 就需要用到 `protoc-gen-go` 二进制文件。

## 3. 安装 dart 语言编译器插件和运行时

#### 3.1 安装 dart 语言编译器插件 protoc-gen-dart

```
pub global activate protoc_plugin
```

#### 3.2 安装 dart 语言运行时

## 4. 
