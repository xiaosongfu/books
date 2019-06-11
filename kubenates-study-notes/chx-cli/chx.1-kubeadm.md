https://kubernetes.io/docs/reference/setup-tools/kubeadm/kubeadm/

---

* kubeadm init

* kubeadm join

* kubeadm reset

* kubeadm config

`kubeadm config images list` 命令查看本次安装会用到的 k8s.gcr.io 仓库里的镜像的版本号，如：

```
$ kubeadm config images list
k8s.gcr.io/kube-apiserver-amd64:v1.11.2
k8s.gcr.io/kube-controller-manager-amd64:v1.11.2
k8s.gcr.io/kube-scheduler-amd64:v1.11.2
k8s.gcr.io/kube-proxy-amd64:v1.11.2
k8s.gcr.io/pause:3.1
k8s.gcr.io/etcd-amd64:3.2.18
k8s.gcr.io/coredns:1.1.3
```

`kubeadm config images pull` 命令把所有等下需要的 k8s.gcr.io 仓库里的镜像拉取下来，如：

```
$ kubeadm config images pull
[config/images] Pulled k8s.gcr.io/kube-apiserver-amd64:v1.11.2
[config/images] Pulled k8s.gcr.io/kube-controller-manager-amd64:v1.11.2
[config/images] Pulled k8s.gcr.io/kube-scheduler-amd64:v1.11.2
[config/images] Pulled k8s.gcr.io/kube-proxy-amd64:v1.11.2
[config/images] Pulled k8s.gcr.io/pause:3.1
[config/images] Pulled k8s.gcr.io/etcd-amd64:3.2.18
[config/images] Pulled k8s.gcr.io/coredns:1.1.3
```
