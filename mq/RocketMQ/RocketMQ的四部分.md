## 四个角色

分布式消息队列是用来高效地传输消息的，它的功能和现实生活中的邮局收发信件很类似，我们类比地说一下相应的模块。现实生活中的邮政系统要正常运行，离不开下面这四个角色，一是发信者，二是收信者，三是负责暂存、传输的邮局，四是负责协调各个地方邮局的管理机构。对应到RocketMQ 中，这四个角色就是 Producer、Consumer、Broker 和 NameServer。

## Topic 和 Message Queue

介绍一下 Topic 和 Message Queue 这两个名词。一个分布式消息队列中间件部署好以后，可以给很多个业务提供服务，同一个业务也有不同类型的消息要投递，这些不同类型的消息以不同的 Topic 名称来区分。所以发送和接收消息前，先创建 Topic，针对某个 Topic 发送和接收消息。有了 Topic 以后，还需要解决性能问题。如果一个  Topic 要发送和接收的数据量非常大，需要能支持增加并行处理的机器来提高处理速度，这时候一个 Topic 可以根据需求设置一个或多个 Message Queue, Message Queue 类似分区或 Partition。Topic 有了多个 Message Queue 后，消息可以并行地向各个 Message Queue 发送，消费者也可以并行地从多个 Message Queue 读取消息并消费。

---

broker: 中间人、经纪人
