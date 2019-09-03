Matrix是一个雄心勃勃的新型生态系统，适用于开放式联合即时消息和VoIP。


* Matrix 中的所有内容都发生在一个 room 里。room 是分布式的，不存在于任何单个服务器上。可以使用 `#matrix:matrix.org` 或 `#test：localhost:8448` 等便利别名找到 room。
* Matrix 用户 ID 看起来像 `@matthew:matrix.org`（虽然将来你通常会使用第三方标识符（3PID）来引用自己和他人：email 地址，电话号码等，而不是操纵 Matrix 用户 ID）



整体架构是：

```
client <----> homeserver <=====================> homeserver <----> client
       https://somewhere.org/_matrix      https://elsewhere.net/_matrix
```

```
@ : User ID
! : Room ID
$ : Event ID
+ : Group ID
# : Room alias
```

user id 禁止使用大写字符。

Group ID 只能包含： `a-z 0-9 . _ = - /`

---

`@localpart:my.domain.name` : 发音为 "at localpart on my dot domain dot name"

---


Matrix是一组开放式API，用于开放式联合即时消息（IM），IP语音（VoIP）和物联网（IoT）通信，旨在创建和支持新的全球实时通信生态系统。目的是为互联网提供一个开放的分散式pubsub层，以便安全地持久化和发布/订阅JSON对象。该规范是标准化Matrix生态系统的各个组件用于彼此通信的API的持续结果。

Matrix试图遵循的原则是：

* 实用的Web友好API（即REST上的JSON）
* 保持简单和愚蠢
    * 提供简单的体系结构，具有最小的第三方依赖性。
* 完全开放：
    * 完全开放的联盟 - 任何人都应该能够参与全球Matrix网络
    * 完全开放的标准 - 公开记录的标准，没有知识产权或专利许可保留
    * 完全开源的参考实现 - 自由许可的示例实现，没有IP或专利许可保留
* 赋予最终用户权力
    * 用户应该能够选择他们使用的服务器和客户端
    * 用户应该控制他们的通信私密程度
    * 用户应准确知道其数据的存储位置
* 完全分散 - 对话或整个网络没有单一的控制点
* 从历史中学习，避免重复它
    * 尝试采用XMPP，SIP，IRC，SMTP，IMAP和NNTP的最佳方面，同时尽量避免失败

Matrix 提供的功能包括：

* 创建和管理完全分布式聊天室，没有单点控制或失败
* 最终一致的加密安全同步跨联合服务器和服务的全球开放网络的房间状态
* 通过（可选）端到端加密在房间中发送和接收可扩展消息
* 由基于功率级别的用户权限系统调解的可扩展用户管理（邀请，加入，离开，踢，禁止）。
* 可扩展的房间状态管理（房间命名，别名，主题，禁令）
* 可扩展的用户配置文件管理（头像，显示名称等）
* 管理用户帐户（注册，登录，注销）
* 使用第三方ID（3PID）（如电子邮件地址，电话号码，Facebook帐户）对Matrix上的用户进行身份验证，识别和发现。
* 可信身份服务器联盟：
    * 发布PKI的用户公钥
    * 将3PID映射到 MatrixID



