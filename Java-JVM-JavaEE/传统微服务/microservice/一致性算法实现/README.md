Raft 一致性算法 : https://github.com/maemual/raft-zh_cn/blob/master/raft-zh_cn.md

---

- etcd
    * 

- Zookeeper
    * http://zookeeper.apache.org/

- Nacos
    * https://nacos.io/zh-cn/index.html
    * https://github.com/alibaba/nacos

- Eureka
    * 

---

服务注册发现

配置管理


---

服务注册和配置管理集群

采用 Dubbo 框架作为微服务解决方案的客户，需要一个稳定的 ZooKeeper 集群实现微服务的注册和发现。

* 为 Dubbo 应用构建微服务注册中心： 如果正在使用 Dubbo 框架构建微服务系统，那么借助 ZooKeeper，可以实现微服务的注册和订阅。
* 实现分布式协调： 如果正在使用 HBase、Spark 或 Kafka 等开源软件，那么借助 ZooKeeper，可以实现分布式系统的协调。

---


注册中心

---

etcd 的优点： 
1. 简单。 使用HTTP 协议和JSON数据格式，接入方便，Raft 算法保证强一致性易于理解。 
2. 数据持久化。 etcd 默认数据一更新就进行持久化。 
3. 安全。 etcd 支持SSL 客户端安全认证。 

Zookeeper 的缺点： 
1. 复杂。 Zookeeper 部署维护复杂。 
2. Java 实现。引入大量依赖，导致维护成本高 
3. 发展缓慢。

