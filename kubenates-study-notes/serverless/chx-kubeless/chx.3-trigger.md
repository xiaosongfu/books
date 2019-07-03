* http trigger
* cronjob trigger

---

通过定义 trigger 将事件源与函数进行关联。

kubeless 默认支持四种类型的 trigger：http、cronjob、kafka以及 nats。

# http trigger

http trigger 为函数创建了一个可以被外部访问的途径。kubeless 的 http trigger 的实现依赖于 kubernetes 的 ingress 机制。

```
$ kubeless trigger http create hello \
    --function-name hello \
    --hostname hello.example.com \
    --path echo \
    --gateway nginx
```

--gateway 指定 ingress controller 使用 ingress-nginx，除了 ingress-nginx，kubeless 还支持 traefik 和 kong。

查看 hello ingress 详情：

```
$ kubectl describe ingrss hello
``` 

# cronjob trigger

cronjob trigger 适用于需要定时执行的函数实例。

```
$ kubeless trigger cronjob create hello --function hello --schedule '*/5 * * * *'
```

每5分钟调用一次。

```
[root@dockerapp ~]# kubeless trigger cronjob list
NAME	NAMESPACE	SCHEDULE	FUNCTION NAME

[root@dockerapp ~]# kubectl get cronjobs
No resources found.

[root@dockerapp ~]# kubeless trigger cronjob create hello --function hello --schedule '*/5 * * * *'
INFO[0000] Cronjob trigger hello created in namespace default successfully!

[root@dockerapp ~]# kubeless trigger cronjob list
NAME 	NAMESPACE	SCHEDULE   	FUNCTION NAME
hello	default  	*/5 * * * *	hello

[root@dockerapp ~]# kubectl get cronjobs
NAME            SCHEDULE      SUSPEND   ACTIVE   LAST SCHEDULE   AGE
trigger-hello   */5 * * * *   False     0        <none>          17s

[root@dockerapp ~]# kubectl describe cronjob trigger-hello
Name:                       trigger-hello
Namespace:                  default
Labels:                     created-by=kubeless
                            function=hello
Annotations:                <none>
Schedule:                   */5 * * * *
Concurrency Policy:         Allow
Suspend:                    False
Starting Deadline Seconds:  <unset>
Selector:                   <unset>
Parallelism:                <unset>
Completions:                <unset>
Active Deadline Seconds:    180s
Pod Template:
  Labels:  <none>
  Containers:
   trigger:
    Image:      kubeless/unzip@sha256:f162c062973cca05459834de6ed14c039d45df8cdb76097f50b028a1621b3697
    Port:       <none>
    Host Port:  <none>
    Args:
      curl
      -Lv
       -H "event-id: Ko6fzWWvMN-ausA" -H "event-time: 2019-01-31 14:21:26.60639042 +0000 UTC" -H "event-type: application/json" -H "event-namespace: cronjobtrigger.kubeless.io"
      http://hello.default.svc.cluster.local:8080
    Limits:
      cpu:     1m
      memory:  4Mi
    Requests:
      cpu:           1m
      memory:        4Mi
    Environment:     <none>
    Mounts:          <none>
  Volumes:           <none>
Last Schedule Time:  <unset>
Active Jobs:         <none>
Events:              <none>
[root@dockerapp ~]#
```

通过查看 hello cronjob 对象的详细定义可以看到， hello cronjob 对象每5分钟运行一个 `kubeless/unzip` 容器，容器启动后执行 curl 命令访问函数：`curl -Lv -H "event-id: Ko6fzWWvMN-ausA" -H "event-time: 2019-01-31 14:21:26.60639042 +0000 UTC" -H "event-type: application/json" -H "event-namespace: cronjobtrigger.kubeless.io" http://hello.default.svc.cluster.local:8080`，访问的函数地址为：`http://hello.default.svc.cluster.local:8080`

