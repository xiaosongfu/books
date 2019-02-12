
`helm init` 的时候，通过 `~/.kube/config` 配置文件部署 tillter 服务器到 Kubernetes 集群，并配置 helm 可以操作这个 tiller 服务器，而 tiller 服务器操作 Kubernetes 集群还是是通过 `~/.kube/config` 配置文件。

当运行 `./tiller` 命令在本地运行 tiller 服务器时，也是通过 `~/.kube/config` 配置文件来告诉 tiller 要操作哪个 Kubernetes 集群，但是，同时还得告诉 helm 命令 tiller 服务器的地址是本地的 tiller 服务器，可以通过 $HELM_HOST 环境变量或 `--host` 参数来指定。

```
$ ./tiller
Tiller running on :44134
```