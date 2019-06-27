## 1. Master node(s) 需要一些端口

* 6443(Kubernetes API server)
* 10250(Kubelet API)
* 10251(kube-scheduler)
* 10252(kube-controller-manager)
* 2379-2380(etcd server client API)

## 2. Worker node(s) 需要一些端口

* 10250(Kubelet API)

## 3. NodePort Type Services

* 30000-32767(NodePort Services)
