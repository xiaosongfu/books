参考：https://help.github.com/cn/actions/automating-your-workflow-with-github-actions/adding-self-hosted-runners

---

添加自托管 runner 是针对某一个项目的，所以是在项目的 `Settings -> Actions` 里面配置的，而且配置的时候是将该自托管的 runner 和当前的项目关联的，在配置的时候会指定关联当前的项目和特定的 token。

添加自托管 runner 前需要在服务器上下载、配置和运行 GitHub Actions Runner。

## 1. 下载

使用如下命令下载

```
// Create a folder
$ mkdir actions-runner && cd actions-runner

// Download the latest runner package
$ curl -O https://githubassets.azureedge.net/runners/2.160.2/actions-runner-linux-x64-2.160.2.tar.gz

// Extract the installer
$ tar xzf ./actions-runner-linux-x64-2.160.2.tar.gz
```

## 2. 配置和运行

```
// Create the runner and start the configuration experience
$ ./config.sh --url https://github.com/xiaosongfu/webrtc-study --token AEORC5HTSYTB6ECRBDPUNLC5Z3TMY

// Last step, run it!
$ ./run.sh
```

## 3. 修改项目的 actions 配置文件以使用自托管 runner

```
# Use this yaml in your workflow file for each job
runs-on: self-hosted
```

---

在执行 config.sh 命令的时候提示需要用普通用户执行：

```
adduser xiaosongfu 
passwd xiaosongfu
su xiaosongfu 
```

切换到普通用户后再次执行由提示缺少 Dotnet Core 3.0：

```
[xiaosongfu@instance-iqwpq51e actions-runner]$ ./config.sh --url https://github.com/xiaosongfu/webrtc-study --token AEORC5HTSYTB6ECRBDPUNLC5Z3TMY
ldd: 警告: 你没有执行权限  `./bin/libcoreclr.so'
ldd: 警告: 你没有执行权限  `./bin/System.Security.Cryptography.Native.OpenSsl.so'
ldd: 警告: 你没有执行权限  `./bin/System.IO.Compression.Native.so'
Libicu's dependencies is missing for Dotnet Core 3.0
Execute ./bin/installdependencies.sh to install any missing Dotnet Core 3.0 dependencies.
```

切换到 root 用户后根据提示使用以下命令安装：

```
./bin/installdependencies.sh
```

