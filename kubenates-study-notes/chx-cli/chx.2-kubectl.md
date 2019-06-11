https://kubernetes.io/docs/reference/kubectl/overview/

---

kubectl cluster-info

kubectl api-versions

kubectl api-resources

kubectl get cs

kubectl get ns

kubectl get nodes

查看群集事件：kubectl get events


#### kubectl get

```
kubectl get all 
--all-namespace
--show-all
--show-labels
```

kubectl get jobs

kubectl get cronjobs

#### kubectl explain

#### kubectl auth

以往，用户通常无法方便的知道自己被管理员通过 RBAC 配置的权限到底有哪些。而从v1.14开始，用户可以通过 `kubectl auth can-i --list --namespace=ns1`  来查看自己在 ns1 这个 namespace 下可以访问哪些资源 （比如Pod，Service等），并有哪些操作的权限（比如Get，List，Patch，Delete等）。

#### kubectl delete

Kubernetes 用户需要删除的API 资源，往往分散在多个namespace中，删除非常不方便。在v1.14新版本中，用户终于可以借助于 `kubectl delete xxx --all-namespaces`  来进行统一的删除操作了（这里 XXX 可以是Pod，Services，Deployment，自定义的CRD等等），并且还可以配合 -l 和 --field-selector 可以更精确地删除满足特定条件的资源。


