* [MONITORING LINUX HOST METRICS WITH THE NODE EXPORTER](https://prometheus.io/docs/guides/node-exporter/)

---

# 使用 Node Exporter (v0.17.0)

### 1. 安装

```
$ wget https://github.com/prometheus/node_exporter/releases/download/v0.17.0/node_exporter-0.17.0.linux-amd64.tar.gz

$ tar xvfz node_exporter-0.17.0.linux-amd64.tar.gz

$ cd node_exporter-0.17.0.linux-amd64
```

看看有哪些文件:

```
$ tree
.
├── LICENSE
├── node_exporter
└── NOTICE
```

### 2. 配置并启动服务

```
$ ./node_exporter
```

Node Exporter 在 9100 上暴露自己的指标。

可以访问 http://localhost:9100/metrics 查看暴露的指标。

### 3. 配置 prometheus

```
scrape_configs:
  - job_name: node
    static_configs:
      - targets:
        - localhost:9100
```
