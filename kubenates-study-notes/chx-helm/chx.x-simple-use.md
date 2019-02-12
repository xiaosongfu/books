

```
[root@dockerapp helm]# helm create hello-helm
Creating hello-helm
[root@dockerapp helm]# ls
hello-helm  rbac-config.yaml
[root@dockerapp helm]# tree hello-helm/
hello-helm/
|-- charts
|-- Chart.yaml
|-- templates
|   |-- deployment.yaml
|   |-- _helpers.tpl
|   |-- ingress.yaml
|   |-- NOTES.txt
|   |-- service.yaml
|   `-- tests
|       `-- test-connection.yaml
`-- values.yaml

3 directories, 8 files
```


```
[root@dockerapp helm]# helm install hello-helm/
NAME:   unrealized-buffalo
LAST DEPLOYED: Tue Feb 12 13:44:09 2019
NAMESPACE: default
STATUS: DEPLOYED

RESOURCES:
==> v1/Service
NAME                           TYPE       CLUSTER-IP    EXTERNAL-IP  PORT(S)  AGE
unrealized-buffalo-hello-helm  ClusterIP  10.105.238.6  <none>       80/TCP   0s

==> v1/Deployment
NAME                           DESIRED  CURRENT  UP-TO-DATE  AVAILABLE  AGE
unrealized-buffalo-hello-helm  1        0        0           0          0s


NOTES:
1. Get the application URL by running these commands:
  export POD_NAME=$(kubectl get pods --namespace default -l "app.kubernetes.io/name=hello-helm,app.kubernetes.io/instance=unrealized-buffalo" -o jsonpath="{.items[0].metadata.name}")
  echo "Visit http://127.0.0.1:8080 to use your application"
  kubectl port-forward $POD_NAME 8080:80
```


```
[root@dockerapp helm]# export POD_NAME=$(kubectl get pods --namespace default -l "app.kubernetes.io/name=hello-helm,app.kubernetes.io/instance=unrealized-buffalo" -o jsonpath="{.items[0].metadata.name}")
[root@dockerapp helm]# echo $POD_NAME
unrealized-buffalo-hello-helm-65868f775c-cxxg7
[root@dockerapp helm]# kubectl get pods
NAME                                             READY   STATUS    RESTARTS   AGE
gzpower-docs-6f6b964c76-6wdnr                    1/1     Running   1          15d
hello-65798c97b9-c2xcc                           1/1     Running   1          15d
unrealized-buffalo-hello-helm-65868f775c-cxxg7   1/1     Running   0          3m27s
[root@dockerapp helm]# kubectl get deployments
NAME                            READY   UP-TO-DATE   AVAILABLE   AGE
gzpower-docs                    1/1     1            1           20d
hello                           1/1     1            1           19d
unrealized-buffalo-hello-helm   1/1     1            1           3m40s
[root@dockerapp helm]# kubectl get service
NAME                            TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)          AGE
gzpower-docs                    NodePort    10.101.65.152    <none>        3000:30173/TCP   20d
hello                           ClusterIP   10.111.185.120   <none>        8080/TCP         19d
kubernetes                      ClusterIP   10.96.0.1        <none>        443/TCP          25d
unrealized-buffalo-hello-helm   ClusterIP   10.105.238.6     <none>        80/TCP           3m46s
[root@dockerapp helm]# curl 10.105.238.6
<!DOCTYPE html>
<html>
<head>

.......

```


```
[root@dockerapp helm]# helm list
NAME              	REVISION	UPDATED                 	STATUS  	CHART           	APP VERSION	NAMESPACE
unrealized-buffalo	1       	Tue Feb 12 13:44:09 2019	DEPLOYED	hello-helm-0.1.0	1.0        	default

[root@dockerapp helm]# helm status unrealized-buffalo
LAST DEPLOYED: Tue Feb 12 13:44:09 2019
NAMESPACE: default
STATUS: DEPLOYED

RESOURCES:
==> v1/Deployment
NAME                           DESIRED  CURRENT  UP-TO-DATE  AVAILABLE  AGE
unrealized-buffalo-hello-helm  1        1        1           1          5m15s

==> v1/Pod(related)
NAME                                            READY  STATUS   RESTARTS  AGE
unrealized-buffalo-hello-helm-65868f775c-cxxg7  1/1    Running  0         5m15s

==> v1/Service
NAME                           TYPE       CLUSTER-IP    EXTERNAL-IP  PORT(S)  AGE
unrealized-buffalo-hello-helm  ClusterIP  10.105.238.6  <none>       80/TCP   5m15s


NOTES:
1. Get the application URL by running these commands:
  export POD_NAME=$(kubectl get pods --namespace default -l "app.kubernetes.io/name=hello-helm,app.kubernetes.io/instance=unrealized-buffalo" -o jsonpath="{.items[0].metadata.name}")
  echo "Visit http://127.0.0.1:8080 to use your application"
  kubectl port-forward $POD_NAME 8080:80

[root@dockerapp helm]# helm delete unrealized-buffalo
release "unrealized-buffalo" deleted
```


```
[root@dockerapp helm]# ls
hello-helm  rbac-config.yaml
[root@dockerapp helm]# helm package hello-helm/
Successfully packaged chart and saved it to: /root/helm/hello-helm-0.1.0.tgz
[root@dockerapp helm]# ls
hello-helm  hello-helm-0.1.0.tgz  rbac-config.yaml
[root@dockerapp helm]#
```
