https://kubernetes.cn/docs/tasks/access-application-cluster/web-ui-dashboard/

一个桌面客户端：https://kubernetic.com/

---

先下载 kubernetes-dashboard.yaml 文件，然后需要做一些修改。

```
[root@dockerapp ~]# wget https://raw.githubusercontent.com/kubernetes/dashboard/master/aio/deploy/recommended/kubernetes-dashboard.yaml
```

### 1. 修改 image

修改 `image: k8s.gcr.io/kubernetes-dashboard-amd64:v1.10.1` 为阿里云的 images：`image: registry.aliyuncs.com/google_containers/kubernetes-dashboard-amd64:v1.10.1`

原本为：

```
# ------------------- Dashboard Deployment ------------------- #

kind: Deployment
apiVersion: apps/v1
metadata:
  labels:
    k8s-app: kubernetes-dashboard
  name: kubernetes-dashboard
  namespace: kube-system
spec:
  replicas: 1
  revisionHistoryLimit: 10
  selector:
    matchLabels:
      k8s-app: kubernetes-dashboard
  template:
    metadata:
      labels:
        k8s-app: kubernetes-dashboard
    spec:
      containers:
      - name: kubernetes-dashboard
        image: k8s.gcr.io/kubernetes-dashboard-amd64:v1.10.1
        ports:
        - containerPort: 8443
          protocol: TCP
        args:
```

修改为：

```
# ------------------- Dashboard Deployment ------------------- #

kind: Deployment
apiVersion: apps/v1
metadata:
  labels:
    k8s-app: kubernetes-dashboard
  name: kubernetes-dashboard
  namespace: kube-system
spec:
  replicas: 1
  revisionHistoryLimit: 10
  selector:
    matchLabels:
      k8s-app: kubernetes-dashboard
  template:
    metadata:
      labels:
        k8s-app: kubernetes-dashboard
    spec:
      containers:
      - name: kubernetes-dashboard
        image: registry.aliyuncs.com/google_containers/kubernetes-dashboard-amd64:v1.10.1
        ports:
        - containerPort: 8443
          protocol: TCP
        args:
```

### 2. 修改 Service 为 NodePort 类型

Service 默认为 ClusterIP 类型，我们把它改为 NodePort 类型。

原本为：

```
# ------------------- Dashboard Service ------------------- #

kind: Service
apiVersion: v1
metadata:
  labels:
    k8s-app: kubernetes-dashboard
  name: kubernetes-dashboard
  namespace: kube-system
spec:
  ports:
    - port: 443
      targetPort: 8443
  selector:
    k8s-app: kubernetes-dashboard
```

修改为：

```
# ------------------- Dashboard Service ------------------- #

kind: Service
apiVersion: v1
metadata:
  labels:
    k8s-app: kubernetes-dashboard
  name: kubernetes-dashboard
  namespace: kube-system
spec:
  ports:
    - port: 443
      targetPort: 8443
  type: NodePort
  selector:
    k8s-app: kubernetes-dashboard
```

### 3. 开始安装

```
[root@dockerapp ~]# kubectl create -f kubernetes-dashboard.yaml
secret/kubernetes-dashboard-certs created
secret/kubernetes-dashboard-csrf created
serviceaccount/kubernetes-dashboard created
role.rbac.authorization.k8s.io/kubernetes-dashboard-minimal created
rolebinding.rbac.authorization.k8s.io/kubernetes-dashboard-minimal created
deployment.apps/kubernetes-dashboard created
service/kubernetes-dashboard created
```

### 4. 查看安装结果

```
[root@dockerapp ~]# kubectl get pods -n kube-system
NAME                                   READY   STATUS    RESTARTS   AGE
coredns-78d4cf999f-jvcgq               1/1     Running   5          26d
coredns-78d4cf999f-rpzln               1/1     Running   4          26d
etcd-dockerapp                         1/1     Running   4          26d
kube-apiserver-dockerapp               1/1     Running   5          26d
kube-controller-manager-dockerapp      1/1     Running   8          26d
kube-flannel-ds-amd64-j4f96            1/1     Running   5          25d
kube-flannel-ds-amd64-l85ph            1/1     Running   3          25d
kube-flannel-ds-amd64-plfdv            1/1     Running   6          25d
kube-proxy-22f9w                       1/1     Running   4          25d
kube-proxy-54fs5                       1/1     Running   4          25d
kube-proxy-psrtb                       1/1     Running   5          25d
kube-scheduler-dockerapp               1/1     Running   9          26d
kubernetes-dashboard-f94567dff-gcfzm   1/1     Running   0          51s
tiller-deploy-6bcc84d88-m9pk5          1/1     Running   0          6h16m
[root@dockerapp ~]# kubectl get deployments -n kube-system
NAME                   READY   UP-TO-DATE   AVAILABLE   AGE
coredns                2/2     2            2           26d
kubernetes-dashboard   1/1     1            1           58s
tiller-deploy          1/1     1            1           6h16m
[root@dockerapp ~]# kubectl get services -n kube-system
NAME                   TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)         AGE
kube-dns               ClusterIP   10.96.0.10      <none>        53/UDP,53/TCP   26d
kubernetes-dashboard   NodePort    10.96.235.169   <none>        443:31915/TCP   65s
tiller-deploy          ClusterIP   10.108.32.166   <none>        44134/TCP       11d
[root@dockerapp ~]#
```

通过 Service 看到了 kubernetes-dashboard Service 的端口对应为 443:31915，类型为 NodePort。

使用浏览器访问如下地址：`https://192.168.160.3:31915`，注意，一定要使用 https 协议！！！