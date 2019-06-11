* 1. 安装 istio
* 2. 安装 Serving、Build、Eventing


---

## 1. 安装 istio

istio 的 YAML 声明文件可以从 Google Storage 或 GitHub 获取。

```
# 从 Google Storage 获取最新的 yaml 声明文件
kubectl apply -f https://storage.googleapis.com/knative-releases/serving/latest/istio.yaml
# 从 GitHub 获取指定版本的 yaml 声明文件
kubectl apply -f https://github.com/knative/serving/releases/download/v0.5.1/istio.yaml


kubectl label namespace default istio-injection=enabled
```

第一个命令将所有必需的 Istio 对象导入集群。第二个命令在 default 命名空间中启用 Istio 自动注入。这可以确保 Istio 在 default 命名空间中为每个 Pod 创建时自动注入边车（sidecar）。

使用以下命令验证 Istio 安装，直到所有 Pod 显示为运行或完成：

```
kubectl get pods -n istio-system --watch
```

现在您已经使用 Istio 运行了集群，可以开始安装 Knative。

## 2. 安装 Serving、Build、Eventing

YAML 声明文件可以从 Google Storage 或 GitHub 获取。

```
kubectl apply -f https://storage.googleapis.com/knative-releases/serving/latest/release.yaml

kubectl apply -f https://storage.googleapis.com/knative-releases/build/latest/release.yaml
```

使用以下命令监视它们，直到所有 Pod 显示为运行：

```
kubectl get pods --namespace knative-serving --watch
kubectl get pods --namespace knative-build --watch
```

Serving 和 Build 安装完成并运行后，按照类似的步骤启动 Eventing 模块：

```
kubectl apply --filename https://storage.googleapis.com/knative-releases/eventing/latest/release.yaml
```

使用以下命令监视它们，直到所有 Pod 显示为运行：

```
kubectl get pods --namespace knative-eventing --watch
```

最后，你可以选择安装你需要的 Build Template。下面是安装 Kaniko 和 Buildpacks 模板的命令：

```
kubectl apply -f https://raw.githubusercontent.com/knative/build-templates/master/kaniko/kaniko.yaml

kubectl apply -f https://raw.githubusercontent.com/knative/build-templates/master/buildpack/buildpack.yaml
```

可以使用 `kubectl get buildtemplates` 命令验证 Build Template 是否已成功安装。这将返回 default 命名空间中安装的所有构建模板的列表：

```
kubectl get buildtemplates
```

