# 安装 cert-manager

```
[root@dockerapp ~]# kubectl create namespace cert-manager
namespace/cert-manager created

[root@dockerapp ~]# kubectl label namespace cert-manager certmanager.k8s.io/disable-validation=true
namespace/cert-manager labeled

[root@dockerapp ~]# kubectl apply -f https://raw.githubusercontent.com/jetstack/cert-manager/release-0.7/deploy/manifests/cert-manager.yaml
customresourcedefinition.apiextensions.k8s.io/certificates.certmanager.k8s.io created
customresourcedefinition.apiextensions.k8s.io/challenges.certmanager.k8s.io created
customresourcedefinition.apiextensions.k8s.io/clusterissuers.certmanager.k8s.io created
customresourcedefinition.apiextensions.k8s.io/issuers.certmanager.k8s.io created
customresourcedefinition.apiextensions.k8s.io/orders.certmanager.k8s.io created
Warning: kubectl apply should be used on resource created by either kubectl create --save-config or kubectl apply
namespace/cert-manager configured
serviceaccount/cert-manager-cainjector created
serviceaccount/cert-manager-webhook created
serviceaccount/cert-manager created
clusterrole.rbac.authorization.k8s.io/cert-manager-cainjector created
clusterrolebinding.rbac.authorization.k8s.io/cert-manager-cainjector created
clusterrole.rbac.authorization.k8s.io/cert-manager created
clusterrolebinding.rbac.authorization.k8s.io/cert-manager created
clusterrole.rbac.authorization.k8s.io/cert-manager-view created
clusterrole.rbac.authorization.k8s.io/cert-manager-edit created
clusterrolebinding.rbac.authorization.k8s.io/cert-manager-webhook:auth-delegator created
rolebinding.rbac.authorization.k8s.io/cert-manager-webhook:webhook-authentication-reader created
clusterrole.rbac.authorization.k8s.io/cert-manager-webhook:webhook-requester created
service/cert-manager-webhook created
deployment.apps/cert-manager-cainjector created
deployment.apps/cert-manager-webhook created
deployment.apps/cert-manager created
apiservice.apiregistration.k8s.io/v1beta1.admission.certmanager.k8s.io created
issuer.certmanager.k8s.io/cert-manager-webhook-selfsign created
certificate.certmanager.k8s.io/cert-manager-webhook-ca created
issuer.certmanager.k8s.io/cert-manager-webhook-ca created
certificate.certmanager.k8s.io/cert-manager-webhook-webhook-tls created
validatingwebhookconfiguration.admissionregistration.k8s.io/cert-manager-webhook created

[root@dockerapp ~]# kubectl get all -n cert-manager
NAME                                           READY   STATUS              RESTARTS   AGE
pod/cert-manager-75c87ddd79-zf9w9              0/1     ContainerCreating   0          20s
pod/cert-manager-cainjector-768fd47f68-hg24k   1/1     Running             0          20s
pod/cert-manager-webhook-5b4bc6b547-4ndkh      0/1     ContainerCreating   0          20s

NAME                           TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)   AGE
service/cert-manager-webhook   ClusterIP   10.96.92.204   <none>        443/TCP   20s

NAME                                      READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/cert-manager              0/1     1            0           20s
deployment.apps/cert-manager-cainjector   1/1     1            1           20s
deployment.apps/cert-manager-webhook      0/1     1            0           20s

NAME                                                 DESIRED   CURRENT   READY   AGE
replicaset.apps/cert-manager-75c87ddd79              1         1         0       20s
replicaset.apps/cert-manager-cainjector-768fd47f68   1         1         1       20s
replicaset.apps/cert-manager-webhook-5b4bc6b547      1         1         0       20s

[root@dockerapp ~]# kubectl get pods -n cert-manager
NAME                                       READY   STATUS    RESTARTS   AGE
cert-manager-75c87ddd79-zf9w9              1/1     Running   0          3m12s
cert-manager-cainjector-768fd47f68-hg24k   1/1     Running   0          3m12s
cert-manager-webhook-5b4bc6b547-4ndkh      1/1     Running   0          3m12s
```

# 安装 ACME ClusterIssuer

```
[root@dockerapp cert-manager]# kubectl create -f letsencrypt-staging.yaml 
clusterissuer.certmanager.k8s.io/letsencrypt-staging created

[root@dockerapp cert-manager]# kubectl get clusterissuers
NAME                  AGE
letsencrypt-staging   9m

[root@dockerapp cert-manager]# kubectl describe clusterissuer letsencrypt-staging                                                      
Name:         letsencrypt-staging
Namespace:    
Labels:       <none>
Annotations:  <none>
API Version:  certmanager.k8s.io/v1alpha1
Kind:         ClusterIssuer
Metadata:
  Creation Timestamp:  2019-03-28T08:11:47Z
  Generation:          2
  Resource Version:    9515990
  Self Link:           /apis/certmanager.k8s.io/v1alpha1/clusterissuers/letsencrypt-staging
  UID:                 221b98e8-5131-11e9-b2b9-0050569c686c
Spec:
  Acme:
    Email:  xiaosongfu@outlook.com
    Http 01:
    Private Key Secret Ref:
      Name:  letsencrypt-staging-clusterissuer-account-key
    Server:  https://acme-staging-v02.api.letsencrypt.org/directory
Status:
  Acme:
    Uri:  https://acme-staging-v02.api.letsencrypt.org/acme/acct/8730202
  Conditions:
    Last Transition Time:  2019-03-28T08:11:51Z
    Message:               The ACME account was registered with the ACME server
    Reason:                ACMEAccountRegistered
    Status:                True
    Type:                  Ready
Events:                    <none>
```

# 申请证书

```
[root@dockerapp releasebus_core]# kubectl get certificates -n appstacking
NAME
releasebus-core-certificate

[root@dockerapp releasebus_core]# kubectl describe certificate releasebus-core-certificate -n appstacking
Name:         releasebus-core-certificate
Namespace:    appstacking
Labels:       <none>
Annotations:  <none>
API Version:  certmanager.k8s.io/v1alpha1
Kind:         Certificate
Metadata:
  Creation Timestamp:  2019-03-28T09:18:38Z
  Generation:          3
  Resource Version:    9525297
  Self Link:           /apis/certmanager.k8s.io/v1alpha1/namespaces/appstacking/certificates/releasebus-core-certificate
  UID:                 787ab035-513a-11e9-b2b9-0050569c686c
Spec:
  Acme:
    Config:
      Domains:
        api.releasebus.xiaosongfu.com
      Http 01:
        Ingress Class:  nginx
  Dns Names:
    api.releasebus.xiaosongfu.com
  Issuer Ref:
    Kind:       ClusterIssuer
    Name:       letsencrypt-staging
  Secret Name:  api-releasebus-xiaosongfu-com-tls
Status:
  Conditions:
    Last Transition Time:  2019-03-28T09:18:38Z
    Message:               Certificate issuance in progress. Temporary certificate issued.
    Reason:                TemporaryCertificate
    Status:                False
    Type:                  Ready
Events:
  Type    Reason              Age    From          Message
  ----    ------              ----   ----          -------
  Normal  Generated           6m11s  cert-manager  Generated new private key
  Normal  GenerateSelfSigned  6m11s  cert-manager  Generated temporary self signed certificate
  Normal  OrderCreated        6m11s  cert-manager  Created Order resource "releasebus-core-certificate-1246382903"

[root@dockerapp releasebus_core]# kubectl get secrets -n appstacking
NAME                                TYPE                                  DATA   AGE
api-releasebus-xiaosongfu-com-tls   kubernetes.io/tls                     3      7m39s
default-token-zxtt5                 kubernetes.io/service-account-token   3      6d
istio.default                       istio.io/key-and-cert                 3      6d
releasebus-core-secret              Opaque                                2      12m

[root@dockerapp releasebus_core]# kubectl describe secret api-releasebus-xiaosongfu-com-tls -n appstacking
Name:         api-releasebus-xiaosongfu-com-tls
Namespace:    appstacking
Labels:       certmanager.k8s.io/certificate-name=releasebus-core-certificate
Annotations:  certmanager.k8s.io/alt-names: api.releasebus.xiaosongfu.com
              certmanager.k8s.io/common-name: api.releasebus.xiaosongfu.com
              certmanager.k8s.io/ip-sans: 
              certmanager.k8s.io/issuer-kind: ClusterIssuer
              certmanager.k8s.io/issuer-name: letsencrypt-staging

Type:  kubernetes.io/tls

Data
====
tls.key:  1679 bytes
ca.crt:   0 bytes
tls.crt:  1013 bytes
```
