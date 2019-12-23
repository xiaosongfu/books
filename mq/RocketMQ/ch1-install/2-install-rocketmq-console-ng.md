https://github.com/apache/rocketmq-externals/tree/master/rocketmq-console

---

## 下载源码使用 mvn 运行

下载 rocketmq-externals 库和 maven：

```
cd /usr/local/src/rocketmq/

git clone https://github.com/apache/rocketmq-externals.git

wget http://mirrors.tuna.tsinghua.edu.cn/apache/maven/maven-3/3.6.3/binaries/apache-maven-3.6.3-bin.zip

unzip apache-maven-3.6.3-bin.zip

cd /usr/local/src/rocketmq/rocketmq-externals/rocketmq-console
```

需要修改 `rocketmq-console/src/main/resources/application.proterties` 配置文件里面的 `rocketmq.config.namesrvAddr` 属性，原始内容如下（省略了部分内容）：

```
#if this value is empty,use env value rocketmq.config.namesrvAddr  NAMESRV_ADDR | now, you can set it in ops page.default localhost:9876
rocketmq.config.namesrvAddr=
#if you use rocketmq version < 3.5.8, rocketmq.config.isVIPChannel should be false.default true
rocketmq.config.isVIPChannel=
#rocketmq-console's data path:dashboard/monitor
rocketmq.config.dataPath=/tmp/rocketmq-console/data
```

需要为 `rocketmq.config.namesrvAddr` 属性设置值：

```
rocketmq.config.namesrvAddr=192.168.160.11:9876
```

使用 `mvn spring-boot:run` 启动：

```
cd /usr/local/src/rocketmq/rocketmq-externals/rocketmq-console
/usr/local/src/rocketmq/apache-maven-3.6.3/bin/mvn spring-boot:run
```

## 使用 docker 运行

```
docker run -d -e "JAVA_OPTS=-Drocketmq.namesrv.addr=192.168.160.11:9876 -Dcom.rocketmq.sendMessageWithVIPChannel=true" -p 8080:8080 styletang/rocketmq-console-ng
```
