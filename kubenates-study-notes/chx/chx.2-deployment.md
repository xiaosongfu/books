# 增加或减少 Pod 的副本数

修改 yaml 配置文件的 replicas 数量，重新 kubectl apply -f xx.yaml 即可。

# 故障转移

副本分别运行在 k8s-node1 和 k8s-node2 上。现在模拟 k8s-node2 故障，关闭该节点。

等待一段时间，Kubernetes 会检查到 k8s-node2 不可用，将 k8s-node2 上的 Pod 标记为 Unknown 状态，并在 k8s-node1 上新创建这些 Pod，维持总副本数不变。

当 k8s-node2 恢复后，Unknown 的 Pod 会被删除，不过已经运行的 Pod 不会重新调度回 k8s-node2。

# 控制 Pod 运行的位置

默认配置下，Scheduler 会将 Pod 调度到所有可用的 Node。不过有些情况我们希望将 Pod 部署到指定的 Node，比如将有大量磁盘 I/O 的 Pod 部署到配置了 SSD 的 Node；或者 Pod 需要 GPU，需要运行在配置了 GPU 的节点上。

Kubernetes 是通过 label 来实现这个功能的。

label 是 key-value 对，各种资源都可以设置 label，灵活添加各种自定义属性。比如执行如下命令标注 k8s-node1 是配置了 SSD 的节点。

```
kubectl label node k8s-node1 disktype=ssd
```

然后通过 `kubectl get node --show-labels` 查看节点的 label。

有了 disktype 这个自定义 label，接下来就可以指定将 Pod 部署到 k8s-node1。编辑  yml 配置文件：

```
spec:
    template:
        ...
        spec:
            containers:
            - name: nginx
              image:nginx:1.7.9
            nodeSelector:
                disktype: ssd
```

要删除 label disktype，执行如下命令：

```
kubectl label node k8s-node1 disktype-
```

`-` 即表示删除的意思。不过此时 Pod 并不会重新部署，依然在 k8s-node1 上运行。除非在  yml 配置文件中删除 nodeSelector 设置，然后通过 kubectl apply 重新部署。这样 Kubernetes 会删除之前的 Pod 并调度和运行新的 Pod。


