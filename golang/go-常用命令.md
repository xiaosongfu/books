## 1. go build

GOOS=linux GOARCH=amd64 go build -o app main.go
GOOS=windows GOARCH=amd64 go build -o app.exe main.go

## 2. go mod

* `go mod init github.com/xiaosongfu/foo` : 初始化 mod
* :`go mod tidy -v` : 整理导入的 packages
* `go clean -modcache` : 清空 $GOPATH/pkg/mod 目录

---

* 列出所有依赖的 module：`go list -m  all`

* 列出某个 module 的版本列表: `go list -m -versions github.com/sirupsen/logrus`; `-m` 列出 module，`-versions` 列出版本列表

* 使用MVS仅升级必需的直接和间接依赖项: `go get -t -d -v ./...`
* 使用最新最大版本仅升级必需的直接和间接依赖项: `go get -u -t -d -v ./...`
* 使用最新最大版本升级所有直接和间接依赖项: `go get -u -t -d -v all`

以上摘自：https://mp.weixin.qq.com/s/gDIV6hHcjJ0SCpRZdk2VhQ

---

## 3. go env

`go env -w GOPROXY=https://goproxy.cn,direct` : 设置 GOPROXY（ GOSUMDB 就不用改了，因为 goproxy.cn 支持代理它的默认值，所以直接就能用）

## 4. go list

* `go list -m all` : 显示项目的所有依赖项
* `go list -m -json` : 以 json 格式显示项目的所有依赖项

## 5. go tool

* `go tool dist list` : 查看所有支持的 OS/ARCH 组合
