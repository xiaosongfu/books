> 已经过时，推荐使用 cert-manager

## 1. 安装 kube-lego controller 

```
helm install stable/kube-lego --namespace kube-system --set config.LEGO_EMAIL=YOUR_EMAIL,config.LEGO_URL=https://acme-v01.api.letsencrypt.org/directory
```

## 2. 配置 Ingress

```
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  name: api-test-ingress
  annotations:
    kubernetes.io/tls-acme: 'true'
spec:
  tls:
    - hosts:
        - api.test.com
      secretName: tls-api-test
  rules:
    - host: api.test.com
      http:
        paths:
          - path: /
            backend:
              serviceName: api-test-service
              servicePort: 80
```

主要是要添加 `kubernetes.io/tls-acme: 'true'` 这个 annotation。

---

参考：

1. [Secure Kubernetes Services With Ingress, TLS And LetsEncrypt](https://docs.bitnami.com/kubernetes/how-to/secure-kubernetes-services-with-ingress-tls-letsencrypt/)