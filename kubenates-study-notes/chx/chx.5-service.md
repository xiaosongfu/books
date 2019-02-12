Kubernetes Service 从逻辑上代表了一组 Pod，具体是哪些 Pod 则是由 label 来挑选。Service 有自己 IP，而且这个 IP 是不变的。客户端只需要访问 Service 的 IP，Kubernetes 则负责建立和维护 Service 与 Pod 的映射关系。无论后端 Pod 如何变化，对客户端不会有任何影响，因为 Service 没有变。

# 1. 集群内服务 Service

## 1.1 使用 Cluster IP 访问 Service

Kubernetes 集群内部可以通过 Cluster IP 和 DNS 访问 Service。

创建下面的这个 Deployment:

```
apiVersion: apps/v1beta1
kind: Deployment
metadata:
    name: httpd
spec:
    replicas: 3
    template:
        metadata:
            labels:
                run: httpd
        spec:
            containers:
            - name: httpd
              image: httpd
              ports:
              - containerPort: 80
```

启动三个 Pod，运行 httpd 镜像，label 是 `run: httpd`，Service 将会用这个 label 来挑选 Pod。

Pod 分配了各自的 IP，这些 IP 只能被 Kubernetes Cluster 中的容器和节点访问。

接下来创建 Service:

```
apiVersion: v1
kind: Service
metadata:
    name: httpd-svc
spec:
    selector:
        run: httpd
    ports:
    - protocol: TCP
      port: 808
      targetPort: 80
```

① v1 是 Service 的 apiVersion。
② 指明当前资源的类型为 Service。
③ Service 的名字为 httpd-svc。
④ selector 指明挑选那些 label 为 run: httpd 的 Pod 作为 Service 的后端。
⑤ 将 Service 的 8080 端口映射到 Pod 的 80 端口，使用 TCP 协议。

httpd-svc 分配到一个 CLUSTER-IP。可以通过该 IP 访问后端的 httpd Pod。

通过 `kubectl describe service httpd-svc` 可以查看 httpd-svc 与 Pod 的对应关系。在 EndPoints 字段，类似这样：`EndPoints: 10.224.1.1:80,10.224.2.2:80,10.224.2.3:80`。Endpoints 罗列了三个 Pod 的 IP 和端口。

> CLUSTER-IP 是如何映射到 Pod IP 的呢？

iptables/vps 将访问 Service 的流量转发到后端 Pod，而且使用类似轮询的负载均衡策略。

另外需要补充一点：Cluster 的每一个节点都配置了相同的 iptables/vps 规则，这样就确保了整个 Cluster 都能够通过 Service 的 Cluster IP 访问 Service。

## 1.2 使用 DNS 访问 Service

Cluster 中的 Pod 可以通过 <SERVICE_NAME>.<NAMESPACE_NAME> 访问 Service。

如果是同一个 NAMESPACE_NAME，还可以省略 NAMESPACE_NAME，直接使用 SERVICE_NAME 访问 Service。

# 2. 集群外访问 Service

Kubernetes 集群内部可以通过 Cluster IP 和 DNS 访问 Service，那么集群外部如何访问呢？

除了 Cluster 内部可以访问 Service，很多情况我们也希望应用的 Service 能够暴露给 Cluster 外部。Kubernetes 提供了多种类型的 Service，默认是 ClusterIP。

> ClusterIP 
Service 通过 Cluster 内部的 IP 对外提供服务，只有 Cluster 内的节点和 Pod 可访问，这是默认的 Service 类型，前面实验中的 Service 都是 ClusterIP。

> NodePort 
Service 通过 Cluster 节点的静态端口对外提供服务。Cluster 外部可以通过 <NodeIP>:<NodePort> 访问 Service。

> LoadBalancer 
Service 利用 cloud provider 特有的 load balancer 对外提供服务，cloud provider 负责将 load balancer 的流量导向 Service。目前支持的 cloud provider 有 GCP、AWS、Azur 等。

