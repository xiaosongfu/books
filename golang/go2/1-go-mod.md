# mod 依赖管理

## 1. 相关概念


## 2. 如何启用


## 3. 日常使用



#### 3.x 使用 vendor 目录

使用 `go mod vendor` 命令将依赖下载到 vendor 目录。

构建时使用 `go build -mod=vendor` 命令来使用 vendor 目录下的依赖。


## 4. API

* `GET $GOPROXY/<module>/@v/list` - returns a list of all known versions of the given module, one per line.

* `GET $GOPROXY/<module>/@v/<version>.info` - returns JSON-formatted metadata about that version of the given module.

* `GET $GOPROXY/<module>/@v/<version>.mod` - returns the go.mod file for that version of the given module.

* `GET $GOPROXY/<module>/@v/<version>.zip` - returns the zip archive for that version of the given module.

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
