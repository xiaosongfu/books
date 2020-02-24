[An Overview of Go's Tooling](https://www.alexedwards.net/blog/an-overview-of-go-tooling) ==> 讲了 run test lint 静态分析等等 go 的 tool，强烈推荐!!!!
中文版：https://juejin.im/post/5ce4dc17518825240245be5b

---




go list -m all : 显示项目的所有依赖项
go list -m -json: json


go clean -modcache : 删除计算机上所有项目的下载依赖项。位于 $GOPATH/pkg/mod
go clean -testcache


---


$ gofmt -w -s -d foo.go  # Format the foo.go file
$ gofmt -w -s -d .       # Recursively format all files in the current directory and sub-directories

* -w 标志指示工具在适当的位置重写文件
* -s 指示工具在可能的情况下对代码应用简化
* -d 标志指示工具输出更改的差异，如果您只想显示已更改文件的名称而不是差异，则可以将其替换为-l标志。

常用：`gofmt -w -l .`

gofmt 命令以递归方式工作


---

$ go test -cover ./...

$ go test -coverprofile=/tmp/profile.out ./...
$ go tool cover -html=/tmp/profile.out : 在 web 浏览器中查看
$ go tool cover -func=/tmp/profile.out : 在终端中按功能/方法查看测试覆盖率的细分


可以使用 go test -count 命令连续多次运行测试，如果要检查偶发或间歇性故障，这可能很有用。例如：
$ go test -count=500 .


$ go test all
这将对模块中的所有包和所有依赖项运行测试 - 包括测试测试依赖项和必要的标准库包 - 它可以帮助验证所使用的依赖项的确切版本是否彼此兼容。这可能需要相当长的时间才能运行，但结果可以很好地缓存，因此任何后续测试都应该在未来更快。如果需要，您还可以使用go test -short all跳过任何长时间运行的测试。

---


该go vet工具对您的代码进行静态分析，并警告您可能出现代码错误但编译器无法获取的内容。诸如无法访问的代码，不必要的分配和格式错误的构建标记等问题。您可以像这样使用它：

$ go vet foo.go     # Vet the foo.go file
$ go vet .          # Vet all files in the current directory
$ go vet ./...      # Vet all files in the current directory and sub-directories
$ go vet ./foo/bar  # Vet all files in the ./foo/bar directory


