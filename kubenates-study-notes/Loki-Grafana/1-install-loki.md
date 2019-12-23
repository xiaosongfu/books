Loki 当前以二进制形式和 Docker 容器镜像分发。请选择最适合您的方式。

## 使用 docker 安装

Docker 镜像:

* https://hub.docker.com/r/grafana/loki
* https://hub.docker.com/r/grafana/promtail

```
$ docker pull "grafana/loki:v1.2.0"
$ docker pull "grafana/promtail:v1.2.0"
```

## 使用二进制文件安装

我们为最常见的操作系统和 CPU 体系结构提供了预编译的二进制可执行文件，请根据你的操作系统和架构选择。

以 linux 为例：

```
$ curl -O -L "https://github.com/grafana/loki/releases/download/v1.2.0/loki-linux-amd64.zip"
# extract the binary
$ unzip "loki-linux-amd64.zip"
# make sure it is executable
$ chmod a+x "loki-linux-amd64"
```
