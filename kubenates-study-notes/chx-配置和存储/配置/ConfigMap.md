* 1. ConfigMap 介绍
* 2. 创建 ConfigMap
* 3. 使用 ConfigMap
  * 3.1 以 Volume 方式使用 ConfigMap
  * 3.2 环境变量方式使用 ConfigMap
* 4. 使用 ConfigMap 来传递文件

---

# 1. ConfigMap 介绍

```
apiVersion: v1
kind: ConfigMap
metadata:
  name: myconfigmap
data:
  addr: localhost
  port: sadbsf
```

```
apiVersion: v1
kind: ConfigMap
metadata:
  name: myconfigmap2
data:
  logging.conf: |
    class: logging.handlers.RotatingFileHandler
    formatter: precise
    level: INFO
    fileName: %hostname-%timestamp.log
```

ConfigMap 支持两种用法：

* 1. 和 secret 一样，是键值对
* 2. 传递一个文件，如配置文件（logging.conf），如 kubeless 中的方法函数文件（如 hello.py）

# 2. 创建 ConfigMap

```
$ kubectl apply -f myconfigmap.yaml
configmap/myconfigmap created

$ kubectl get configmaps
NAME          DATA   AGE
hello         3      55d
myconfigmap   2      7s

$ kubectl describe configmap myconfigmap
Name:         myconfigmap
Namespace:    default
Labels:       <none>
Annotations:  kubectl.kubernetes.io/last-applied-configuration:
                {"apiVersion":"v1","data":{"addr":"localhost","port":"sadbsf"},"kind":"ConfigMap","metadata":{"annotations":{},"name":"myconfigmap","names...
Data
====
port:
----
sadbsf
addr:
----
localhost

Events:  <none>
```

```
kubectl describe configmap myconfigmap2
Name:         myconfigmap2
Namespace:    default
Labels:       <none>
Annotations:  <none>

Data
====
logging.conf:
----
class: logging.handlers.RotatingFileHandler
formatter: precise
level: INFO
fileName: %hostname-%timestamp.log

Events:  <none>
```

# 3. 使用 ConfigMap

与 Secret 一样，Pod 也可以通过 Volume 或者环境变量的方式使用 Secret。

#### 3.1 以 Volume 方式使用 ConfigMap

```
apiVersion: v1
kind: Pod
metadata: 
  name: mypod
spec:
  containers:
    - name: mypod
      image: busybox
      args:
        - /bin/sh
        - -c
        - sleep 30000
      volumeMounts:
        - name: foo
          mountPath: "/etc/foo"
          readOnly: true
  volumes:
    - name: foo
      configMap:
        name: myconfigmap
```

登录到 pod 里面去查看：

```
$ kubectl exec -it mypod sh                                                                                 
/ # ls /etc/foo
addr  port
/ # more /etc/foo/addr
localhost
```

会发现是和 Secret 一模一样的，需要读取文件来获取值。

> 自定义存放数据的文件名

通过配置 items 字段来实现。

```
  volumes:
    - name: foo
      configmap:
        name: myconfigmap
        items:
          - key: addr
            path: my-group/my-addr
          - key: port
            paht: my-group/my-port
```

#### 3.2 环境变量方式使用 ConfigMap

```
apiVersion: v1
kind: Pod
metadata:
  name: mypod2
spec:
  containers:
    - name: mypod2
      image: busybox
      args:
        - /bin/sh
        - -c
        - sleep 30000
      env:
        - name: ADDR
          valueFrom:
            configMapKeyRef:
              name: myconfigmap
              key: addr
        - name: PORT
          valueFrom:
            configMapKeyRef:
              name: myconfigmap
              key: port
```

登录到 pod 里面去查看：

```
$ kubectl exec -it mypod2 sh
/ # echo $ADDR
localhost
/ # echo $PORT
sadbsf
```

# 4. 使用 ConfigMap 来传递文件

大多数情况下，配置信息都以文件形式提供，所以我们还可以使用 ConfigMap 来传递文件。

比如给 Pod 传递如何记录日志的配置信息:

```
class: logging.handlers.RotatingFileHandler
formatter: precise
level: INFO
fileName: %hostname-%timestamp.log
```

采用 YAML 配置文件，其内容为：

```
apiVersion: v1
kind: ConfigMap
metadata:
  name: myconfigmap2
data:
  logging.conf: |
    class: logging.handlers.RotatingFileHandler
    formatter: precise
    level: INFO
    fileName: %hostname-%timestamp.log
```

!! 注意： logging.conf: 后面的 | 符合！！

创建并查看该 ConfigMap：

```
$ kubectl create -f myconfigmap2.yaml                                                                       
configmap/myconfigmap2 created

$ kubectl get configmaps 
NAME           DATA   AGE
hello          3      55d
myconfigmap2   1      15s

$ kubectl describe configmap myconfigmap2                                                                   
Name:         myconfigmap2
Namespace:    default
Labels:       <none>
Annotations:  <none>

Data
====
logging.conf:
----
class: logging.handlers.RotatingFileHandler
formatter: precise
level: INFO
fileName: %hostname-%timestamp.log

Events:  <none>
```

在 pod 中以 Volume 方式使用该 ConfigMap：

```
apiVersion: v1
kind: Pod
metadata:
  name: mypod2
spec:
  containers:
    - name: mypod2
      image: busybox
      args:
        - /bin/sh
        - -c
        - sleep 30000
      volumeMounts:
        - name: foo
          mountPath: "/etc/foo"
          readOnly: true
  volumes:
    - name: foo
      configMap:
        name: myconfigmap2
```

登录到 pod 里面去查看：

```
$ kubectl exec -ti mypod2 sh
/ # ls /etc/foo/
logging.conf
/ # more /etc/foo/logging.conf
class: logging.handlers.RotatingFileHandler
formatter: precise
level: INFO
fileName: %hostname-%timestamp.log
```

可以看到他们是一个文件，就是一个文件！！
