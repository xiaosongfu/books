1、升级到 Go 1.13 后 GOPROXY 和 GOSUMDB 都会有默认值，且默认值在国内是无法访问的，所以为了一切正常，建议大家 `go env -w GOPROXY=https://goproxy.cn,direct`，这个命令是 Go 1.13 新加的，然后 GOSUMDB 就不用改了，因为 goproxy.cn[2] 支持代理它的默认值，所以直接就能用。在 Go1.13 之前，GOPROXY=https://goproxy.cn 即可，逗号列表是 Go1.13 才有的。

2、如果你用了 GOPROXY 或 GOSUMDB，那么你就可能需要了解一下 GONOPROXY、GONOSUMDB 还有 GOPRIVATE。前两个是指定 Go 该怎么处理模块的下载与校验；后三个是指定 Go 在那些情况下不应该根据前两个处理。所以，私有库的问题可以解决。
