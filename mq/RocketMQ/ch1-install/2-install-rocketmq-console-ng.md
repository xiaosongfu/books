https://github.com/apache/rocketmq-externals/tree/master/rocketmq-console

---

## 下载源码使用 mvn 运行

```
cd /usr/local/src/rocketmq/

git clone https://github.com/apache/rocketmq-externals.git

wget http://mirrors.tuna.tsinghua.edu.cn/apache/maven/maven-3/3.6.3/binaries/apache-maven-3.6.3-bin.zip

unzip apache-maven-3.6.3-bin.zip

cd /usr/local/src/rocketmq/rocketmq-externals/rocketmq-console

/usr/local/src/rocketmq/apache-maven-3.6.3/bin/mvn spring-boot:run
```

## 使用 docker 运行

```
docker run -d -e "JAVA_OPTS=-Drocketmq.namesrv.addr=192.168.160.11:9876 -Dcom.rocketmq.sendMessageWithVIPChannel=true" -p 8080:8080 styletang/rocketmq-console-ng
```
