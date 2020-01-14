原文链接：[https://golang.google.cn/doc/code.html](https://golang.google.cn/doc/code.html)

---

* 介绍
* 代码组织
    * 概览
    * 工作空间
    * GOPATH 环境变量
    * import paths
    * 你的第一个程序
    * 你的第一个库
    * 包名称
* 测试
* 远程包

---

## 介绍

本文档演示了如何开发一个简单的Go包，并介绍了go工具，他们是获取，构建和安装Go包和命令的标准方法。

go tool 要求您以特定方式组织代码。请仔细阅读本文档。它解释了启动和运行Go安装的最简单方法。

类似的解释液可以观看视频。

## 代码组织

#### 概览

* 程序员通常会将所有Go代码保存在一个工作空间中。
* 工作空间包含许多版本控制存储库 （例如，由Git管理）。
* 每个存储库包含一个或多个包。
* 每个包由一个目录中的一个或多个Go源文件组成。
* 程序包目录的路径决定了其导入路径（import paths）。

请注意，这与其他编程环境不同，在 go 的编程环境中，每个项目都有一个单独的工作空间，工作空间与版本控制存储库紧密相关。

#### 工作空间

工作空间是一个目录层次结构，其根目录有两个目录：

* `src` 包含 Go 源文件
* `bin` 包含可执行命令

go tool 构建并将二进制文件安装到 bin 目录中。

src 子目录通常包含多个版本控制存储库（例如Git或Mercurial），用于跟踪一个或多个源包的开发。

为了让您了解工作区在实践中的外观，以下是一个示例：

```
bin/
    hello                          # command executable
    outyet                         # command executable
src/
    github.com/golang/example/
		.git/                      # Git repository metadata
		hello/
			hello.go               # command source
		outyet/
			main.go                # command source
			main_test.go           # test source
		stringutil/
			reverse.go             # package source
			reverse_test.go        # test source
    golang.org/x/image/
        .git/                      # Git repository metadata
		bmp/
			reader.go              # package source
			writer.go              # package source
    ... (many more repositories and packages omitted) ...
```

上面的目录树显示了一个包含两个存储库（example和image）的工作空间。该example仓库包含两个命令（hello 和outyet）和一个库（stringutil）。该image库包含bmp包和一些其他的包。

典型的工作空间包含许多包含了许多包和命令的源存储库。大多数Go程序员将他们所有的Go源代码和依赖项保存在一个工作区中。

需要注意的是符号链接应该不会被用于文件或目录链接到您的工作空间。

命令和库是从不同类型的源包构建的。我们稍后将讨论他们的区别。

#### GOPATH 环境变量

#### import paths

#### 你的第一个程序

#### 你的第一个库

#### 包名称

## 测试

Go有一个由 `go test` 命令和 `testing` 包组成的轻量级测试框架。

```
package stringutil

import "testing"

func TestReverse(t *testing.T) {
	cases := []struct {
		in, want string
	}{
		{"Hello, world", "dlrow ,olleH"},
		{"Hello, 世界", "界世 ,olleH"},
		{"", ""},
	}
	for _, c := range cases {
		got := Reverse(c.in)
		if got != c.want {
			t.Errorf("Reverse(%q) == %q, want %q", c.in, got, c.want)
		}
	}
}
```
