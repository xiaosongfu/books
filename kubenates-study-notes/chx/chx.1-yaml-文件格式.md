## yaml 配置文件

```
apiVersion: apps/v1
kind: Deployment
metadata:
    name: nginx-deployment
spec:
    replicas: 2
    template:
        metadata:
            labels:
                app: nginx-server
        spec:
            containers:
                - name: nginx
                  image:nginx:1.7.9
```

① apiVersion 是当前配置格式的版本。  
② kind 是要创建的资源类型，这里是 Deployment。  
③ metadata 是该资源的元数据，name 是必需的元数据项。  
④ spec 部分是该 Deployment 的规格说明。  
⑤ replicas 指明副本数量，默认为 1。  
⑥ template 定义 Pod 的模板，这是配置文件的重要部分。  
⑦ metadata 定义 Pod 的元数据，至少要定义一个 label。label 的 key 和 value 可以任意指定。  
⑧ spec 描述 Pod 的规格，此部分定义 Pod 中每一个容器的属性，name 和 image 是必需的。  

---

```
$ kubectl apply -f nginx.yml

$ kubectl create -f nginx.yml

$ kubectl delete -f nginx.yml
```

kubectl apply 不但能够创建 Kubernetes 资源，也能对资源进行更新，非常方便。不过 Kubernets 还提供了几个类似的命令，例如 kubectl create、kubectl replace、kubectl delete、kubectl edit 和 kubectl patch。