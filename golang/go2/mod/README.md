https://github.com/go-modules-by-example/index

---

在将代码提交/推回存储库之前，请运行 go mod tidy 以确保 module 文件是最新且准确的。您在本地构建，运行或测试的代码将随时影响 Go 对 module 文件中内容的更新。运行 go mod tidy 将确保项目具有所需内容的准确和完整的快照，这将帮助您团队中的其他人和您的 CI/CD环境。

---

如果您在任何时候都不满意所选的module和版本，则你始终可以通过删除module文件并再次运行go mod tidy来重置选择。当项目还很年轻并且情况不稳定时，这更是一种选择。项目稳定并发布后，我会犹豫重新设置依赖关系。正如我上面提到的，随着时间的推移，可能会设置module版本，并且您需要长期持久且可重复的构建:

```
$ rm go.*
$ go mod init <module name>
$ go mod tidy
```

---


```
module example.com/foobar

go 1.13

require (    
	example.com/apple v0.1.2
	example.com/banana v1.2.3
	example.com/banana/v2 v2.3.4
	example.com/pineapple v0.0.0-20190924185754-1b0db40df49a
)

exclude example.com/pineapple v1.2.4
replace example.com/apple v0.1.2 => example.com/rda v0.1.0
replace example.com/banana  => example.com/hugebanana
```

---

如果提取的依赖项具有 go.mod 文件，则其依赖项将不会列在您的 go.mod 文件中。相反，如果您正在下载的依赖项没有 go.mod 文件，那么它的依赖项将列在您的 go.mod 文件中，并 `// indirect` 在它们旁边添加注释。

---

go mod why 将显示从主模块中的包到给定依赖项的最短路径。例如：

```
$ go mod why -m golang.org/x/sys
# golang.org/x/sys
github.com/alexedwards/argon2id
golang.org/x/crypto/argon2
golang.org/x/sys/cpu
```

---

在您对代码进行任何更改之前，我建议您运行以下两个命令来整理和验证您的依赖项：

```
$ go mod tidy
$ go mod verify
```

该go mod tidy命令将修剪任何未使用的依赖从你go.mod和go.sum文件，并更新文件，包括所有可能的 build tags/OS/architecture 组合的依赖关系（注：go run，go test，go build等都是“懒惰”，将只取所需当前构建标签包/ OS /体系结构）。

在每次提交之前运行此命令将使您更容易确定哪些代码更改负责在查看版本控制历史记录时添加或删除哪些依赖项。

我还建议使用该go mod verify命令检查计算机上的依赖项是否已被意外（或故意）更改，因为它们已下载并且与go.sum文件中的加密哈希值匹配。运行此命令有助于确保所使用的依赖项是您期望的完全依赖项，并且该提交的任何构建将在以后重现。