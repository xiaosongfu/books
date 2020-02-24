RocketMQ 的官网 https://rocketmq.apache.org/。

RocketMQ 的 Binary 版本是一些编译好的 jar 和辅助的 shell 脚本。可以直接在官网下载；也可以下载源码后自己编译。

```
wget http://mirrors.tuna.tsinghua.edu.cn/apache/rocketmq/4.6.0/rocketmq-all-4.6.0-bin-release.zip

unzip rocketmq-all-4.6.0-bin-release.zip

# 安装 jdk
yum install -y java-1.8.0-openjdk java-1.8.0-openjdk-devel
```

几个核心的 shell 脚本：

* mqnamesrv
* mqbroker
* mqshutdown
* mqadmin

## 启动单机版

启动单机版的 RocketMQ 比较简单，但是需要修改配置文件，我们使用默认提供的 `conf/broker.conf` 配置文件，该文件的内容如下：

```
brokerClusterName = DefaultCluster
brokerName = broker-a
brokerId = 0
deleteWhen = 04
fileReservedTime = 48
brokerRole = ASYNC_MASTER
flushDiskType = ASYNC_FLUSH
```

我们需要指定 broker 自己监听的 IP 地址，以及 namesrv 的地址和端口，不然 rocketmq-console、mqadmin 客户端等会因为跨域而连接不上，只需要在 `conf/broker.conf` 配置文件中添加 brokerIP1 和 namesrvAddr 配置即可：

```
brokerIP1 = 192.168.160.11
namesrvAddr = 192.168.160.11:9876
```

接下来依次启动 NameServer 和 Broker 即可：

> 启动 nameserver：

```
nohup sh bin/mqnamesrv > nameserver.log 2>&1 &
```

> 启动 broker，需要指定配置文件：

```
nohup sh bin/mqbroker -c conf/broker.conf > broker.log 2>&1 &
```

也可以不使用配置文件，而是直接指定 nameserver 地址：

```
nohup sh bin/mqbroker -n localhost:9876 > broker.log 2>&1 &
```

> 关闭 broker 和 nameserver：

```
sh bin/mqshutdown broker

sh bin/mqshutdown namesrv
```

运行示例程序：

```
export NAMESRV_ADDR=localhost:9876

# 发送消息
sh bin/tools.sh org.apache.rocketmq.example.quictstart.Producer

# 接收消息
sh bin/tools.sh org.apache.rocketmq.example.quictstart.Consumer
```

更多信息请参考官方文档：[快速开始](https://rocketmq.apache.org/docs/quick-start/)

---

> unzip rocketmq-all-4.6.0-bin-release 文件夹的内容如下：

````
$ tree
.
├── benchmark
│   ├── consumer.sh
│   ├── producer.sh
│   ├── runclass.sh
│   └── tproducer.sh
├── bin
│   ├── cachedog.sh
│   ├── cleancache.sh
│   ├── cleancache.v1.sh
│   ├── dledger
│   │   └── fast-try.sh
│   ├── mqadmin
│   ├── mqadmin.cmd
│   ├── mqbroker
│   ├── mqbroker.cmd
│   ├── mqbroker.numanode0
│   ├── mqbroker.numanode1
│   ├── mqbroker.numanode2
│   ├── mqbroker.numanode3
│   ├── mqnamesrv
│   ├── mqnamesrv.cmd
│   ├── mqshutdown
│   ├── mqshutdown.cmd
│   ├── os.sh
│   ├── play.cmd
│   ├── play.sh
│   ├── README.md
│   ├── runbroker.cmd
│   ├── runbroker.sh
│   ├── runserver.cmd
│   ├── runserver.sh
│   ├── setcache.sh
│   ├── startfsrv.sh
│   ├── tools.cmd
│   └── tools.sh
├── conf
│   ├── 2m-2s-async
│   │   ├── broker-a.properties
│   │   ├── broker-a-s.properties
│   │   ├── broker-b.properties
│   │   └── broker-b-s.properties
│   ├── 2m-2s-sync
│   │   ├── broker-a.properties
│   │   ├── broker-a-s.properties
│   │   ├── broker-b.properties
│   │   └── broker-b-s.properties
│   ├── 2m-noslave
│   │   ├── broker-a.properties
│   │   ├── broker-b.properties
│   │   └── broker-trace.properties
│   ├── broker.conf
│   ├── dledger
│   │   ├── broker-n0.conf
│   │   ├── broker-n1.conf
│   │   └── broker-n2.conf
│   ├── logback_broker.xml
│   ├── logback_namesrv.xml
│   ├── logback_tools.xml
│   ├── plain_acl.yml
│   └── tools.yml
├── lib
│   ├── commons-beanutils-1.9.2.jar
│   ├── commons-cli-1.2.jar
│   ├── commons-codec-1.9.jar
│   ├── commons-collections-3.2.2.jar
│   ├── commons-digester-1.8.1.jar
│   ├── commons-lang3-3.4.jar
│   ├── commons-logging-1.2.jar
│   ├── commons-validator-1.6.jar
│   ├── dledger-0.1.jar
│   ├── fastjson-1.2.61.jar
│   ├── guava-19.0.jar
│   ├── javassist-3.20.0-GA.jar
│   ├── jcommander-1.72.jar
│   ├── jna-4.2.2.jar
│   ├── logback-classic-1.0.13.jar
│   ├── logback-core-1.0.13.jar
│   ├── netty-all-4.0.42.Final.jar
│   ├── netty-tcnative-boringssl-static-1.1.33.Fork26.jar
│   ├── openmessaging-api-0.3.1-alpha.jar
│   ├── rocketmq-acl-4.6.0.jar
│   ├── rocketmq-broker-4.6.0.jar
│   ├── rocketmq-client-4.6.0.jar
│   ├── rocketmq-common-4.6.0.jar
│   ├── rocketmq-example-4.6.0.jar
│   ├── rocketmq-filter-4.6.0.jar
│   ├── rocketmq-logging-4.6.0.jar
│   ├── rocketmq-namesrv-4.6.0.jar
│   ├── rocketmq-openmessaging-4.6.0.jar
│   ├── rocketmq-remoting-4.6.0.jar
│   ├── rocketmq-srvutil-4.6.0.jar
│   ├── rocketmq-store-4.6.0.jar
│   ├── rocketmq-tools-4.6.0.jar
│   ├── slf4j-api-1.7.7.jar
│   └── snakeyaml-1.19.jar
├── LICENSE
├── NOTICE
└── README.md

9 directories, 89 files
```
