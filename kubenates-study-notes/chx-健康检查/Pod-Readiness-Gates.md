## 1.14 里一个叫做 “Pod Readiness Gates”、也叫做 “Pod Ready ++” 的功能 

在 1.14 版本之前，Kubernetes 判断一个 Pod 是否 Ready，就是检查这个 Pod 的容器是否全部正常运行。但是这里有个问题，那就是容器或者说里面的主进程Ready，并不一定意味着这个应用副本就一定是就绪的。为了确认 Pod 确实可以正常可用，我们希望给它增加一些外部指标（比如，该 Pod 需要的 Service，DNS，存储等服务全部就绪），来反应这个 Pod 是否“真正”Ready。

这个特性，就是 1.14 里一个叫做“Pod Readiness Gates”、也叫做 Pod Ready ++ 的特性。它为 pod 的“Ready 状态” 提供了一个非常强大的扩展点。需要注意的是，用户需要编写一个外部控制器（Controller）来为这个 Pod Readiness Gates 字段对应的指标设置值。

Pod Readiness Gates为pod准备就绪提供了外部反馈的扩展点。