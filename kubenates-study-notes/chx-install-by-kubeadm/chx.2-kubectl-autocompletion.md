https://kubernetes.io/docs/tasks/tools/install-kubectl/#enabling-shell-autocompletion

还可以参考：https://learnk8s.io/blog/kubectl-productivity/

---

使用以下命令自动生成并打印出Bash和Zsh的 completion scripts (完成脚本)：

```
kubectl completion bash
# or
kubectl completion zsh
```

然后 source 这个自动完成脚本即可实现自动补全。

但是这个自动补全脚本依赖 bash-completion，安装命令为：`apt-get install bash-completion` or `yum install bash-completion`

您可以使用以下命令测试是否正确安装了 bash-completion：

```
type _init_completion
```

如果这输出shell函数的代码，则已正确安装bash-completion。如果该命令输出not found错误，则必须将以下行添加到您的~/.bashrc文件中：

```
source /usr/share/bash-completion/bash_completion
```

是否必须将此行添加到您的~/.bashrc文件中，取决于您用于安装bash-completion的包管理器。

## 1. Bash on Linux

方式一：在 `~/.bashrc` 文件中 source 自动完成脚本：

```
echo 'source <(kubectl completion bash)' >>~/.bashrc
```

方式二：将自动完成脚本添加到 `/etc/bash_completion.d` 目录：

```
kubectl completion bash >/etc/bash_completion.d/kubectl
```

## 2. Bash on macOS


## 3. Zsh

