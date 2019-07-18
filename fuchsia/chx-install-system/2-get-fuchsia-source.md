> Fuchsia 使用 [jiri](https://fuchsia.googlesource.com/jiri/) 工具来管理 git 仓库。

## 检出代码

引导程序要求您安装 Go1.6 或更高版本，并安装 Git。

请执行以下脚本：

```
curl -s "https://fuchsia.googlesource.com/fuchsia/+/master/scripts/bootstrap?format=TEXT" | base64 --decode | bash
```

* 此脚本将创建 `fuchsia` 目录并引导开发环境
* 此脚本将设置开发环境并跟踪 `fuchsia` 仓库的 HEAD，如果需要跟踪其他仓库的 HEAD，可以使用 `fx set-petal` 命令

> `https://fuchsia.googlesource.com/fuchsia/+/refs/heads/master/scripts/bootstrap` 脚本会首先执行 `https://fuchsia.googlesource.com/jiri/+/master/scripts/bootstrap_jiri` 脚本，该脚本会判断主机的操作系统类型（HOST_OS）和操作系统位数（HOST_ARCH），并从 Google Storage bucket (https://fuchsia-build.storage.googleapis.com/jiri) 下载预编译的 jiri 可执行文件；然后执行 `jiri import -name=integration flower https://fuchsia.googlesource.com/integration` 和 `jiri update` 来下载源码。

成功后，引导脚本会打印一条提示消息，建议你将 `.jiri_root/bin` 目录添加到 PATH，这是推荐的，因为其他的 fuchsia 工具链会假设你已经做了该配置。

`.jiri_root/bin` 中的另一个工具是 `fx`，它帮助用于配置，构建，运行和调试 Fuchsia。（Another tool in `.jiri_root/bin` is `fx`, which helps configuring, building, running and debugging Fuchsia. ）

你也可以执行 `source scripts/fx-env.sh`，但这不是必须的，它定义了一些该文档中通常会用到的环境变量，例如 `$FUCHSIA_DIR`，也提供了一些有用的 shell 函数 。
