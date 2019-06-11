## 1. 安装

### 1.1 使用压缩包安装

参考：https://www.elastic.co/downloads/logstash

首先下载并解压安装包：

```
$ wget https://artifacts.elastic.co/downloads/logstash/logstash-6.5.4.tar.gz

$ tar -xzf logstash-6.5.4.tar.gz
```

来个简单的测试：

```
bin/logstash -e 'input{stdin{}}output{stdout{codec=>rubydebug}}'
```

然后准备 `logstash.conf` 配置文件

配置文件参考：https://www.elastic.co/guide/en/logstash/current/configuration.html

可以配置的有 `input plugin`、`output plugin` 和 `filter`。

这里以 `http input plugin`、`stdin input plugin` 和 `elasticsearch output plugin`、`stdout output plugin` 为例：

```
input {
    stdin { }
    http{
            # host => "0.0.0.0" # 默认为：0.0.0.0
            # port => 8080 # 默认为：8080
            # id => "my_plugin_id" # 可选配置
        }
}

output {
  elasticsearch { hosts => ["localhost:9200"] }
  stdout { codec => rubydebug }
}
```

接着启动 logstash：

```
$ bin/logstash -f logstash.conf
```
