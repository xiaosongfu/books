Deployment 部署的副本 Pod 会分布在各个 Node 上，每个 Node 都可能运行好几个副本。DaemonSet 的不同之处在于：每个 Node 上最多只能运行一个副本。

DaemonSet 的典型应用场景有：

* 在集群的每个节点上运行存储 Daemon，比如 glusterd 或 ceph。
* 在每个节点上运行日志收集 Daemon，比如 flunentd 或 logstash。
* 在每个节点上运行监控 Daemon，比如 Prometheus Node Exporter 或 collectd。
* 其实 Kubernetes 自己就在用 DaemonSet 运行系统组件。执行如下命令：

```
[root@dockerapp ~]# kubectl get daemonsets --all-namespaces
NAMESPACE     NAME                      DESIRED   CURRENT   READY   UP-TO-DATE   AVAILABLE   NODE SELECTOR                     AGE
kube-system   kube-flannel-ds-amd64     3         3         3       3            3           beta.kubernetes.io/arch=amd64     14d
kube-system   kube-proxy                3         3         3       3            3           <none>                            14d
```

DaemonSet `kube-flannel-ds-amd64` 和 `kube-proxy` 分别负责在每个节点上运行 flannel 和 kube-proxy 组件。

```
[root@dockerapp ~]# kubectl get pods -o wide --all-namespaces
NAMESPACE     NAME                                           READY   STATUS    RESTARTS   AGE     IP               NODE        NOMINATED NODE   READINESS GATES
kube-system   coredns-78d4cf999f-jvcgq                       1/1     Running   5          14d     10.244.0.16      dockerapp   <none>           <none>
kube-system   coredns-78d4cf999f-rpzln                       1/1     Running   4          14d     10.244.0.14      dockerapp   <none>           <none>

kube-system   etcd-dockerapp                                 1/1     Running   4          14d     192.168.160.3    dockerapp   <none>           <none>

kube-system   kube-apiserver-dockerapp                       1/1     Running   5          14d     192.168.160.3    dockerapp   <none>           <none>
kube-system   kube-controller-manager-dockerapp              1/1     Running   7          14d     192.168.160.3    dockerapp   <none>           <none>
kube-system   kube-scheduler-dockerapp                       1/1     Running   9          14d     192.168.160.3    dockerapp   <none>           <none>

kube-system   kube-flannel-ds-amd64-j4f96                    1/1     Running   5          14d     192.168.160.5    qgw-live    <none>           <none>
kube-system   kube-flannel-ds-amd64-l85ph                    1/1     Running   3          14d     192.168.160.13   maven       <none>           <none>
kube-system   kube-flannel-ds-amd64-plfdv                    1/1     Running   6          14d     192.168.160.3    dockerapp   <none>           <none>
kube-system   kube-proxy-22f9w                               1/1     Running   4          14d     192.168.160.3    dockerapp   <none>           <none>
kube-system   kube-proxy-54fs5                               1/1     Running   4          14d     192.168.160.13   maven       <none>           <none>
kube-system   kube-proxy-psrtb                               1/1     Running   5          14d     192.168.160.5    qgw-live    <none>           <none>
```


# 如何运行自己的 DaemonSet

DaemonSet 部署成功后，每个 node 上会运行一个 pod。