从 Go 1.13 开始，go 命令默认使用 Go 官方的 `Go模块镜像` 和 `Go校验和数据库` 下载和验证模块。

因为 Go 1.13 将 GOPROXY 默认成了中国大陆无法访问的 `https://proxy.golang.org`，所以我们中国的开发者从今以后必须先修改 GOPROXY 才能正常使用 go 来开发应用了。

## go1.13 之前

go 1.13 之前不能使用 `go env -w GOPROXY=xx` 命令设置，而是需要手动设置 GOPROXY 环境变量：

```
GOPROXY=https://proxy.golang.org
```

国内的代理：

```
GOPROXY=https://goproxy.cn
```

较旧版本的 go 命令无法直接使用 `校验和数据库`。如果您使用的是 Go 1.12 或更早版本，则可以使用 gosumcheck 针对校验和数据库手动检查 go.sum 文件：

```
$ go get golang.org/x/mod/gosumcheck

$ gosumcheck /path/to/go.sum
```

## go1.13 之后

只需要一条命令即可：

```
go env -w GOPROXY=https://goproxy.cn,direct
```

在后面拼接一个 `,direct`，是因为通过这样做我们可以在一定程度上解决私有库的问题。

go 1.13 之前没有 `,direct` 后缀，因为那是 Go 1.13 新加的特性。

这个 `GOPROXY` 设定的工作原理是：当 go 在抓取目标模块时，若遇见了 404 错误，那么就回退到 `direct` 也就是直接去目标模块的源头（比如 GitHub） 去抓取。而恰好，GitHub 等类似的代码托管网站的原则基本都是“你无权访问的你来说就是不存在的”，所以我才说通过这样设定可以在一定程度上解决私有库无法通过模块代理访问的问题。

### 如何拉取私有库

通过设置 GONOPROXY 环境变量，我们可以实现控制让哪些 module path 忽略 GOPROXY，无脑回源。比如 GONOPROXY=*.corp.example.com 就意味着 go 在抓取所有 corp.example.com 的三级子域名下的所有模块时都将忽略 GOPROXY 设置直接回源到目标模块的原地址。


