## 1. 安装

### 1.1 使用 docker 安装 

参考：https://www.elastic.co/guide/cn/kibana/current/docker.html

```
docker pull docker.elastic.co/kibana/kibana:6.5.4
```

### 1.2 使用压缩包安装

参考：
* https://www.elastic.co/cn/downloads/kibana
* https://www.elastic.co/guide/cn/kibana/current/targz.html

首先下载并解压安装包：

```
$ wget https://artifacts.elastic.co/downloads/kibana/kibana-6.5.4-linux-x86_64.tar.gz

$ tar -xzf kibana-6.5.4-linux-x86_64.tar.gz
```

编辑 `config/kibana.yml` 文件，设置 `elasticsearch.url` 为 Elasticsearch 服务器的地址，如：

```
server.port: 5601
server.host: "0.0.0.0"
elasticsearch.url: "http://localhost:9200"
```

配置文件里面很多都注释掉了，是因为都有默认值，直接使用默认值即可。

这里选择把 `server.port` `server.host` `elasticsearch.url` 这3个配置项显式配置。

接着启动 kibana 服务：

```
$ bin/kibana -d
```

打开浏览器访问 `http://localhost:5601` `http://localhost:5601/staus`

---

```
# and all requests.
#logging.verbose: false

# Set the interval in milliseconds to sample system and process performance
# metrics. Minimum is 100ms. Defaults to 5000.
#ops.interval: 5000

# Specifies locale to be used for all localizable strings, dates and number formats.
#i18n.locale: "en"
```
