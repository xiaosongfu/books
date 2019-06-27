kubectl 使用的配置文件通常存储在 `~/.kube/config` 文件中，如果存储在其他位置，环境变量 `KUBECONFIG` 需要指向配置文件的位置。

## 1. 查看当前配置

命令：`kubectl config view`

```
apiVersion: v1
kind: Config
clusters:
  - name: kubernetes
    cluster:
        certificate-authority-data: DATA+OMITTED
        server: https://192.168.160.3:6443
contexts:
  - name: kubernetes-admin@kubernetes
    context:
        cluster: kubernetes
        user: kubernetes-admin
users:
  - name: kubernetes-admin
    user:
      client-certificate-data: REDACTED
      client-key-data: REDACTED
current-context: kubernetes-admin@kubernetes
preferences: {}
```

该配置文件由：集群列表、用户列表、context 列表，current-context 组成。

## 2. 查询、添加和修改配置

添加或修改一个集群：

```
kubectl config set-cluster my-other-cluster \
  --server=https://k8s.example.com:6443 \
  --certificate-authority=path/to/the/cafile
```

添加或修改用户凭证：

```
kubectl config set-credentials foo --username=foo --password=pass
```

将集群和用户凭证联系到一起：

```
kubectl set-context some-context --cluster=my-ohter-cluster --user=foo --namespace=bar

# 修改默认 namespace
kubectl set-context some-context --namespace=bar
```

删除 context 和集群：

```
kubectl config delete-context some-context

kubectl config delete-cluster my-other-cluster
```

## x. 查看、切换 context

```
kubectl config view

kubectl config get-contexts

kubectl config get-clusters

# 获取当前上下文
kubectl config current-context

# 更改当前上下文
kubectl config use-context docker-for-mac 
kubectl config use-context minikube
```

kubectl get pods --context=minikube
