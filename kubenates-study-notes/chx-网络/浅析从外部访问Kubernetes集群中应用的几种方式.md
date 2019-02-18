一般情况下，Kubernetes 的 Cluster Network 是属于私有网络，只能在 Cluster Network 内部才能访问部署的应用。那么如何才能将 Kubernetes 集群中的应用暴露到外部网络，为外部用户提供服务呢？

本文整理自：[浅析从外部访问 Kubernetes 集群中应用的几种方式](https://mp.weixin.qq.com/s/jynmVN3xXnZrAxM_gN8ohQ)

---

从外部网络访问 Kubernetes Cluster 中 Pod 和 Serivce 的几种常见的实现方式。目前主要包括如下几种：

* hostNetwork
* hostPort
* ClusterIP
* NodePort
* LoadBalancer
* Ingress

---

1. 通过 Pod 暴露
2. 通过 Service 暴露
    2.1 ClusterIP
    2.2 NodePort
    2.3 LoadBalancer
3. 通过 Ingress 暴露


> !!!!!
* `kubectl port-forward`
* `kubectl proxy`

---

## 1. 通过 Pod 暴露

##### hostNetwork: true
这是一种直接定义 Pod 网络的方式。
##### hostPort: port
这也是一种直接定义 Pod 网络的方式。
##### Port Forward

`$ kubectl port-forward pod-name local-port:container-port`

## 2. 通过 Service 暴露

Service 目前有三种类型：ClusterIP、NodePort 和 LoadBalancer。

##### ClusterIP
ClusterIP 是 Service 的缺省类型，这种类型的服务会自动分配一个只能在集群内部可以访问的虚拟 IP，即：ClusterIP。ClusterIP 为你提供一个集群内部其它应用程序可以访问的服务，外部无法访问。

```
apiVersion: v1
kind: Service
metadata:
    name: my-nginx
spec:
    type: ClusterIP
    targetPort: 80
    protocol: TCP
    ports:
     - name: http
     - port: 80
    selector:
        app: my-nginx
```

虽然我们从集群外部不能直接访问一个 ClusterIP 服务，但是你可以使用 Kubernetes Proxy API 来访问它。

```
$ kubectl proxy --port=8080 --address=192.168.100.211
```

现在，你可以使用 Kubernetes Proxy API 进行访问。比如：需要访问一个服务，可以使用 `/api/v1/namespaces/<NAMESPACE>/services/<SERVICE-NAME>/proxy/`。

如果你需要直接访问一个 Pod，可以使用 /api/v1/namespaces/<NAMESPACE>/pods/<POD-NAME>/proxy/。

##### NodePort
NodePort 在 Kubenretes 里是一个广泛应用的服务暴露方式。基于 ClusterIP 提供的功能，为 Service 在 Kubernetes 集群的每个节点上绑定一个端口，即 NodePort。集群外部可基于任何一个 NodeIP:NodePort 的形式来访问 Service。Service 在每个节点的 NodePort 端口上都是可用的。

NodePort 服务与默认的 ClusterIP 服务在 YAML 定义上有两点区别：首先，type 是 NodePort。其次还有一个称为 nodePort 的参数用来指定在节点上打开哪个端口。 如果你不指定这个端口，它会选择一个随机端口。nodePort 值的默认范围是 30000-32767，这个值是可以在 API Server 的配置文件中用 `--service-node-port-range` 来自定义。

```
apiVersion: v1
kind: Service
metadata:
    name: my-nginx
spec:
    type: NodePort
    targetPort: 80
    nodePort:31000
    ports:
     - port: 80
    selector:
        app: my-nginx
```

NodePort 类型的服务会在所有的 Kubenretes 节点（运行有 Kube-Proxy 的节点）上统一暴露出一个端口对外提供服务，这样集群外就可以使用 Kubernetes 任意一个节点的 IP 加上指定端口访问该服务了。Kube-Proxy 会自动将流量以 Round-Robin 的方式转发给该 Service 的每一个 Pod。

NodePort 类型的服务并不影响原来虚拟 IP 的访问方式，内部节点依然可以通过 `VIP:Port` 的方式进行访问。

NodePort 这种服务暴露方式也存在一些不足：
* 节点上的每个端口只能有一个服务。
* 如果节点 IP 地址发生更改，则需要相应机制处理该问题。

基于以上原因，NodePort 比较适用的场景为演示程序或临时应用，不建议在生产环境中使用这种方法对外暴露服务。

##### LoadBalancer
LoadBalancer 是基于 NodePort 和云服务供应商提供的外部负载均衡器，通过这个外部负载均衡器将外部请求转发到各个 `NodeIP:NodePort` 以实现对外暴露服务。

LoadBalancer 这种方式最大的不足就是每个暴露的服务需要使用一个公有云提供的负载均衡器 IP，这可能会付出比较大的成本代价。

> 总结！！！！

从上面几种 Service 的类型的结论来看，目前 Service 提供的负载均衡功能在使用上有以下限制：

* 只提供 4 层负载均衡，不支持 7 层负载均衡功能，比如：不能按需要的匹配规则自定义转发请求。
* 使用 NodePort 类型的 Service，需要在集群外部部署一个外部的负载均衡器。
* 使用 LoadBalancer 类型的 Service，Kubernetes 必须运行在特定的云服务上。


## 3. 通过 Ingress 暴露

Ingress 是自 Kubernetes 1.1 版本后引入的资源类型。Ingress 支持将 Service 暴露到 Kubernetes 集群外，同时可以自定义 Service 的访问策略。Ingress 能够把 Service 配置成外网能够访问的 URL，也支持提供按域名访问的虚拟主机功能。例如，通过负载均衡器实现不同的二级域名到不同 Service 的访问。

实际上 Ingress 只是一个统称，其由 Ingress 和 Ingress Controller 两部分组成。Ingress 用作将原来需要手动配置的规则抽象成一个 Ingress 对象，使用 YAML 格式的文件来创建和管理。Ingress Controller 用作通过与 Kubernetes API 交互，动态的去感知集群中 Ingress 规则变化。

```
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  name: simple-fanout-example
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /
spec:
  rules:
  - host: foo.bar.com
    http:
      paths:
      - path: /foo
        backend:
          serviceName: service1
          servicePort: 4200
      - path: /bar
        backend:
          serviceName: service2
          servicePort: 8080
```

总的来说 Ingress 是一个非常灵活和越来越得到厂商支持的服务暴露方式，包括：Nginx、HAProxy、Traefik、还有各种 Service Mesh，而其它服务暴露方式更适用于服务调试、特殊应用的部署。

