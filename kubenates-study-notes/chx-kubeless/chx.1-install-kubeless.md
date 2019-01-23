#  安装 v1.0.1

### 1. 安装 kubeless 命令行工具

> 方法一

对于 Windows、Linux 和 macOS，都可以先下载 zip 压缩包，解压，然后将 kubeless 可执行文件复制到 /usr/local/bin/ 目录（Linux 和 macOS），或者将其目录添加到环境变量（Windows）。

在 [https://github.com/kubeless/kubeless/releases](https://github.com/kubeless/kubeless/releases) 页面获取下载链接：

![](../images/chx1/kubeless-release.png)

```
wget https://github.com/kubeless/kubeless/releases/download/v1.0.1/kubeless_darwin-amd64.zip

unzip kubeless_darwin-amd64.zip

cp bundles/kubeless_$OS-amd64/kubeless /usr/local/bin/
```

> 方法二

对于 Linux 和 macOS，可以使用如下命令直接安装最新的：

```
# 获取最新的 release 版本号和当前 OS 的类型
export RELEASE=$(curl -s https://api.github.com/repos/kubeless/kubeless/releases/latest | grep tag_name | cut -d '"' -f 4)

export OS=$(uname -s| tr '[:upper:]' '[:lower:]')

# 下载 zip 压缩包并解压，然后将 kubeless 可执行文件复制到 /usr/local/bin/ 目录
curl -OL https://github.com/kubeless/kubeless/releases/download/$RELEASE/kubeless_$OS-amd64.zip && \
  unzip kubeless_$OS-amd64.zip && \
  sudo cp bundles/kubeless_$OS-amd64/kubeless /usr/local/bin/
```

---

验证安装是否成功：

```
uxiaosongdeMac-mini:~ fuxiaosong$ kubeless
Serverless framework for Kubernetes

Usage:
  kubeless [command]

Available Commands:
  autoscale         manage autoscale to function on Kubeless
  completion        Output shell completion code for the specified shell.
  function          function specific operations
  get-server-config Print the current configuration of the controller
  help              Help about any command
  topic             manage message topics in Kubeless
  trigger           trigger specific operations
  version           Print the version of Kubeless

Flags:
  -h, --help   help for kubeless

Use "kubeless [command] --help" for more information about a command.
fuxiaosongdeMac-mini:~ fuxiaosong$
```

### 2. 在 kubeless集群中安装 kubeless

先创建 `kubeless` 命名空间，kubeless 应用默认使用该命名空间：

```
kubectl create namespace kubeless
```

然后通过 yaml 配置文件安装 kubeless，安装完成后会创建 `Functions` CRD，并启动一个 Controller：

```
# 启用 RBAC:
kubectl create -f https://github.com/kubeless/kubeless/releases/download/v1.0.1/kubeless-v1.0.1.yaml 

# 不启用 RBAC:
kubectl create -f https://github.com/kubeless/kubeless/releases/download/v1.0.1/kubeless-non-rbac-v1.0.1.yaml 
```

使用 `kubectl` 命令查看安装情况：

```

```

---

参考：

* https://kubeless.io/docs/quick-start/