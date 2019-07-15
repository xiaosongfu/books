# 1. 安装和管理

helm install . --namespace=aaa --name=bbb --version 0.13.0

---

The helm install command can install from several sources:

* A chart repository (`helm install stable/mariadb`)
* A local chart archive (`helm install foo-0.1.1.tgz`)
* An unpacked chart directory (`helm install path/to/foo`)
* A full URL (`helm install https://example.com/charts/foo-1.2.3.tgz`)

---

helm list

helm status 

helm rollback
helm update
helm delete bbb

# 2. Charts

helm create aaa

helm package ./


# 3. Helm Hub

stable：`https://kubernetes-charts.storage.googleapis.com`

# 4. 自建仓库

helm repo add myrepo http://192.168.44.108:9000/minio-helm-repo
helm repo update
helm repo list

helm search hello
