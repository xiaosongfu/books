* 概述
* 方法二： go runn package
* 方法一：go run 命令后面跟上所有的文件名
* 方法二： go runn .

---

## 概述

项目的 main 包下有多个文件的情况，如：

```
main.go
handlers.go
send_response.go
```

要运行这个项目，有下面几种方法。

## 方法一：go run 命令后面跟上所有的文件名

```
go run main.go handlers.go send_response.go
```

## 方法二： go runn .

```
go runn .
或
go runn ./
```

## 方法二： go runn package

注意：从Go 1.11开始，您可以将包的路径传递给 go run。这意味着您不再需要使用go run *.go通配符扩展等变通方法来运行多个文件。

```
go run github.com/appstacking/releasebus_core
```