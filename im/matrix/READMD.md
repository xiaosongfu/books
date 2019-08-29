Matrix是一个雄心勃勃的新型生态系统，适用于开放式联合即时消息和VoIP。


* Matrix 中的所有内容都发生在一个 room 里。room 是分布式的，不存在于任何单个服务器上。可以使用 `#matrix:matrix.org` 或 `#test：localhost:8448` 等便利别名找到 room。
* Matrix 用户 ID 看起来像 `@matthew:matrix.org`（虽然将来你通常会使用第三方标识符（3PID）来引用自己和他人：email 地址，电话号码等，而不是操纵 Matrix 用户 ID）



整体架构是：

```
client <----> homeserver <=====================> homeserver <----> client
       https://somewhere.org/_matrix      https://elsewhere.net/_matrix
```


---

`@localpart:my.domain.name` : 发音为 "at localpart on my dot domain dot name"

