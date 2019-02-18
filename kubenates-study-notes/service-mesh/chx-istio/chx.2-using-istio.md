Istio 实践主要分为三步，第一步下载并部署 Istio；第二步部署 Bookinfo 微服务；第三步通过指定 yaml 文件测试 Istio 的功能特性。

---

The end-to-end architecture of the application
应用的端到端架构。

---

## 0. 准备工作

创建 `istio-study` 命名空间。

sidecar 使用自动注入：确保 `istio-sidecar-injector` 已经启动了，并配置 `istio-study` 命名空间被标记为 `istio-injection=enabled`：

```
$ kubectl create namespace istio-study
$ kubectl label namespace istio-study istio-injection=enabled
```

## 1. 部署 Bookinfo 微服务

参考：https://istio.io/zh/docs/examples/bookinfo/

Bookinfo 是一个异构应用，几个微服务是由不同的语言编写的。这些服务对 Istio 并无依赖，但是构成了一个有代表性的服务网格的例子：它由多个服务、多个语言构成，并且 `reviews` 服务具有多个版本。



## 2.