

```
docker run -e "JAVA_OPTS=-Drocketmq.namesrv.addr=192.168.160.11:9876 -Dcom.rocketmq.sendMessageWithVIPChannel=false" -p 8080:8080 -t styletang/rocketmq-console-ng
```
