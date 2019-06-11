```
[node1 ~]$ kubectl get ns
NAME          STATUS    AGE
default       Active    5m
kube-public   Active    5m
kube-system   Active    5m
```

```
[node1 ~]$ kubectl get all
NAME                 TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE
service/kubernetes   ClusterIP   10.96.0.1    <none>        443/TCP   5m
```

```
[node1 ~]$ kubectl get all -n kube-system
NAME                                READY     STATUS    RESTARTS   AGE
pod/coredns-78fcdf6894-7vdkw        1/1       Running   0          6m
pod/coredns-78fcdf6894-nccsz        1/1       Running   0          6m
pod/etcd-node1                      1/1       Running   0          5m
pod/kube-apiserver-node1            1/1       Running   0          5m
pod/kube-controller-manager-node1   1/1       Running   0          5m
pod/kube-proxy-nc84d                1/1       Running   0          6m
pod/kube-proxy-zm8zg                1/1       Running   0          2m
pod/kube-scheduler-node1            1/1       Running   0          5m
pod/weave-net-97qqd                 2/2       Running   1          2m
pod/weave-net-b6vhj                 2/2       Running   0          3m

NAME               TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)         AGE
service/kube-dns   ClusterIP   10.96.0.10   <none>        53/UDP,53/TCP   6m

NAME                        DESIRED   CURRENT   READY     UP-TO-DATE   AVAILABLE   NODE SELECTOR          AGE
daemonset.apps/kube-proxy   2         2         2         2            2           beta.kubernetes.io/arch=amd64   6m
daemonset.apps/weave-net    2         2         2         2            2           <none>          3m

NAME                      DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/coredns   2         2         2            2           6m

NAME                                 DESIRED   CURRENT   READY     AGE
replicaset.apps/coredns-78fcdf6894   2         2         2         6m
[node1 ~]$
```

```
kubeadm init --apiserver-advertise-address $(hostname -i)

kubectl apply -n kube-system -f "https://cloud.weave.works/k8s/net?k8s-version=$(kubectl version | base64 |tr -d '\n')"
```

