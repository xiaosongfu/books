* [FIRST STEPS WITH PROMETHEUS](https://prometheus.io/docs/introduction/first_steps/)
* [MONITORING LINUX HOST METRICS WITH THE NODE EXPORTER](https://prometheus.io/docs/guides/node-exporter/)

---

## 安装 v2.7.1

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

## 启动

```
$ /prometheus --config.file="prometheus.yaml"
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
      - targets: ['localhost:9090']
```

从配置文件中可以看到我们配置了一个 target，它监听 prometheus 自己暴露的指标。

prometheus 会在 `/methics` 端点暴露自己的指标。

接着打开：`http://localhost:9090`

## 使用 Node Exporter (v0.17.0)

```
$ wget https://github.com/prometheus/node_exporter/releases/download/v0.17.0/node_exporter-0.17.0.linux-amd64.tar.gz

$ tar xvfz node_exporter-0.17.0.linux-amd64.tar.gz

$ cd node_exporter-0.17.0.linux-amd64
```

看看有哪些文件:

```

```

启动服务：

```
$ ./node_exporter
```

Node Exporter 在 9100 上暴露自己的指标。

添加配置：

```

```