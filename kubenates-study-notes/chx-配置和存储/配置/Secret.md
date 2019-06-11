* 1. Secret 介绍
* 2. 创建 Secret
* 3. 使用 Secret
  * 3.1 以 Volume 方式使用 Secret
  * 3.2 环境变量方式使用 Secret
* 4. 使用 Secret 来传递文件

---

# 1. Secret 介绍

```
apiVersion: v1
kind: Secret
metadata:
  name: mysecret
data:
  username: MTIxMg==
  password: MTIxMg==
```

文件中的敏感数据必须是通过 base64 编码后的结果。
* 编码方法：`echo -n 123 | base64`
* 解码方法：`echo -n MTIxMg== | base64 --decode`

# 2. 创建 Secret

```
$ kubectl apply -f mysecret.yaml                                                  secret/mysecret created

$ kubectl get secrets
NAME                  TYPE                                  DATA   AGE
default-token-ws8ql   kubernetes.io/service-account-token   3      62d
istio.default         istio.io/key-and-cert                 3      30d
mysecret              Opaque                                2      2s

$ kubectl describe secret mysecret                                                Name:         mysecret
Namespace:    default
Labels:       <none>
Annotations:  
Type:         Opaque

Data
====
password:  4 bytes
username:  4 bytes
```

# 3. 使用 Secret

Pod 可以通过 Volume 或者环境变量的方式使用 Secret。

* 以 Volume 方式使用的 Secret 支持动态更新：Secret 更新后，容器中的数据也会更新。
* 需要注意的是，环境变量读取 Secret 很方便，但无法支撑 Secret 动态更新。

#### 3.1 以 Volume 方式使用 Secret

以 Volume 方式使用的 Secret 支持动态更新：Secret 更新后，容器中的数据也会更新。

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
      secret:
        secretName: mysecret
```

登录到 pod 里面去查看：

```
 kubectl exec -it mypod sh
/ # ls /etc/foo/
password  username
/ # more /etc/foo/username
123
```

> 自定义存放数据的文件名

通过配置 items 字段来实现。

```
  volumes:
    - name: foo
      secret:
        secretName: mysecret
        items:
          - key: username
            path: my-group/my-username
          - key: password
            path: my-group/my-password
```

这样这些数据将分别保存在 `/etc/foo/my-group/my-username` 和 `/etc/foo/my-group/my-password` 文件中。

#### 3.2 环境变量方式使用 Secret 

通过 Volume 使用 Secret，容器必须从文件读取数据，会稍显麻烦，Kubernetes 还支持通过环境变量使用 Secret。

需要注意的是，环境变量读取 Secret 很方便，但无法支撑 Secret 动态更新。

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
        - name: USER_NAME
          valueFrom:
            secretKeyRef:
              name: mysecret
              key: username
        - name: PASSWORD
          valueFrom:
            secretKeyRef:
              name: mysecret
              key: password
```

登录到 pod 里面去查看：

```
kubectl exec -ti mypod2 sh                                                                                
/ # echo $USER_NAME
123
/ # echo $PASSWORD
123
```

# 4. 使用 Secret 来传递文件

为 Ingress 配置 https 的时候，会用 Secret 来传递秘钥文件，具体请参考：[Ingress-使用-Secret-配置-https]()


---

```
kubectl create secret tls custom-tls-cert --key /path/to/tls.key --cert /path/to/tls.crt

kubectl create secret generic joomla-basic-auth --from-file=auth

kubectl create secret docker-registry myregistry --docker-server=registry.cn-hangzhou.aliyuncs.com --docker-username=xxx@aliyun.com --docker-password=xxxxxx --docker-email=xxx@aliyun.com
```