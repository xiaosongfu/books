参考：[Kubernetes Pod 中的 ConfigMap 配置更新](https://mp.weixin.qq.com/s/aD6FOBMJuXDqDT60hXrZEA)


场景一：针对可以做热更新的容器，进行配置热更新

当然，配置文件更新完不代表业务逻辑就更新了，我们还需要通知应用重新读取配置进行业务逻辑上的更新。

热更新一：应用本身监听本地配置文件
热更新二：使用 sidecar 来监听本地配置文件变更
热更新三：胖容器

场景二：无法热更新时，滚动更新 Pod
Pod 滚动更新一：修改 CI 流程
Pod 滚动更新二：Controller  