本文整理自：[浅析从外部访问 Kubernetes 集群中应用的几种方式](https://mp.weixin.qq.com/s/jynmVN3xXnZrAxM_gN8ohQ)

---

虽然我们从集群外部不能直接访问一个 ClusterIP 服务，但是你可以使用 Kubernetes Proxy API 来访问它。

Kubernetes Proxy API 是一种特殊的 API，Kube-APIServer 只是代理这类 API 的 HTTP 请求，然后将请求转发到某个节点上的 Kubelet 进程监听的端口上。最后实际是由该端口上的 REST API 响应请求。

在 Master 节点上创建 Kubernetes API 的代理服务：

```
$ kubectl proxy --port=8080
```

kubectl proxy 默认是监听在 127.0.0.1 上的，如果你需要对外提供访问，可使用一些基本的安全机制。

```
$ kubectl proxy --port=8080 --address=192.168.100.211 --accept-hosts='^192\.168\.100\.*'
```

如果需要更多的命令使用帮助，可以使用 kubectl help proxy。

现在，你可以使用 Kubernetes Proxy API 进行访问。比如：需要访问一个服务，可以使用 `/api/v1/namespaces/<NAMESPACE>/services/<SERVICE-NAME>/proxy/`。

如果你需要直接访问一个 Pod，可以使用 /api/v1/namespaces/<NAMESPACE>/pods/<POD-NAME>/proxy/。