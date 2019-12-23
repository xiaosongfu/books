## 使用自带的 go vet 就已经足够了!!

该 go vet 工具对您的代码进行静态分析，并警告您可能出现代码错误但编译器无法获取的内容。诸如无法访问的代码，不必要的分配和格式错误的构建标记等问题。您可以像这样使用它：

```
$ go vet foo.go     # Vet the foo.go file
$ go vet .          # Vet all files in the current directory
$ go vet ./...      # Vet all files in the current directory and sub-directories
$ go vet ./foo/bar  # Vet all files in the ./foo/bar directory
```
