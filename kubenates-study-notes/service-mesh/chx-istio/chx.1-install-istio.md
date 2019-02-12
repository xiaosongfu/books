Istio 会被安装到自己的 istio-system 命名空间，并且能够对所有其他命名空间的服务进行管理。

命名空间为 istio-system 的 Pod，其中包含许多组件，如用于监控的Grafana、Prometheus，用于服务查看的 ServiceGraph，以及 Istio 组件 citadel、mixer、pilot 等。

## 1. 使用 kubectl apply 配置文件安装

## 2. 使用 helm 安装