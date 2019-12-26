mongo shell 是用来操作 mongoDB 的基于 JavaScript 引擎的命令行客户端。

使用 `mongo` 命令启动 mongo shell。

```
docker exec -it mymongo mongo
```

因为是基于 JavaScript 的，所以可以执行任意的 js 代码。比如：

```
print('hello')
```

使用 `exit` 退出 mongo shell。

---

连接到 mongo docker 容器：

```
$ docker exec -it some-mongo bash
```
