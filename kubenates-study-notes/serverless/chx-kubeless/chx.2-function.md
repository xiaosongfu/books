```
[root@dockerapp ~]# kubectl get pods
NAME                            READY   STATUS    RESTARTS   AGE
gzpower-docs-6f6b964c76-6wdnr   1/1     Running   1          3d23h
hello-65798c97b9-c2xcc          1/1     Running   1          3d23h

[root@dockerapp ~]# kubectl get deployments
NAME           READY   UP-TO-DATE   AVAILABLE   AGE
gzpower-docs   1/1     1            1           9d
hello          1/1     1            1           7d11h

[root@dockerapp ~]# kubectl get services
NAME           TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)          AGE
gzpower-docs   NodePort    10.101.65.152    <none>        3000:30173/TCP   9d
hello          ClusterIP   10.111.185.120   <none>        8080/TCP         7d11h
kubernetes     ClusterIP   10.96.0.1        <none>        443/TCP          14d
[root@dockerapp ~]#
```
---

# 部署函数

```
kubeless function deploy hello --runtime python2.7 --from-file hello.py --handler hello.hello
```

function 部署完毕后，kubeless 会在 kubernetes 中生成一个对应的 Deployment。

```
[root@dockerapp ~]# kubectl get deployments
NAME           READY   UP-TO-DATE   AVAILABLE   AGE
hello          1/1     1            1           7d10h

[root@dockerapp ~]# kubectl get pods -o wide
NAME                            READY   STATUS    RESTARTS   AGE     IP            NODE        NOMINATED NODE   READINESS GATES
hello-65798c97b9-c2xcc          1/1     Running   1          3d23h   10.244.0.15   dockerapp   <none>           <none>

[root@dockerapp ~]# kubectl describe deployment hello
Name:                   hello
Namespace:              default
CreationTimestamp:      Thu, 24 Jan 2019 10:10:38 +0800
Labels:                 created-by=kubeless
                        function=hello
Annotations:            deployment.kubernetes.io/revision: 1
Selector:               created-by=kubeless,function=hello
Replicas:               1 desired | 1 updated | 1 total | 1 available | 0 unavailable
StrategyType:           RollingUpdate
MinReadySeconds:        0
RollingUpdateStrategy:  0 max unavailable, 1 max surge
Pod Template:
  Labels:       created-by=kubeless
                function=hello
  Annotations:  prometheus.io/path: /metrics
                prometheus.io/port: 8080
                prometheus.io/scrape: true
  Init Containers:
   prepare:
    Image:      kubeless/unzip@sha256:f162c062973cca05459834de6ed14c039d45df8cdb76097f50b028a1621b3697
    Port:       <none>
    Host Port:  <none>
    Command:
      sh
      -c
    Args:
      echo 'e4eaa2dc4bd2a3f95a04df0e29c0c82ec2691c52da24b03ca6ad4b8f4d134daf  /src/hello.py' > /tmp/func.sha256 && sha256sum -c /tmp/func.sha256 && cp /src/hello.py /kubeless/hello.py && cp /src/requirements.txt /kubeless
    Environment:  <none>
    Mounts:
      /kubeless from hello (rw)
      /src from hello-deps (rw)
  Containers:
   hello:
    Image:      kubeless/python@sha256:34332f4530508a810f491838a924c36ceac0ec7cab487520e2db2b037800ecda
    Port:       8080/TCP
    Host Port:  0/TCP
    Liveness:   http-get http://:8080/healthz delay=3s timeout=1s period=30s #success=1 #failure=3
    Environment:
      FUNC_HANDLER:             hello
      MOD_NAME:                 hello
      FUNC_TIMEOUT:             180
      FUNC_RUNTIME:             python2.7
      FUNC_MEMORY_LIMIT:        0
      FUNC_PORT:                8080
      KUBELESS_INSTALL_VOLUME:  /kubeless
      PYTHONPATH:               $(KUBELESS_INSTALL_VOLUME)/lib/python2.7/site-packages:$(KUBELESS_INSTALL_VOLUME)
    Mounts:
      /kubeless from hello (rw)
  Volumes:
   hello:
    Type:    EmptyDir (a temporary directory that shares a pod's lifetime)
    Medium:
   hello-deps:
    Type:      ConfigMap (a volume populated by a ConfigMap)
    Name:      hello
    Optional:  false
Conditions:
  Type           Status  Reason
  ----           ------  ------
  Available      True    MinimumReplicasAvailable
OldReplicaSets:  <none>
NewReplicaSet:   hello-65798c97b9 (1/1 replicas created)
Events:          <none>

[root@dockerapp ~]# kubectl describe replicaset hello-65798c97b9
Name:           hello-65798c97b9
Namespace:      default
Selector:       created-by=kubeless,function=hello,pod-template-hash=65798c97b9
Labels:         created-by=kubeless
                function=hello
                pod-template-hash=65798c97b9
Annotations:    deployment.kubernetes.io/desired-replicas: 1
                deployment.kubernetes.io/max-replicas: 2
                deployment.kubernetes.io/revision: 1
Controlled By:  Deployment/hello
Replicas:       1 current / 1 desired
Pods Status:    1 Running / 0 Waiting / 0 Succeeded / 0 Failed
Pod Template:
  Labels:       created-by=kubeless
                function=hello
                pod-template-hash=65798c97b9
  Annotations:  prometheus.io/path: /metrics
                prometheus.io/port: 8080
                prometheus.io/scrape: true
  Init Containers:
   prepare:
    Image:      kubeless/unzip@sha256:f162c062973cca05459834de6ed14c039d45df8cdb76097f50b028a1621b3697
    Port:       <none>
    Host Port:  <none>
    Command:
      sh
      -c
    Args:
      echo 'e4eaa2dc4bd2a3f95a04df0e29c0c82ec2691c52da24b03ca6ad4b8f4d134daf  /src/hello.py' > /tmp/func.sha256 && sha256sum -c /tmp/func.sha256 && cp /src/hello.py /kubeless/hello.py && cp /src/requirements.txt /kubeless
    Environment:  <none>
    Mounts:
      /kubeless from hello (rw)
      /src from hello-deps (rw)
  Containers:
   hello:
    Image:      kubeless/python@sha256:34332f4530508a810f491838a924c36ceac0ec7cab487520e2db2b037800ecda
    Port:       8080/TCP
    Host Port:  0/TCP
    Liveness:   http-get http://:8080/healthz delay=3s timeout=1s period=30s #success=1 #failure=3
    Environment:
      FUNC_HANDLER:             hello
      MOD_NAME:                 hello
      FUNC_TIMEOUT:             180
      FUNC_RUNTIME:             python2.7
      FUNC_MEMORY_LIMIT:        0
      FUNC_PORT:                8080
      KUBELESS_INSTALL_VOLUME:  /kubeless
      PYTHONPATH:               $(KUBELESS_INSTALL_VOLUME)/lib/python2.7/site-packages:$(KUBELESS_INSTALL_VOLUME)
    Mounts:
      /kubeless from hello (rw)
  Volumes:
   hello:
    Type:    EmptyDir (a temporary directory that shares a pod's lifetime)
    Medium:
   hello-deps:
    Type:      ConfigMap (a volume populated by a ConfigMap)
    Name:      hello
    Optional:  false
Events:        <none>
```

从 deployment 中可以看到，

# 调用函数

使用 `kubeless function call` 命令调用函数：

```
kubeless function call hello --data 'Hello kubeless'
Hello kubeless
```

kubernetes 为每个 function 创建了一个对应的 Service，是 ClusterIP 类型。

```
[root@dockerapp ~]# kubectl describe service hello
Name:              hello
Namespace:         default
Labels:            created-by=kubeless
                   function=hello
Annotations:       <none>
Selector:          created-by=kubeless,function=hello
Type:              ClusterIP
IP:                10.111.185.120
Port:              http-function-port  8080/TCP
TargetPort:        8080/TCP
Endpoints:         10.244.0.15:8080
Session Affinity:  None
Events:            <none>
[root@dockerapp ~]#
```

可以使用 curl 直接访问该访问：

```
curl -X POST -d 'hello xxx' 10.111.185.120:8080
```

基于这个原理，可以通过 NodePort Service 和 Ingress 就可以将函数对外进行发布。

# 资源限制

Serverless 平台中的函数运行在一个资源受限的环境中，

# 自动扩展

kubeless 的函数可以根据工作负载进行自动扩展，

```
[root@dockerapp ~]# kubeless function list
NAME 	NAMESPACE	HANDLER    	RUNTIME  	DEPENDENCIES	STATUS
hello	default  	hello.hello	python2.7	            	1/1 READY

[root@dockerapp ~]# kubeless autoscale create hello --max=5 --min=1 --metric=cpu --value=50
INFO[0000] Adding autoscaling rule to the function...
INFO[0000] Autoscaling rule for hello submitted for deployment
```

```
[root@dockerapp ~]# kubeless autoscale list
NAME 	NAMESPACE	TARGET	MIN	MAX	METRIC	VALUE
hello	default  	hello 	1  	5  	cpu   	50

[root@dockerapp ~]# kubectl get hpa
NAME    REFERENCE          TARGETS         MINPODS   MAXPODS   REPLICAS   AGE
hello   Deployment/hello   <unknown>/50%   1         5         1          52s
```