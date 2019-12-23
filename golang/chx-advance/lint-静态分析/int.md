您可以使用该golint工具识别代码中的样式错误。与go vet此不同，这不关心代码的正确性，但可以帮助您将代码与Effective Go和Go CodeReviewComments中的样式约定对齐。


它不是标准库的一部分，因此您需要像这样安装它：

```
$ cd /tmp
$ GO111MODULE=on go get golang.org/x/lint/golint
```

然后，您可以按如下方式运行它：

```
$ golint foo.go     # Lint the foo.go file
$ golint .          # Lint all files in the current directory
$ golint ./...      # Lint all files in the current directory and sub-directories
$ golint ./foo/bar  # Lint all files in the ./foo/bar directory
```

