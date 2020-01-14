* 1. GOROOT 和 GOPATH
* 2. GOOS 和 GOARCH
* 3. GOPROXY 和 GOSUMDB
* 4. GONOPROXY 和 GONOSUMDB
* 5. GOPRIVATE

---

## 1. GOROOT 和 GOPATH

GOPATH 废弃了？？还是使用默认值就够了？？

## 2. GOOS 和 GOARCH

## 3. GOPROXY 和 GOSUMDB

Go module mirror and Go checksum database

GOPROXY 的默认设置是 `https://proxy.golang.org,direct`

## 4. GONOPROXY 和 GONOSUMDB

控制 go 应该不使用 GOPROXY 下载，而是直接去源头下载

控制 go 应该忽略校验哪些 module path 下的模块

## 5. GOPRIVATE

GOPRIVATE 环境变量允许绕过所选模块的代理。

---

## go env -w 

在 Go 1.13 中管理环境变量会变得稍显混乱，因为 Go 1.13 建议将所有跟 Go 相关的环境变量都交由新出的 go env -w 来管理，比如执行 go env -v GO111MODULE=on 就会在 $HOME/.config/go/env 文件中追加一行 "GO111MODULE=on"

但 `go env -w` 不会覆盖你的系统环境变量

所以建议大家在升级到 Go 1.13 后做一次环境变量的管理方式的转变，比如删除系统中所有跟 Go 相关的环境变量，并使用 go env -w 重写

> Go1.13 新增了 go env-w 用于写入环境变量，而写入的地方是 os.UserConfigDir 所返回的路径，需要注意的是 go env-w 不会覆写系统环境变量。
