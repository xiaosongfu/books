Kubectl 插件作为简单的可执行文件分发，并名称格式为 `kubectl-x`。前缀 `kubectl-` 是必需的，接下来是允许调用插件的新 kubectl 子命令。

## 1. 安装插件

要安装插件，您只需将 `kubectl-x` 文件复制到 PATH 环境变量下的任何目录，并使其可执行（例如，使用chmod +x）。

可执行文件可以是任何类型，Bash脚本，编译的Go程序，Python脚本，它确实无关紧要。唯一的要求是它可以由操作系统直接执行。

使用以下命令列出系统上当前安装的所有插件：`kubectl plugin list`

## 2. 插件商店

krew 项目旨在提供一个统一的解决方案，共享，查找，安装和管理kubectl插件。该项目将自己称为“kubectl插件的包管理器”（名称krew是brew的提示）。

krew本身是一个kubectl插件。这意味着，安装krew本质上就像安装任何其他kubectl插件一样。您可以在GitHub [https://github.com/GoogleContainerTools/krew/](https://github.com/GoogleContainerTools/krew/#installation) 页面上找到krew的详细安装说明。

最重要的krew命令如下：

```
# Search the krew index (with an optional search query)
kubectl krew search [<query>]

# Display information about a plugin
kubectl krew info <plugin>

# Install a plugin
kubectl krew install <plugin>

# Upgrade all plugins to the newest versions
kubectl krew upgrade

# List all plugins that have been installed with krew
kubectl krew list

# Uninstall a plugin
kubectl krew remove <plugin>
```

> 请注意，kubectl krew list 命令仅列出已使用krew安装的插件，而kubectl plugin list 命令列出了所有插件，即使用krew安装的插件和以其他方式安装的插件。

## 创建自己的插件

新建 kubectl-img 文件并输入以下内容：

```
#!/bin/bash
kubectl get pods -o custom-columns='NAME:metadata.name,IMAGES:spec.containers[*].image'
```

添加可执行权限，并移动到 PATH 目录，即可执行 `kubectl img`

如上所述，kubectl 插件可以用任何编程语言或脚本语言编写。如果使用shell脚本，则可以从插件轻松调用kubectl。但是，您可以使用实际编程语言编写更复杂的插件，例如，使用 [Kubernetes 客户端库](https://kubernetes.io/docs/reference/using-api/client-libraries/)。如果使用Go，您还可以使用 [cli-runtime](https://github.com/kubernetes/cli-runtime)库，它专门用于编写kubectl插件。

## 常用命令

```
kubectl plugin list # 列出系统上当前安装的所有插件
```
