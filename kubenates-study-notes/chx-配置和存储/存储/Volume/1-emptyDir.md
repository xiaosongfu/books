!!! emptyDir 特别适合 Pod 中的容器需要临时共享存储空间的场景

```
apiVersion: v1
kind: Pod
metadata:
  name: test-pd
spec:
  containers:
    - image: k8s.gcr.io/test-webserver
      name: test-container
      volumeMounts:
        - mountPath: /cache
          name: cache-volume
  volumes:
    - name: cache-volume
      emptyDir: {}
```

---

emptyDir 是最基础的 Volume 类型。正如其名字所示，一个 emptyDir Volume 是 Host 上的一个空目录。

emptyDir Volume 对于容器来说是持久的，对于 Pod 则不是。当 Pod 从节点删除时，Volume 的内容也会被删除。但如果只是容器被销毁而 Pod 还在，则 Volume 不受影响。

也就是说：emptyDir Volume 的生命周期与 Pod 一致。

Pod 中的所有容器都可以共享 Volume，它们可以指定各自的 mount 路径。

```
apiVersion: v1
kind: Pod
metadata:
  name: producer-consumer
spec:
  constainers:
    - image: busybox
      name: producer
      volumeMounts:
        - name: shared-volume
          mountPath: /producer_dir
      args:
        - /bin/sh
        - -c
        - echo "hello world" > /producer_dir/hello ; sleep 30000

    - image: busybox
      name: consumer
      volumeMounts:
        - name: shared-volume
          mountPath: /consumer_dir
      args:
        - /bin/sh
        - -c
        - cat /consumer_dir/hello ; sleep 30000
    
  volumes:
    - name: shared-volume
      emptyDir: {}
```

emptyDir 是 Host 上创建的临时目录，其优点是能够方便地为 Pod 中的容器提供共享存储，不需要额外的配置。但它不具备持久性，如果 Pod 不存在了，emptyDir 也就没有了。根据这个特性，emptyDir 特别适合 Pod 中的容器需要临时共享存储空间的场景。

`/var/lib/kubelet/pods/3e6100eb-a97a-11e7-8f72-0800274451ad/volumes/kubernetes.io~empty-dir/shared-volume` 就是上面那个名为 “shared-volume”  的 emptyDir Volume 在 Host 上的真正路径。