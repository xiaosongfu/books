## 1. 创建一个 Function

```
package main

import "github.com/aws/aws-lambda-go/lambda"

func hello() (string, error) {
    return "hello world", nil
}

func main() {
    lambda.Start(hello)
}
```

## 2. 构建应用程序并创建Lambda部署包(编译并打包为 zip 压缩包)

由于Go是一种编译语言，因此请构建应用程序并创建Lambda部署包。为此，我们需要构建一个在Linux上运行的二进制文件，并将其压缩到一个部署包中。

要部署到 AWS Lambda，需要以 linux 为目标平台编译一个二进制文件，并打包到一个 zip 文件中。

```
# 以 linux 为目标平台编译为一个二进制文件
GOOS=linux GOARCH=amd64 go build -o main main.go
```

如果使用 Linux 和 macOS 系统，可以直接使用 zip 命令：

```
# 压缩为 zip 包
zip main.zip main
```

如果使用 Windows 系统，为了创建一个可以在 AWS Lambda 平台工作的 zip 文件，需要安装官方提供的 `build-lambad-zip` 工具。

安装 `build-lambad-zip` 工具：

```
go.exe get -u github.com/aws/aws-lambda-go/cmd/build-lambda-zip
```

接着使用 `build-lambad-zip.exe` 命令打 zip 压缩包：

```
build-lambad-zip.ext -o main.zip main
```

## 3. 部署 Function

