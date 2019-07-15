https://docs.helm.sh/using_helm/#using-helm

### THREE BIG CONCEPTS

Chart 是一个 Helm package。它包含在Kubernetes集群内运行应用程序，工具或服务所需的所有资源定义。可以把它想象成 Kubernetes 中的类似于Homebrew公式，Apt dpkg或Yum RPM文件的东西。

Repository 是可以收集和共享 Chart 的地方。它就像Perl的CPAN存档或Fedora包数据库，但是是针对Kubernetes包的。

Release 是在Kubernetes集群中运行的 Chart 的实例。一个 Chart 通常可以多次安装到同一个集群中。每次安装时，都会创建一个新 release。考虑MySQL图表。如果要在群集中运行两个数据库，则可以安装该 Chart 两次。每个都有自己的 release，每个又有自己的release name。

### ‘HELM SEARCH’: FINDING CHARTS

当您第一次安装 Helm 时，它已预先配置了 Kubernetes 官方的 charts repository。该存储库包含许多精心策划和维护的 charts。默认情况下，此 charts repository 名为 `stable`。您可以通过运行 `helm search` 来查看哪些图表可用：

···
$ helm search
NAME                 	VERSION 	DESCRIPTION
stable/drupal   	0.3.2   	One of the most versatile open source content m...
stable/jenkins  	0.1.0   	A Jenkins Helm chart for Kubernetes.
stable/mariadb  	0.5.1   	Chart for MariaDB
stable/mysql    	0.1.0   	Chart for MySQL
...
···

没有过滤器，helm 搜索会显示所有可用的图表。您可以通过使用过滤器进行搜索来缩小搜索结果范围：

···
$ helm search mysql
NAME               	VERSION	DESCRIPTION
stable/mysql  	0.1.0  	Chart for MySQL
stable/mariadb	0.5.1  	Chart for MariaDB
···

现在，您只会看到与您的过滤器匹配的结果。为什么mariadb在列表中？因为它的包描述与MySQL有关。我们可以使用 `helm inspect xx` 来查看：

```
$ helm inspect stable/mariadb
Fetched stable/mariadb to mariadb-0.5.1.tgz
description: Chart for MariaDB
engine: gotpl
home: https://mariadb.org
keywords:
- mariadb
- mysql
- database
- sql
...
```

搜索是查找可用包的好方法。找到要安装的软件包后，可以使用 `helm install` 进行安装。

### ‘HELM INSTALL’: INSTALLING A PACKAGE

要安装新软件包，请使用 `helm install` 命令。最简单的是，它只需要一个参数：chart 的名称。

```
$ helm install stable/mariadb
Fetched stable/mariadb-0.3.0 to /Users/mattbutcher/Code/Go/src/k8s.io/helm/mariadb-0.3.0.tgz
NAME: happy-panda
LAST DEPLOYED: Wed Sep 28 12:32:28 2016
NAMESPACE: default
STATUS: DEPLOYED

Resources:
==> extensions/Deployment
NAME                     DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE
happy-panda-mariadb   1         0         0            0           1s

==> v1/Secret
NAME                     TYPE      DATA      AGE
happy-panda-mariadb   Opaque    2         1s

==> v1/Service
NAME                     CLUSTER-IP   EXTERNAL-IP   PORT(S)    AGE
happy-panda-mariadb   10.0.0.70    <none>        3306/TCP   1s


Notes:
MariaDB can be accessed via port 3306 on the following DNS name from within your cluster:
happy-panda-mariadb.default.svc.cluster.local

To connect to your database run the following command:

   kubectl run happy-panda-mariadb-client --rm --tty -i --image bitnami/mariadb --command -- mysql -h happy-panda-mariadb
```

现在安装了mariadb chart。请注意，安装 chart 会创建新的 release 对象。上面的 release 被命名为 happy-panda。（如果要使用自己的版本名称，只需在 `helm install` 上使用 `--name` 标志）。

在安装过程中，helm客户端将打印有关创建资源的有用信息，发布状态以及是否可以或应该采取其他配置步骤。Helm不会等到所有资源都在运行之前才会退出。许多 chart 需要大小超过600M的Docker镜像，并且可能需要很长时间才能安装到群集中。要跟踪发布的状态或重新读取配置信息，可以使用 `helm status`：

```
$ helm status happy-panda
Last Deployed: Wed Sep 28 12:32:28 2016
Namespace: default
Status: DEPLOYED

Resources:
==> v1/Service
NAME                     CLUSTER-IP   EXTERNAL-IP   PORT(S)    AGE
happy-panda-mariadb   10.0.0.70    <none>        3306/TCP   4m

==> extensions/Deployment
NAME                     DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE
happy-panda-mariadb   1         1         1            1           4m

==> v1/Secret
NAME                     TYPE      DATA      AGE
happy-panda-mariadb   Opaque    2         4m


Notes:
MariaDB can be accessed via port 3306 on the following DNS name from within your cluster:
happy-panda-mariadb.default.svc.cluster.local

To connect to your database run the following command:

   kubectl run happy-panda-mariadb-client --rm --tty -i --image bitnami/mariadb --command -- mysql -h happy-panda-mariadb
```

以上显示了您的 release 的当前状态。

### Customizing the Chart Before Installing

我们这里的安装方式只会使用此 chart 的默认配置选项。很多时候，您需要自定义 chart 以使用首选配置。要查看可在 chart 上配置的选项，请使用 `helm inspect values`：

```
$ helm inspect values stable/mariadb
Fetched stable/mariadb-0.3.0.tgz to /Users/mattbutcher/Code/Go/src/k8s.io/helm/mariadb-0.3.0.tgz
## Bitnami MariaDB image version
## ref: https://hub.docker.com/r/bitnami/mariadb/tags/
##
## Default: none
imageTag: 10.1.14-r3

## Specify a imagePullPolicy
## Default to 'Always' if imageTag is 'latest', else set to 'IfNotPresent'
## ref: http://kubernetes.io/docs/user-guide/images/#pre-pulling-images
##
# imagePullPolicy:

## Specify password for root user
## ref: https://github.com/bitnami/bitnami-docker-mariadb/blob/master/README.md#setting-the-root-password-on-first-run
##
# mariadbRootPassword:

## Create a database user
## ref: https://github.com/bitnami/bitnami-docker-mariadb/blob/master/README.md#creating-a-database-user-on-first-run
##
# mariadbUser:
# mariadbPassword:

## Create a database
## ref: https://github.com/bitnami/bitnami-docker-mariadb/blob/master/README.md#creating-a-database-on-first-run
##
# mariadbDatabase:
```

未完。。。

### ‘HELM UPGRADE’ AND ‘HELM ROLLBACK’: UPGRADING A RELEASE, AND RECOVERING ON FAILURE

发布新版本的 chart 时，或者当您要更改发行版的配置时，可以使用 `helm upgrade` 命令。

升级需要一个已经存在的 release 并根据您提供的信息进行升级。由于Kubernetes chart可能庞大而复杂，因此Helm尝试执行侵入性最小的升级。它只会更新自上次发布以来已更改的内容。

```
$ helm upgrade -f panda.yaml happy-panda stable/mariadb
Fetched stable/mariadb-0.3.0.tgz to /Users/mattbutcher/Code/Go/src/k8s.io/helm/mariadb-0.3.0.tgz
happy-panda has been upgraded. Happy Helming!
Last Deployed: Wed Sep 28 12:47:54 2016
Namespace: default
Status: DEPLOYED
...
```

未完。。。

### ‘HELM DELETE’: DELETING A RELEASE

何时需要从群集中卸载或删除 release 时，请使用 `helm delete` 命令：

```
$ helm delete happy-panda
```

这将从群集中删除该版本。您可以使用 `helm list` 命令查看所有当前部署的 release：

```
$ helm list
NAME           	VERSION	UPDATED                        	STATUS         	CHART
inky-cat       	1      	Wed Sep 28 12:59:46 2016       	DEPLOYED       	alpine-0.1.0
```

从上面的输出中，我们可以看到happy-panda的 release 被删除了。

但是，Helm始终记录发生的版本。需要查看已删除的版本？`helm list --deleted` 显示那些，以及 `helm list --all` 显示所有版本（已删除和当前已部署，以及失败的版本）：

```
$ helm list --all
NAME           	VERSION	UPDATED                        	STATUS         	CHART
happy-panda   	2      	Wed Sep 28 12:47:54 2016       	DELETED        	mariadb-0.3.0
inky-cat       	1      	Wed Sep 28 12:59:46 2016       	DEPLOYED       	alpine-0.1.0
kindred-angelf 	2      	Tue Sep 27 16:16:10 2016       	DELETED        	alpine-0.1.0
```

由于Helm会保留已删除 release 的记录，因此无法重新使用版本名称。（如果确实需要重新使用版本名称，可以使用 `--replace` 标志，但它只会重用现有版本并替换其资源。）请注意，由于以这种方式保留版本，您可以回滚已删除的资源，并重新激活它。

## ‘HELM REPO’: WORKING WITH REPOSITORIES

到目前为止，我们一直只在 `stable` 存储库中安装 chart。但是您可以将helm配置为使用其他存储库。Helm在 `helm repo` 命令下提供了几个存储库工具。您可以使用 `helm repo list` 查看配置了哪些存储库：

```
$ helm repo list
NAME           	URL
stable         	https://kubernetes-charts.storage.googleapis.com
local          	http://localhost:8879/charts
mumoshu        	https://mumoshu.github.io/charts
```

并且可以使用 `helm repo add` 添加新的存储库：

```
$ helm repo add dev https://example.com/dev-charts
```

由于 chart 存储库经常更改，因此您可以通过运行 `helm repo update` 来确保Helm客户端是最新的。

### CREATING YOUR OWN CHARTS

[图表开发指南]() 介绍了如何开发自己的图表。但是您可以使用 `helm create` 命令快速入门：

```
$ helm create deis-workflow
Creating deis-workflow
```

现在 `./deis-workflow` 中有一个 chart。您可以编辑它并创建自己的模板。

在编辑 chart 时，可以通过运行 `helm lint` 来验证其格式是否正确。

当需要打包 chart 以进行分发时，您可以运行 `helm package` 命令：

```
$ helm package deis-workflow
deis-workflow-0.1.0.tgz
```

现在可以通过 `helm install` 轻松安装该图表：

```
$ helm install ./deis-workflow-0.1.0.tgz
...
```

存档的 chart 可以加载到图表存储库中。请参阅 [图表存储库服务器的文档] 以了解如何上载。

注意： `stable` 存储库在 Helm Charts GitHub 仓库上进行管理。该项目接受图表源代码，并（审核后）为您打包。