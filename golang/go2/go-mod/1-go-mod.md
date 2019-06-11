# mod 依赖管理

依赖包的存放位置变更为$GOPATH/pkg，允许同一个package多个版本并存，且多个项目可以共享缓存的 module。

## 1. 相关概念

go.mod 提供了 module, go，require、replace 和 exclude 指令：

* module 语句指定包的名字（路径）
* go 指定 go 版本
* require 语句指定的依赖项模块
* replace 语句可以替换依赖项模块
* exclude 语句可以忽略依赖项模块

## 2. 如何启用


## 3. 日常使用


`replace golang.org/x/crypto v0.0.0-20190313024323-a1f597ede03a => github.com/golang/crypto v0.0.0-20190313024323-a1f597ede03a`


清空 `$GOPATH/pkg/mod` 目录：`go clean -modcache`


#### 3.x 使用 vendor 目录

使用 `go mod vendor` 命令将依赖下载到 vendor 目录。

构建时使用 `go build -mod=vendor` 命令来使用 vendor 目录下的依赖。


## 4. API

* `GET $GOPROXY/<module>/@v/list` - returns a list of all known versions of the given module, one per line.

* `GET $GOPROXY/<module>/@v/<version>.info` - returns JSON-formatted metadata about that version of the given module.

* `GET $GOPROXY/<module>/@v/<version>.mod` - returns the go.mod file for that version of the given module.

* `GET $GOPROXY/<module>/@v/<version>.zip` - returns the zip archive for that version of the given module.

使用示例如下：

```
$ go mod tidy -v
Fetching https://goproxy.io/github.com/xiaosongfu/go-asciibot/@v/list
go: finding github.com/xiaosongfu/go-asciibot v0.0.1
Fetching https://goproxy.io/github.com/xiaosongfu/go-asciibot/@v/v0.0.1.info
go: downloading github.com/xiaosongfu/go-asciibot v0.0.1
Fetching https://goproxy.io/github.com/xiaosongfu/go-asciibot/@v/v0.0.1.zip
go: extracting github.com/xiaosongfu/go-asciibot v0.0.1
Fetching https://goproxy.io/github.com/xiaosongfu/go-asciibot/@v/v0.0.1.mod
```

## 5. 命令

```
fuxiaosongdeMac-mini:~ fuxiaosong$ go help mod
Go mod provides access to operations on modules.

Note that support for modules is built into all the go commands,
not just 'go mod'. For example, day-to-day adding, removing, upgrading,
and downgrading of dependencies should be done using 'go get'.
See 'go help modules' for an overview of module functionality.

Usage:

	go mod <command> [arguments]

The commands are:

	download    download modules to local cache
	edit        edit go.mod from tools or scripts
	graph       print module requirement graph
	init        initialize new module in current directory
	tidy        add missing and remove unused modules
	vendor      make vendored copy of dependencies
	verify      verify dependencies have expected content
	why         explain why packages or modules are needed

Use "go help mod <command>" for more information about a command.
```

#### 5.1 go mod tidy

该命令用来整理导入的 packages，确保 go.mod 文件中记录的和源代码中用到的保存一致。

它会添加缺少的，也会移除多余的。使用 `-v` 标记打印执行过程的详细信息。

帮助信息如下：

```
$ go help mod tidy
usage: go mod tidy [-v]

Tidy makes sure go.mod matches the source code in the module.
It adds any missing modules necessary to build the current module's
packages and dependencies, and it removes unused modules that
don't provide any relevant packages. It also adds any missing entries
to go.sum and removes any unnecessary ones.

The -v flag causes tidy to print information about removed modules
to standard error.
```

使用示例如下：

```
$ go mod tidy -v
Fetching https://goproxy.io/github.com/xiaosongfu/go-asciibot/@v/list
go: finding github.com/xiaosongfu/go-asciibot v0.0.1
Fetching https://goproxy.io/github.com/xiaosongfu/go-asciibot/@v/v0.0.1.info
go: downloading github.com/xiaosongfu/go-asciibot v0.0.1
Fetching https://goproxy.io/github.com/xiaosongfu/go-asciibot/@v/v0.0.1.zip
go: extracting github.com/xiaosongfu/go-asciibot v0.0.1
Fetching https://goproxy.io/github.com/xiaosongfu/go-asciibot/@v/v0.0.1.mod
```