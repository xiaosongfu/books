> kubectl apply -f cert-manager.yaml

```
[root@cicd-server cert-manager]# kubectl apply -f cert-manager.yaml
customresourcedefinition.apiextensions.k8s.io/certificates.certmanager.k8s.io created
customresourcedefinition.apiextensions.k8s.io/challenges.certmanager.k8s.io created
customresourcedefinition.apiextensions.k8s.io/clusterissuers.certmanager.k8s.io created
customresourcedefinition.apiextensions.k8s.io/issuers.certmanager.k8s.io created
customresourcedefinition.apiextensions.k8s.io/orders.certmanager.k8s.io created
namespace/cert-manager created
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
```

> kubectl get all -n cert-manager

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

> kubectl apply -f letsencrypt-staging.yaml

```
[root@cicd-server cert-manager]# kubectl apply -f letsencrypt-staging.yaml
clusterissuer.certmanager.k8s.io/letsencrypt-staging created
```

> kubectl get clusterissuer

```
[root@cicd-server cert-manager]# kubectl get clusterissuer
NAME                  AGE
letsencrypt-staging   39s
```

> kubectl describe clusterissuer letsencrypt-staging

```
[root@cicd-server cert-manager]# kubectl describe clusterissuer letsencrypt-staging
Name:         letsencrypt-staging
Namespace:
Labels:       <none>
Annotations:  kubectl.kubernetes.io/last-applied-configuration:
                {"apiVersion":"certmanager.k8s.io/v1alpha1","kind":"ClusterIssuer","metadata":{"annotations":{},"name":"letsencrypt-staging"},"spec":{"acm...
API Version:  certmanager.k8s.io/v1alpha1
Kind:         ClusterIssuer
Metadata:
  Creation Timestamp:  2019-07-02T09:40:10Z
  Generation:          2
  Resource Version:    7376591
  Self Link:           /apis/certmanager.k8s.io/v1alpha1/clusterissuers/letsencrypt-staging
  UID:                 62388c1d-9cad-11e9-a67d-0050569c99b4
Spec:
  Acme:
    Email:  xiaosongfu@outlook.com
    Private Key Secret Ref:
      Name:  example-issuer-account-key
    Server:  https://acme-staging-v02.api.letsencrypt.org/directory
    Solvers:
      Http 01:
        Ingress:
          Class:  nginx
Status:
  Acme:
    Uri:  https://acme-staging-v02.api.letsencrypt.org/acme/acct/9824769
  Conditions:
    Last Transition Time:  2019-07-02T09:40:13Z
    Message:               The ACME account was registered with the ACME server
    Reason:                ACMEAccountRegistered
    Status:                True
    Type:                  Ready
Events:                    <none>
```

> 

```

```

