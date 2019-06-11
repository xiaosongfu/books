1.14 之后，Kubernetes 项目本身开始具备了原生的应用管理能力，这其中最重要的一个功能，就是 Kustomize。

Kustomize 允许用户从一个基础  YAML 文件，通过 overlay 的方式生成最终部署应用所需的 YAML 文件，而不是像 Helm 那样通过字符串替换的方式来直接修改基础 YAML 文件（模板）。这样，在一个用户通过 overlay 生成新的 YAML 文件的同时，其他用户可以完全不受影响的使用任何一个基础 YAML 或者某一层生成出来的 YAML 。这使得每一个用户，都可以通过 fork/modify/rebase 这样 Git 风格的流程来管理海量的 YAML 文件。这种 PATCH 的思想跟 Docker 镜像是非常类似的，它既规避了“字符串替换”对 YAML 文件的入侵，也不需要用户学习蹩脚的 DSL 语法（比如 Lua）。

在 1.14 之后，Kustomize 已经成为了 kubectl 的一个内置命令。不难看到，Kubernetes 社区正在探索一种 Helm 之外的、更加 Kubernetes 原生的应用管理方法。具体效果如何，我们不妨拭目以待。