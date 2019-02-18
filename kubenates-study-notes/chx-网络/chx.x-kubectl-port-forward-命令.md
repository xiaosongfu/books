本文整理自：[浅析从外部访问 Kubernetes 集群中应用的几种方式](https://mp.weixin.qq.com/s/jynmVN3xXnZrAxM_gN8ohQ)

---

kubectl port-forward 命令可以为 Pod 设置端口转发，通过在本机指定监听端口，访问这些端口的请求将会被转发到 Pod 的容器中对应的端口上。

`$ kubectl port-forward pod-name local-port:container-port`
