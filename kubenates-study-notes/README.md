```
dispatcher.onGet('/health', function (req, res) {
  res.writeHead(200, {'Content-type': 'application/json'})
  res.end(JSON.stringify({status: 'Ratings is healthy'}))
})
```

```
server.mount_proc '/health' do |req, res|
    res.status = 200
    res.body = {'status' => 'Details is healthy'}.to_json
    res['Content-Type'] = 'application/json'
end
```


---

### kube-apiserver
API Server 提供 HTTP/HTTPS RESTful API，即 Kubernetes API。API Server 是 Kubernetes Cluster 的前端接口，各种客户端工具（CLI 或 UI）以及 Kubernetes 其他组件可以通过它管理 Cluster 的各种资源。

### kube-scheduler
Scheduler 负责决定将 Pod 放在哪个 Node 上运行。Scheduler 在调度时会充分考虑 Cluster 的拓扑结构，当前各个节点的负载，以及应用对高可用、性能、数据亲和性的需求。

### kube-controoler-manager
Controller Manager 负责管理 Cluster 各种资源，保证资源处于预期的状态。Controller Manager 由多种 controller 组成，包括 replication controller、endpoints controller、namespace controller、serviceaccounts controller 等。
不同的 controller 管理不同的资源。例如 replication controller 管理 Deployment、StatefulSet、DaemonSet 的生命周期，namespace controller 管理 Namespace 资源。

### kubelet
kubelet 是 Node 的 agent，当 Scheduler 确定在某个 Node 上运行 Pod 后，会将 Pod 的具体配置信息（image、volume 等）发送给该节点的 kubelet，kubelet 根据这些信息创建和运行容器，并向 Master 报告运行状态。

### kube-proxy
service 在逻辑上代表了后端的多个 Pod，外界通过 service 访问 Pod。service 接收到的请求是如何转发到 Pod 的呢？这就是 kube-proxy 要完成的工作。

每个 Node 都会运行 kube-proxy 服务，它负责将访问 service 的 TCP/UPD 数据流转发到后端的容器。如果有多个副本，kube-proxy 会实现负载均衡。

### Pod 网络
Pod 要能够相互通信，Kubernetes Cluster 必须部署 Pod 网络，flannel 是其中一个可选方案。

---

kubelet 是唯一没有以容器形式运行的 Kubernetes 组件，它在 Ubuntu 中通过 Systemd 运行。

```
[root@dockerapp ~]# systemctl status kubelet
● kubelet.service - kubelet: The Kubernetes Node Agent
   Loaded: loaded (/etc/systemd/system/kubelet.service; enabled; vendor preset: disabled)
  Drop-In: /etc/systemd/system/kubelet.service.d
           └─10-kubeadm.conf
   Active: active (running) since Thu 2019-01-17 18:51:10 CST; 4 days ago
     Docs: https://kubernetes.io/docs/
 Main PID: 16499 (kubelet)
    Tasks: 22
   Memory: 78.3M
   CGroup: /system.slice/kubelet.service
           └─16499 /usr/bin/kubelet --bootstrap-kubeconfig=/etc/kubernetes/bootstrap-kubelet.conf --kubeconfig=/etc/kubernetes/kubelet.conf --config=/var/lib/kubelet/config.yaml --cgroup-driver=cgroupfs --network-plugin=cni -...

Jan 17 19:14:10 dockerapp kubelet[16499]: E0117 19:14:10.956418   16499 kubelet_node_status.go:380] Error updating node status, will retry: error getting node "dockerapp": Get https://192.168.160.3:6443/api/v1...waiting headers)
Jan 17 19:14:25 dockerapp kubelet[16499]: E0117 19:14:25.165679   16499 event.go:203] Server rejected event '&v1.Event{TypeMeta:v1.TypeMeta{Kind:"", APIVersion:""}, ObjectMeta:v1.ObjectMeta{Name:"kube-schedule..."", Generation:0
Jan 17 19:21:07 dockerapp kubelet[16499]: I0117 19:21:07.631004   16499 reconciler.go:207] operationExecutor.VerifyControllerAttachedVolume started for volume "default-token-ws8ql" (UniqueName: "kubernetes.io/secret/fc05f998-...
Jan 17 19:21:08 dockerapp kubelet[16499]: W0117 19:21:08.823709   16499 pod_container_deletor.go:75] Container "25891036a2e3f4208bc32c32ee97a7cf8cabbe4f3fad442c75e737680da5d359" not found in pod's containers
Jan 17 19:21:39 dockerapp kubelet[16499]: I0117 19:21:39.573308   16499 reconciler.go:181] operationExecutor.UnmountVolume started for volume "default-token-ws8ql" (UniqueName: "kubernetes.io/secret/cac78142-1a48-11e9-ba96-00...
Jan 17 19:21:39 dockerapp kubelet[16499]: I0117 19:21:39.579889   16499 operation_generator.go:687] UnmountVolume.TearDown succeeded for volume "kubernetes.io/secret/cac78142-1a48-11e9-ba96-0050569c686c-default-token-ws8ql" (...
Jan 17 19:21:39 dockerapp kubelet[16499]: I0117 19:21:39.673518   16499 reconciler.go:301] Volume detached for volume "default-token-ws8ql" (UniqueName: "kubernetes.io/secret/cac78142-1a48-11e9-ba96-0050569c68...p" DevicePath ""
Jan 17 19:28:12 dockerapp kubelet[16499]: I0117 19:28:12.800002   16499 reconciler.go:181] operationExecutor.UnmountVolume started for volume "default-token-ws8ql" (UniqueName: "kubernetes.io/secret/fc05f998-1a49-11e9-ba96-00...
Jan 17 19:28:12 dockerapp kubelet[16499]: I0117 19:28:12.807912   16499 operation_generator.go:687] UnmountVolume.TearDown succeeded for volume "kubernetes.io/secret/fc05f998-1a49-11e9-ba96-0050569c686c-default-token-ws8ql" (...
Jan 17 19:28:12 dockerapp kubelet[16499]: I0117 19:28:12.900218   16499 reconciler.go:301] Volume detached for volume "default-token-ws8ql" (UniqueName: "kubernetes.io/secret/fc05f998-1a49-11e9-ba96-0050569c68...p" DevicePath ""
Hint: Some lines were ellipsized, use -l to show in full.
[root@dockerapp ~]#
```

---

Controller
    * Deployments
    * ReplicaSet
    * Services
    * Job
    * CronJob

CRD（CustomResourceDefinenation）：
    比如：kubeless 有 Functions、Triggers 和 

---

```
scheduler
英 ['ʃedju:lə(r)] 美 ['ʃedju:lə(r)]  
n. 调度程序，日程安排程序
```