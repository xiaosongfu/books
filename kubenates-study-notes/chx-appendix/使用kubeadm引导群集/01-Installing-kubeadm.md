# Installing kubeadm

> 原文链接：[Installing kubeadm](https://kubernetes.cn/docs/setup/independent/install-kubeadm/)

---

此页面显示如何安装 `kubeadm` 工具箱。有关如何在执行此安装过程后使用kubeadm创建集群的信息，请参阅 [使用kubeadm创建集群](https://kubernetes.cn/docs/setup/independent/create-cluster-kubeadm/) 页面。

## 在你开始之前(Before you begin)

讲一些机器的硬件配置

要求必须关闭 swapoff ：`sudo swapoff -a  `

## 验证 MAC 地址和 product_uuid 对于每个节点都是唯一的(Verify the MAC address and product_uuid are unique for every node)

## 检查网络适配器(Check network adapters)

## 检查需要的端口(Check required ports)

Master node(s) 需要一些端口：如 6443(Kubernetes API server)、2379-2380(etcd server client API)、10250(Kubelet API)、10251(kube-scheduler)、10252(kube-controller-manager)

Worker node(s) 需要一些端口：如 10250(Kubelet API)、30000-32767(NodePort Services)

## 安装运行时(Installing runtime)

自 v1.6.0起，Kubernetes 默认启用了 CRI，Container Runtime Interface。默认情况下使用的容器运行时是 Docker，它通过 kubelet 内置的 dockershim CRI 实现启用。

## 安装 kubeadm, kubelet and kubectl()

您将在所有计算机上安装这些软件包：
* `kubeadm`: the command to bootstrap the cluster.
* `kubelet`: the component that runs on all of the machines in your cluster and does things like starting pods and containers.
* `kubectl`: the command line util to talk to your cluster.

kubeadm 不会为您安装或管理 kubelet 或 kubectl，因此您需要确保它们与您希望 kubeadm 为您安装的 Kubernetes 控制面板的版本相匹配。如果不这样做，则存在版本偏差的风险，这可能导致意外的错误行为。但是，支持 kubelet 和控制平面之间的一个次要版本倾斜，但 kubelet 版本可能永远不会超过 API 服务器版本。例如，运行 1.7.0 的 kubelet 应该与 1.8.0 API 服务器完全兼容，但反之不可以。

> CentOS, RHEL or Fedora

```
cat <<EOF > /etc/yum.repos.d/kubernetes.repo
[kubernetes]
name=Kubernetes
baseurl=https://packages.cloud.google.com/yum/repos/kubernetes-el7-x86_64
enabled=1
gpgcheck=1
repo_gpgcheck=1
gpgkey=https://packages.cloud.google.com/yum/doc/yum-key.gpg https://packages.cloud.google.com/yum/doc/rpm-package-key.gpg
exclude=kube*
EOF
```

```
# Set SELinux in permissive mode (effectively disabling it)
setenforce 0
sed -i 's/^SELINUX=enforcing$/SELINUX=permissive/' /etc/selinux/config
```

```
yum install -y kubelet kubeadm kubectl --disableexcludes=kubernetes
```

```
systemctl enable kubelet && systemctl start kubelet
```

> 更多信息请参考原文。