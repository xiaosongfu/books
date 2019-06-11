## Specifying ImagePullSecrets on a Pod

官方的说明：

```
cat <<EOF > ./kustomization.yaml
secretGenerator:
- name: myregistrykey
  type: docker-registry
  literals:
  - docker-server=DOCKER_REGISTRY_SERVER
  - docker-username=DOCKER_USER
  - docker-password=DOCKER_PASSWORD
  - docker-email=DOCKER_EMAIL
EOF

kubectl apply -k .
secret/myregistrykey-66h7d4d986 created
```

```
cat <<EOF > pod.yaml
apiVersion: v1
kind: Pod
metadata:
  name: foo
  namespace: awesomeapps
spec:
  containers:
    - name: foo
      image: janedoe/awesomeapp:v1
  imagePullSecrets:
    - name: myregistrykey
EOF

cat <<EOF >> ./kustomization.yaml
resources:
- pod.yaml
EOF
```

---

```
kubectl create secret docker-registry myregistry --docker-server=registry.cn-hangzhou.aliyuncs.com --docker-username=xxx@aliyun.com --docker-password=xxxxxx --docker-email=xxx@aliyun.com
```

其中:
regsecret:  指定密钥的键名称, 可自行定义
--docker-server:  指定docker仓库地址
--docker-username:  指定docker仓库账号
--docker-password:  指定docker仓库密码
--docker-email:  指定邮件地址(选填)

然后就可以在 Deployment 定义中使用了：

```
apiVersion: v1
kind: Pod
metadata:
  name: test
spec:
  template:
    metadata:
      labels:
        name: test
    spec:
      containers:
        - name: xxx
          image: xxx
      imagePullSecrets:
        - name: myregistry
```

---

参考：
1. https://kubernetes.io/docs/concepts/containers/images/#using-a-private-registry
2. https://www.jianshu.com/p/fd13c2762d81
3. https://cloud.tencent.com/info/39355b66ba984e48365f79df5f765aba.html