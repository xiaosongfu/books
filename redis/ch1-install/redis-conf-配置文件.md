使用配置选项对 Redis 服务器进行配置有两种方法。

一种是使用启动是提供配置选项，如：`redis-server --port 9999`

另一种是启动时指定配置文件，如果：`redis-server /etc/redis/redis/conf`

## redis.conf 配置文件

Redis 的配置文件一般位于 `/etc/redis/redis.conf`，提供了如下这些配置选项：

* `bind 127.0.0.1` : 默认情况下redis是不用密码就能登录的，通过该配置使得只有本机才能登录。

* `maxmemory 1536mb` : 作为缓存服务器，如果不加以限制内存的话，就很有可能出现将整台服务器内存都耗光的情况，可以在redis的配置文件里面设置限定最多可以使用的内存。

```
# 限定最多使用1.5GB内存
maxmemory 1536mb
```

* 

