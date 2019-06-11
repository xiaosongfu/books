https://grafana.com/grafana/download

https://prometheus.io/docs/visualization/grafana/

---

## 1. 使用预编译的二进制文件

#### 1.1 安装

```
$ wget https://dl.grafana.com/oss/release/grafana-6.1.4.linux-amd64.tar.gz

$ tar -zxvf grafana-6.1.4.linux-amd64.tar.gz

$ cd grafana-6.1.4

$ ./bin/grafana-server web
```

Grafana 默认监听 http://localhost:3000。默认的账号密码为：admin/admin。

#### 1.2 使用

`Install Grafana` --> `Add data source` --> `Create your first dashboard`

## 2. 使用 Docker

```
docker run -d -p 3000:3000 grafana/grafana
```
