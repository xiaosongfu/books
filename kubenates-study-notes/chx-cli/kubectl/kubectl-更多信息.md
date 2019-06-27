## 新的 Kubectl 文档和徽标

v1.14 新增了新的 kubectl 文档和徽标。kubectl 的文档已经从头开始重写，重点是使用声明性资源配置来管理资源。该文档已作为独立站点发布，其格式为书籍，网址：https://kubectl.docs.kubernetes.io/；新的kubectl徽标和吉祥物（发音为kubee-cuddle）显示在新的docs站点徽标上。

## kubectl插件机制

kubectl插件机制允许开发者以独立二进制文件的形式发布自己的自定义kubectl子命令。这可以用于扩展具有新的更高级功能的kubectl和附加的porcelain（例如，添加set-ns命令）。

插件必须具有 `kubectl-命名` 前缀并存在于用户的$PATH中。插件机制在GA已经大大简化，并且类似于git插件系统。
