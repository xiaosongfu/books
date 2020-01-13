## go



## go mod

* 整理导入的 packages: `go mod tidy -v`

* 清空 `$GOPATH/pkg/mod` 目录：`go clean -modcache`

---

* 列出所有依赖的 module：`go list -m  all`

* 列出某个 module 的版本列表: `go list -m -versions github.com/sirupsen/logrus`; `-m` 列出 module，`-versions` 列出版本列表

* 使用MVS仅升级必需的直接和间接依赖项: `go get -t -d -v ./...`
* 使用最新最大版本仅升级必需的直接和间接依赖项: `go get -u -t -d -v ./...`
* 使用最新最大版本升级所有直接和间接依赖项: `go get -u -t -d -v all`

以上摘自：https://mp.weixin.qq.com/s/gDIV6hHcjJ0SCpRZdk2VhQ

---
