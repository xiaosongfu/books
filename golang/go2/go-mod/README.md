https://github.com/go-modules-by-example/index

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

$ go mod tidy
$ go mod verify

该go mod tidy命令将修剪任何未使用的依赖从你go.mod和go.sum文件，并更新文件，包括所有可能的 build tags/OS/architecture 组合的依赖关系（注：go run，go test，go build等都是“懒惰”，将只取所需当前构建标签包/ OS /体系结构）。

在每次提交之前运行此命令将使您更容易确定哪些代码更改负责在查看版本控制历史记录时添加或删除哪些依赖项。

我还建议使用该go mod verify命令检查计算机上的依赖项是否已被意外（或故意）更改，因为它们已下载并且与go.sum文件中的加密哈希值匹配。运行此命令有助于确保所使用的依赖项是您期望的完全依赖项，并且该提交的任何构建将在以后重现。