
```
[root@DockerApp ~]# kubeadm config images list
k8s.gcr.io/kube-apiserver:v1.13.2
k8s.gcr.io/kube-controller-manager:v1.13.2
k8s.gcr.io/kube-scheduler:v1.13.2
k8s.gcr.io/kube-proxy:v1.13.2
k8s.gcr.io/pause:3.1
k8s.gcr.io/etcd:3.2.24
k8s.gcr.io/coredns:1.2.6
[root@DockerApp ~]# kubeadm config images pull
failed to pull image "k8s.gcr.io/kube-apiserver:v1.13.2": output: Error response from daemon: Get https://k8s.gcr.io/v2/: net/http: request canceled while waiting for connection (Client.Timeout exceeded while awaiting headers)
, error: exit status 1
[root@DockerApp ~]#
```

拉取镜像报错，可以按照如下方法解决：

docker hub 上有一个用户： https://hub.docker.com/u/mirrorgooglecontainers ，这里有所有的这些镜像。

先根据自己的版本下载对应的镜像：

> 注意：coredns 为 coredns 用户下的

```
docker pull mirrorgooglecontainers/kube-apiserver:v1.13.2
docker pull mirrorgooglecontainers/kube-controller-manager:v1.13.2
docker pull mirrorgooglecontainers/kube-scheduler:v1.13.2
docker pull mirrorgooglecontainers/kube-proxy:v1.13.2
docker pull mirrorgooglecontainers/pause:3.1
docker pull mirrorgooglecontainers/etcd:3.2.24
docker pull coredns/coredns:1.2.6
```

下载完成后，改 tag：

```
docker tag mirrorgooglecontainers/kube-apiserver:v1.13.2 k8s.gcr.io/kube-apiserver:v1.13.2
docker tag mirrorgooglecontainers/kube-controller-manager:v1.13.2 k8s.gcr.io/kube-controller-manager:v1.13.2
docker tag mirrorgooglecontainers/kube-scheduler:v1.13.2 k8s.gcr.io/kube-scheduler:v1.13.2
docker tag mirrorgooglecontainers/kube-proxy:v1.13.2 k8s.gcr.io/kube-proxy:v1.13.2
docker tag mirrorgooglecontainers/pause:3.1 k8s.gcr.io/pause:3.1
docker tag mirrorgooglecontainers/etcd:3.2.24 k8s.gcr.io/etcd:3.2.24
docker tag coredns/coredns:1.2.6 k8s.gcr.io/coredns:1.2.6
```
