* https://github.com/jetstack/cert-manager

* https://github.com/jetstack/cert-manager/blob/master/docs/tutorials/acme/quick-start/index.rst
* https://docs.cert-manager.io/en/latest/index.html

---

Issuer        ：证书颁发机构
ClusterIssuer ：集群范围的证书颁发机构

Certificate   ：证书

---

1. 安装 cert-manager
2. 配置集群范围的证书发行者(ClusterIssuer)-使用 ACME
3. 在特定 namespace 为指定 domain 申请证书
4. 配置 Ingress

---

![](../../images/chx-ingress/cert-manager-overview.png)

## 1. 安装 cert-manager

> 参考：[Installing cert-manager](https://docs.cert-manager.io/en/latest/getting-started/install.html)

cert-manager 在您的 Kubernetes 集群中作为一系列部署资源运行。它利用 [CustomResourceDefinitions](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/) 配置证书颁发机构和请求证书。

作为安装的一部分，cert-manager 还会部署 [ValidatingWebhookConfiguration](https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/) 资源，以验证我们将在安装后创建的 Issuer，ClusterIssuer 和 Certificate 资源是否有效。

> v0.8 以前的部署步骤，已过时！

```
# Create a namespace to run cert-manager in
kubectl create namespace cert-manager

# Disable resource validation on the cert-manager namespace
kubectl label namespace cert-manager certmanager.k8s.io/disable-validation=true

# Install the CustomResourceDefinitions and cert-manager itself
kubectl apply -f https://raw.githubusercontent.com/jetstack/cert-manager/release-0.7/deploy/manifests/cert-manager.yaml
```

> v0.8 以后的部署步骤：

只需要 apply `cert-manager.yaml` 一个文件就可以了，里面完成了创建 cert-manager 命名空间并为其添加 lable、创建 CustomResourceDefinitions 和 安装 cert-manager 这些所有的工作：

```
kubectl apply -f https://github.com/jetstack/cert-manager/releases/download/v0.8.1/cert-manager.yaml
```

以下内容摘自 `cert-manager.yaml` 文件：

```
apiVersion: v1
kind: Namespace
metadata:
  name: cert-manager
  labels:
    certmanager.k8s.io/disable-validation: "true"
```

安装过程输出摘录如下：

```
service/cert-manager-webhook created
deployment.apps/cert-manager-cainjector created
deployment.apps/cert-manager-webhook created
deployment.apps/cert-manager created
```

可以看到，创建了 `cert-manager` `cert-manager-webhook` `cert-manager-cainjector` 3个 Deployment，以及 `cert-manager-webhook` 1个 Service。

* cert-manager 使用的镜像为：quay.io/jetstack/cert-manager-controller:v0.8.1
* cert-manager-webhook 使用的镜像为：quay.io/jetstack/cert-manager-webhook:v0.8.1
* cert-manager-cainjector 使用的镜像为：quay.io/jetstack/cert-manager-cainjector:v0.8.1

> 验证安装：

```
[root@cicd-server cert-manager]# kubectl get all -n cert-manager
NAME                                           READY   STATUS    RESTARTS   AGE
pod/cert-manager-568474bc9c-zlv4g              1/1     Running   0          5m23s
pod/cert-manager-cainjector-5dfd7c584d-z9gsf   1/1     Running   0          5m23s
pod/cert-manager-webhook-f6f965745-224qr       1/1     Running   0          5m23s

NAME                           TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)   AGE
service/cert-manager-webhook   ClusterIP   10.96.73.150   <none>        443/TCP   5m24s

NAME                                      READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/cert-manager              1/1     1            1           5m23s
deployment.apps/cert-manager-cainjector   1/1     1            1           5m24s
deployment.apps/cert-manager-webhook      1/1     1            1           5m23s

NAME                                                 DESIRED   CURRENT   READY   AGE
replicaset.apps/cert-manager-568474bc9c              1         1         1       5m23s
replicaset.apps/cert-manager-cainjector-5dfd7c584d   1         1         1       5m24s
replicaset.apps/cert-manager-webhook-f6f965745       1         1         1       5m23s
```

## 2. 配置集群范围的证书发行者(ClusterIssuer)-使用 ACME

> 参考：[Setting up ACME Issuers](https://docs.cert-manager.io/en/latest/tasks/issuers/index.html)

部署 cert-manager 后，必须配置代表证书颁发机构的 Issuer 或 ClusterIssuer 资源。

Issuer 和 ClusterIssuer 资源代表一个证书颁发机构，可以从中获取签名的x509证书，例如 Let's Encrypt，或者您自己的签名密钥对，证书被存储在 Kubernetes 的 Secret 资源中。它们由证书资源引用，以便从它们请求证书。

cert-manager 支持很多的证书颁发机构，如果 ACME、自签名、Vault 等。

* **Issuer**：被限定于单一命名空间，只能为自己所在的命名空间申请证书资源。这在多租户环境中非常有用，在多租户环境中，多个团队或独立方在单个集群中运行。
* **ClusterIssuer**：适用于集群范围，是集群范围版的 **Issuer**，它能够为所有命名空间申请证书资源。

当集群为一个单租户集群，并希望整个集群都从 Let’s Encrypt 获取 TLS 证书，则通常会创建 `letsencrypt-staging` 和 `letsencrypt-prod`  **ClusterIssuers**。

`letsencrypt-staging.yaml` 文件：

```
apiVersion: certmanager.k8s.io/v1alpha1
kind: ClusterIssuer
metadata:
  name: letsencrypt-staging
spec:
  acme:
    # You must replace this email address with your own.
    # Let's Encrypt will use this to contact you about expiring
    # certificates, and issues related to your account.
    email: xiaosongfu@outlook.com
    server: https://acme-staging-v02.api.letsencrypt.org/directory
    privateKeySecretRef:
      # Secret resource used to store the account's private key.
      name: letsencrypt-staging-clusterissuer-account-key
    # Enable the HTTP01 challenge mechanism for this Issuer
    http01: {}
```

> 2019年07月02日17:36:58 更新 `letsencrypt-staging.yaml` 文件：

```
apiVersion: certmanager.k8s.io/v1alpha1
kind: ClusterIssuer
metadata:
  name: letsencrypt-staging
spec:
  acme:
    # You must replace this email address with your own.
    # Let's Encrypt will use this to contact you about expiring
    # certificates, and issues related to your account.
    email: xiaosongfu@outlook.com
    server: https://acme-staging-v02.api.letsencrypt.org/directory
    privateKeySecretRef:
      # Secret resource used to store the account's private key.
      name: example-issuer-account-key
    # Add a single challenge solver, HTTP01 using nginx
    solvers:
    - http01:
        ingress:
          class: nginx
```

需要修改 email 为自己的邮箱！

* metadata.name 是我们创建的签发机构的名称，后面我们创建证书的时候会引用它
* spec.acme.email 是你自己的邮箱，证书快过期的时候会有邮件提醒，不过 cert-manager 会利用 acme 协议自动给我们重新颁发证书来续期
* spec.acme.server 是 acme 协议的服务端，我们这里用 Let’s Encrypt，这个地址就写死成这样就行
* spec.acme.privateKeySecretRef 指示此签发机构的私钥将要存储到哪个 Secret 对象中，名称不重要
* spec.acme.http01 这里指示签发机构使用 HTTP-01 的方式进行 acme 协议 (还可以用 DNS-01 方式，acme 协议的目的是证明这台机器和域名都是属于你的，然后才准许给你颁发证书)

使用 kubectl apply 创建 ClusterIssuers 资源：

```
kubectl apply -f letsencrypt-staging.yaml
```

验证账户是否注册成功，使用 `kubectl describe clusterissuer letsencrypt-staging` 命令查看是否 Ready

```
kubectl describe clusterissuer letsencrypt-staging   

......

Type:                  Ready
```

# 3. 在特定 namespace 为指定 domain 申请证书

参考：[Issuing Certificates using ACME](https://docs.cert-manager.io/en/latest/tasks/acme/issuing-certificates.html)

有了签发机构，接下来我们就可以生成免费证书了，cert-manager 给我们提供了 Certificate 这个用于生成证书的自定义资源对象，它必须局限在某一个 namespace 下，证书最终会在这个 namespace 下以 Secret 的资源对象存储。

`certificate.yaml` 文件

```
apiVersion: certmanager.k8s.io/v1alpha1
kind: Certificate
metadata:
  name: api.xiaosongfu.com
  namespace: default
spec:
  secretName: api-xiaosongfu-com-tls
  issuerRef:
    name: letsencrypt-staging
    kind: ClusterIssuer
  dnsNames:
    - api.xiaosongfu.com
  acme:
    config:
      - http01:
          ingressClass: nginx
        domains:
          - api.xiaosongfu.com
```

* metadata.namespace 指示当前证书是在哪个命名空间下
* spec.secretName 指示证书最终存到哪个 Secret 中
* spec.issuerRef.name 我们创建的签发机构的名称 (ClusterIssuer.metadata.name)
* spec.issuerRef.kind 值为 ClusterIssuer 说明签发机构不在本 namespace 下，而是在全局
* spec.dnsNames 指示该证书的可以用于哪些域名
* spec.acme.config.http01.ingressClass 使用 HTTP-01 方式校验该域名和机器时，cert-manager 会尝试创建 Ingress 对象来实现该校验，如果指定该值，会给创建的 Ingress 加上 kubernetes.io/ingress.class 这个 annotation，如果我们的 Ingress Controller 是 Nginx Ingress Controller，指定这个字段可以让创建的 Ingress 被 Nginx Ingress Controller 处理。
* spec.acme.config.http01.domains 指示该证书的可以用于哪些域名

> 2019年07月02日17:53:21 更新：

Certificate 资源用于从不同的 Issuers 和 ClusterIssuers 请求 certificate。

Certificate 通过指定 `certificate.spec.issuerRef` 字段来指定要从哪个 Issuer 获取 certificate。

`certificate.yaml`

```
apiVersion: certmanager.k8s.io/v1alpha1
kind: Certificate
metadata:
  name: example-com
  namespace: default
spec:
  secretName: example-com-tls
  duration: 2160h # 90d
  renewBefore: 360h # 15d
  commonName: example.com
  dnsNames:
  - example.com
  - www.example.com
  issuerRef:
    name: letsencrypt-staging
    # We can reference ClusterIssuers by changing the kind here.
    # The default value is Issuer (i.e. a locally namespaced Issuer)
    kind: ClusterIssuer
```

查看各种资源：

```
kubectl get certificate -n default
kubectl describe certificate api.xiaosongfu.com -n default
```

```
kubectl get secret -n default
kubectl describe secret api-xiaosongfu-com-tls -n default
```

# 4. 配置 Ingress

```
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  name: api-xiaosongfu-com
spec:
  tls:
    - hosts:
        - api-xiaosongfu-com
      secretName: api-xiaosongfu-com-tls
  rules:
    - host: api.xiaosongfu-com
      http:
        paths:
          - path: /
            backend:
              serviceName: api-xiaosongfu-com-service
              servicePort: 80
```



```
annotations:
    kubernetes.io/ingress.class: "nginx"
```

---

参考：

1. [利用cert-manager让Ingress启用免费的HTTPS证书](https://cloud.tencent.com/developer/article/1326543)
