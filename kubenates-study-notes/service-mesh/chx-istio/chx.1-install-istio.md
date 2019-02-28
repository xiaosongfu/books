Istio 会被安装到自己的 istio-system 命名空间，并且能够对所有其他命名空间的服务进行管理。

命名空间为 istio-system 的 pod，其中包含许多组件，如用于监控的Grafana、Prometheus，用于服务查看的 ServiceGraph，以及 Istio 组件 citadel、mixer、pilot 等。

# 1. 安装

> **重要提示：** 每次安装都请参考官方文档，因为安装文档一直在更新！！！！！

进入 [Istio release](https://github.com/istio/istio/releases) 页面，下载对应目标操作系统的安装文件。下载完成后解压：

```
$ wget https://github.com/istio/istio/releases/download/1.0.5/istio-1.0.5-linux.tar.gz

$ tar -xvf istio-1.0.5-linux.tar.gz
```

安装目录中包含：
* `install/` 目录中包含了 Kubernetes 安装所需的 `.yaml` 文件
* `samples/` 目录中是示例应用
* `bin/` 目录保存 `istioctl` 可执行文件。`istioctl` 的功能是手工进行 Envoy Sidecar 的注入，以及对路由规则、策略的管理
* `istio.VERSION` 配置文件

把 `istioctl` 客户端加入 PATH 环境变量:

```
$ cp bin/istioctl /usr/local/bin/
```

---

首先需要安装自定义资源定义（CRD）：

```
kubectl apply -f install/kubernetes/helm/istio/templates/crds.yaml
```

要安装 Istio 的核心组件，您可以选择以下四种互斥选项中的任何一种。但是，对于Istio的生产设置，我们建议使用 Helm Chart 进行安装，以使用所有配置选项。

> 参考：https://istio.io/zh/docs/setup/kubernetes/quick-start/  
> 总结：建议使用 helm 安装。

##### 选项1：安装 Istio 而不启用 sidecar 之间的双向 TLS 验证。

安装 Istio 而不启用 sidecar 之间的双向 TLS 验证。对于现有应用程序的集群，使用 Istio sidecar 的服务需要能够与其他非 Istio Kubernetes 服务以及使用存活和就绪探针、headless 服务或 StatefulSets 的应用程序通信的应用程序选择此选项。

```
$ kubectl apply -f install/kubernetes/istio-demo.yaml
```

##### 选项2：默认情况下安装 Istio，并强制在 sidecar 之间进行双向 TLS 身份验证。

默认情况下安装 Istio，并强制在 sidecar 之间进行双向 TLS 身份验证。仅在保证新部署的工作负载安装了 Istio sidecar 的新建的 Kubernetes 集群上使用此选项。

```
$ kubectl apply -f install/kubernetes/istio-demo-auth.yaml
```

##### 选项3：使用 Helm 渲染 Kubernetes 清单文件并使用 `kubectl` 进行部署

> 参考：https://istio.io/docs/setup/kubernetes/helm-install/#option-1-install-with-helm-via-helm-template

将 Istio 的核心组件渲染为名为 `istio.yaml` 的 Kubernetes 清单文件：

```
$ helm template install/kubernetes/helm/istio --name istio --namespace istio-system > $HOME/istio.yaml
```

通过清单文件安装组件

```
$ kubectl create namespace istio-system
$ kubectl create -f $HOME/istio.yaml
```

##### 选项4：通过 Helm 和 Tiller 的 helm install 安装 Istio

> 参考：https://istio.io/docs/setup/kubernetes/helm-install/#option-2-install-with-helm-and-tiller-via-helm-install

此选项允许 Helm 和 Tiller 管理 Istio 的生命周期。

安装 Istio：

```
$ helm install install/kubernetes/helm/istio --name istio --namespace istio-system
```

默认情况下，Istio 使用 LoadBalancer 服务对象类型。某些平台不支持 LoadBalancer 服务对象。对于缺乏 LoadBalancer 支持的平台，我们使用 NodePort 服务对象类型来代替，使用如下附加到 Helm 命令的标志安装：

```
--set gateways.istio-ingressgateway.type=NodePort --set gateways.istio-egressgateway.type=NodePort
```

**我使用了如下的命令安装：**

```
$ helm install install/kubernetes/helm/istio \
 --name istio \
 --namespace istio-system \
 --set tracing.enabled=true \
 --set kiali.enabled=true \
 --set grafana.enabled=true \
 --set gateways.istio-ingressgateway.type=NodePort \
 --set gateways.istio-egressgateway.type=NodePort
```

就是启用了 tracing 、kiali 、grafana，默认 tracing 、kiali 、grafana 并不会开启。

更多的命令选项请参考：[安装选项](https://istio.io/zh/docs/reference/config/installation-options/)

# 2. 验证安装

1. 确保这些服务被部署好了：`istio-pilot`, `istio-ingressgateway`, `istio-policy`, `istio-telemetry`, `prometheus`, `istio-galley`

`istio-sidecar-injector` 是可选的：

```
kubectl get services -n istio-system
```

2. 确保相应的 pod 都部署成功，并且里面的容器都正常启动和运行：`istio-pilot-*`, `istio-ingressgateway-*`, `istio-egressgateway-*`, `istio-policy-*`, `istio-telemetry-*`, `istio-citadel-*`, `prometheus-*`, `istio-galley-*`

`istio-sidecar-injector-*` 是可选的：

```
kubectl get pods -n istio-system
```

# 3. 部署应用测试

哈哈哈哈！！！

# 4. 卸载

如果您使用 `kubectl create xx.yaml` 安装的 Istio，则使用 `kubectl delete -f xx.yaml 来删除，比如：

```
$ kubectl delete -f install/kubernetes/istio.yaml
```

如果使用 helm 安装的，对于选项1，使用 kubectl 进行卸载：

```
$ kubectl delete -f $HOME/istio.yaml
```

对于选项2，使用 Helm 进行卸载：

```
$ helm delete --purge istio
```

# 5. 执行命令记录

```
[root@dockerapp istio-1.0.5]# kubectl apply -f install/kubernetes/helm/istio/templates/crds.yaml
customresourcedefinition.apiextensions.k8s.io/virtualservices.networking.istio.io created
customresourcedefinition.apiextensions.k8s.io/destinationrules.networking.istio.io created
customresourcedefinition.apiextensions.k8s.io/serviceentries.networking.istio.io created
customresourcedefinition.apiextensions.k8s.io/gateways.networking.istio.io created
customresourcedefinition.apiextensions.k8s.io/envoyfilters.networking.istio.io created
customresourcedefinition.apiextensions.k8s.io/policies.authentication.istio.io created
customresourcedefinition.apiextensions.k8s.io/meshpolicies.authentication.istio.io created
customresourcedefinition.apiextensions.k8s.io/httpapispecbindings.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/httpapispecs.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/quotaspecbindings.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/quotaspecs.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/rules.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/attributemanifests.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/bypasses.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/circonuses.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/deniers.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/fluentds.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/kubernetesenvs.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/listcheckers.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/memquotas.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/noops.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/opas.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/prometheuses.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/rbacs.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/redisquotas.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/servicecontrols.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/signalfxs.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/solarwindses.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/stackdrivers.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/statsds.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/stdios.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/apikeys.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/authorizations.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/checknothings.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/kuberneteses.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/listentries.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/logentries.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/edges.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/metrics.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/quotas.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/reportnothings.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/servicecontrolreports.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/tracespans.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/rbacconfigs.rbac.istio.io created
customresourcedefinition.apiextensions.k8s.io/serviceroles.rbac.istio.io created
customresourcedefinition.apiextensions.k8s.io/servicerolebindings.rbac.istio.io created
customresourcedefinition.apiextensions.k8s.io/adapters.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/instances.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/templates.config.istio.io created
customresourcedefinition.apiextensions.k8s.io/handlers.config.istio.io created
```

---

参考：

* [Kubernetes 实战教学，手把手教您在 K8s 集群上部署 Istio Mesh（一）](https://mp.weixin.qq.com/s/jX_OEylXumTeVKoaGnpKYw)
* [Kubernetes 实战教学，手把手教您在 K8s 集群上部署 Istio Mesh（二）](https://mp.weixin.qq.com/s/aph9_loXHkK1vBP2842zzg)
* []()
* []()