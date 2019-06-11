## 1.

SET 设置键以保存字符串值。如果 key 已经保存了一个值，则无论其类型如何，都会被覆盖。在成功的 SET 操作中丢弃与密钥相关联的任何先前时间。

从 Redis 2.6.12 开始 SET 支持一组选项来修改其行为：

* EX seconds -- Set the specified expire time, in seconds.
* PX milliseconds -- Set the specified expire time, in milliseconds.
* NX -- Only set the key if it does not already exist.
* XX -- Only set the key if it already exist.

> 注意：由于 SET 命令选项可以替换 SETNX，SETEX，PSETEX，因此在将来的 Redis 版本中，这三个命令可能会被弃用并最终被删除。

示例：

```
# 3 秒后过期
SET test off EX 3

#  10 毫秒后过期
SET test2 on PX 10

SET test3 abc NX

SET test4 def XX
```


## 