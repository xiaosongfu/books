参考：https://help.github.com/cn/actions/automating-your-workflow-with-github-actions/using-self-hosted-runners-in-a-workflow



## 自托管 runner 的标签

标签可以用来指定自托管 runner 的类型。当添加自托管 runner 到一个仓库的时候，一些标签会被自动添加：

* `self-hosted` : 所有自托管的 runner 都会添加该默认标签
* `linux`,`windows`,`macos` : 根据操作系统类型自动添加
* `x86`,`x64`,`ARM32` : 根据 cpu 架构类型自动添加

## 使用自托管 runner

可以只使用 `self-hosted` 标签以选择任意的 runner，或者使用一个标签数组来选择特定的 runner，如：

```
// 使用任意一个自托管 runner
runs-on: self-hosted

// 使用 macOS 操作系统的自托管 runner
runs-on: [self-hosted,macos]

// 使用 ARM32 架构的 linux 自托管 runner
runs-on: [self-hosted,linux,ARM32]
```
