* [FIRST STEPS WITH PROMETHEUS](https://prometheus.io/docs/introduction/first_steps/)

---

* 1. 使用预编译的二进制文件
  * 1.1 下载
  * 1.2. 启动
* 2. 使用 Docker

---

> prometheus v2.7.1

## 1. 使用预编译的二进制文件

#### 1.1 下载

```
$ wget https://github.com/prometheus/prometheus/releases/download/v2.7.1/prometheus-2.7.1.linux-amd64.tar.gz

$ tar xvfz prometheus-2.7.1.linux-amd64.tar.gz

$ cd prometheus-2.7.1.linux-amd64

$ ./prometheus --help
```

看看都有哪些文件：

```
$ tree
.
|-- console_libraries
|   |-- menu.lib
|   `-- prom.lib
|-- consoles
|   |-- index.html.example
|   |-- node-cpu.html
|   |-- node-disk.html
|   |-- node.html
|   |-- node-overview.html
|   |-- prometheus.html
|   `-- prometheus-overview.html
|-- LICENSE
|-- NOTICE
|-- prometheus
|-- prometheus.yml
`-- promtool

2 directories, 14 files
```

#### 1.2. 启动

```
$ /prometheus --config.file=prometheus.yaml
```

配置文件的内容如下：

```
global:
  scrape_interval: 15s
  evaluation_interval: 15s

rule_files:
  # - "first.rules"
  # - "second.rules"

scrape_configs:
  - job_name: prometheus
    static_configs:
      - targets:
        - localhost:9090
```

scrape: 刮,刮掉,刮削  
evaluation: 评测

* `scrape_interval` 选项控制 prometheus 刮擦目标的频率。您可以为单个目标覆盖此值。
* `evaluation_interval` 选项控制 prometheus 评估规则的频率。
* `rule_files` 块指定我们希望Prometheus服务器加载的任何规则的位置。
* `scrape_configs` 控制Prometheus监视的资源。

从配置文件中可以看到我们配置了一个b名为 prometheus 的 jo，用来爬取 prometheus 自己暴露的指标。

名为 prometheus 的 job 包含一个静态配置的 target，它监听 prometheus 自己暴露的指标。

prometheus 会在 `/methics` 端点暴露自己的指标。所以这个 job 爬取的 URL 为：http://localhost:9090/metrics

接着打开：`http://localhost:9090`

## 2. 使用 Docker

```
docker run --name prometheus-server -d -p 9090:9090 \
  -v /root/prometheus.yml:/etc/prometheus/prometheus.yml \
  prom/prometheus
```

或者

```
docker run --name prometheus-server -d -p 9090:9090 \
  -v /prometheus-data \
  prom/prometheus --config.file=/prometheus-data/prometheus.yml
```




