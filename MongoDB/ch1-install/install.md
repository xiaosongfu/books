https://docs.mongodb.com/manual/installation/

https://hub.docker.com/_/mongo

---

目录：

1. docker 安装

---

mongodb 默认使用 27017 端口。

## 1. docker 安装

```
docker run --name mymongo -d -v /mongo/data:/data/db -p 27017:27017 mongo
```

连接到 docker 容器：

```
$ docker exec -it mymongo bash
```

连接到 docker 容器并启动 mongo shell：

```
$ docker exec -it mymongo mongo
```

查看日志：

```
$ docker logs mymongo
```

指定配置文件：

```
$ docker run --name docker 安装 -v /my/custom:/etc/mongo -d mongo --config /etc/mongo/mongod.conf
```

指定用户名和密码：

```
$ docker run -d --name some-mongo \
    -e MONGO_INITDB_ROOT_USERNAME=mongoadmin \
    -e MONGO_INITDB_ROOT_PASSWORD=secret \
    mongo
```

## xx安装


