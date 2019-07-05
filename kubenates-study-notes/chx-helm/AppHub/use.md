第一步是添加 apphub 作为你的 Helm Hub Repo：

```
$ helm repo add apphub https://apphub.aliyuncs.com
```

可以直接在命令行搜索 guestbook：

```
$ helm search guestbook
NAME                       CHART VERSION   APP VERSION DESCRIPTION
apphub/guestbook           0.2.0           1.0.0       A Helm chart to deploy Guestbook three tier web...
```

然后，只需一行命令即可访问 Guestbook 服务:

```
$ helm install apphub/guestbook --version 0.2.0
```

部署完成后，运行以下命令来查询并等待 pods 启动完毕 (Running):

```
$ kubectl get pod
NAME                                   READY   STATUS    RESTARTS   AGE
guestbook-d85895895-5mdx6   1/1     Running   0          5m59s
guestbook-d85895895-zh4l4   1/1     Running   0          5m59s
redis-master-7b5cc58fc8-2wjmn          1/1     Running   0          5m59s
redis-slave-859585ff7f-4v9hj           1/1     Running   0          5m59s
redis-slave-859585ff7f-fppqn           1/1     Running   0          5m59s
```

查询服务地址:

```
$kubectl get service -l app.kubernetes.io/name=guestbook
NAME                   TYPE           CLUSTER-IP     EXTERNAL-IP     PORT(S)          AGE
guestbook   LoadBalancer   172.21.1.213   47.95.136.189   3000:32244/TCP   11m
```

通过 External IP 即可访问 guestbook 服务。

或者使用 NodePort：

```
$ helm install apphub/guestbook --set service.type=NodePort
```
