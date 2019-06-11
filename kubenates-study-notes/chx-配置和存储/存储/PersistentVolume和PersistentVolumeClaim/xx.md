# 一个示例

```
$ kubectl get persistentvolumes --all-namespaces
No resources found.
$ kubectl get persistentvolumeclaims --all-namespaces
No resources found.
```

```
apiVersion: v1
kind: PersistentVolume
metadata:
  name: pv-hostpath-test
spec:
  accessModes:
    - ReadWriteOnce
  persistentVolumeReclaimPolicy: Delete
  storageClassName: ""
  capacity:
    storage: 1Gi
  hostPath:
    path: /root/hostpath-test
    type: Directory
```

```
$ kubectl get pv                                                                                            
NAME               CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS      CLAIM   STORAGECLASS   REASON   AGE
pv-hostpath-test   1Gi        RWO            Delete           Available                                   4s
```

pv-hostpath-test PV 的状态是 "Available" 可用状态。

```
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: pvc-hostpath-test
spec:
  accessModes:
    - ReadWriteOnce
  volumeMode: Filesystem
  storageClassName: ""
  resources:
    requests:
      storage: 1Gi
```

```
$ kubectl get pv
NAME               CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS   CLAIM                       STORAGECLASS   REASON   AGE
pv-hostpath-test   1Gi        RWO            Delete           Bound    default/pvc-hostpath-test                           18h

$ kubectl get pvc
NAME                STATUS   VOLUME             CAPACITY   ACCESS MODES   STORAGECLASS   AGE
pvc-hostpath-test   Bound    pv-hostpath-test   1Gi        RWO                           12s
```

pv-hostpath-test PV 的状态变成了 "Bound" 绑定状态，是由 default 命名空间的 pvc-hostpath-test PVC 申请的。

pvc-hostpath-test PVC 的状态是 "Bound" 绑定状态，绑定的 PV 为 pv-hostpath-test。

```
apiVersion: v1
kind: Pod
metadata:
  name: pvc-test-pod
spec:
  volumes:
    - name: pvc-hostpath-test
      persistentVolumeClaim:
        claimName: pvc-hostpath-test
  containers:
    - name: busybox-test
      image: busybox
      args:
        - /bin/sh
        - -C
        - touch /pvc-test/abc.txt; sleep 30; ls /share; sleep 30;
      volumeMounts:
        - name: pvc-hostpath-test
          mountPath: /pvc-text
```