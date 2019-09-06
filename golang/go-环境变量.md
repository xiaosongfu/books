## GOROOT 和 GOPATH

## GOPROXY 和 GOSUMDB

Go module mirror and Go checksum database

GOPROXY 的默认设置是 `https://proxy.golang.org,direct`

## GONOPROXY 和 GONOSUMDB

控制 go 应该不使用 GOPROXY 下载，而是直接去源头下载

控制 go 应该忽略校验哪些 module path 下的模块

## GOPRIVATE

GOPRIVATE 环境变量允许绕过所选模块的代理。
