1. 用 npm 全局安装 nrm

```
npm install -g nrm 
```

2. 查看所有的可用的源

```
nrm ls
```

3. 添加源

```
nrm add 源的名称  https://地址
```

4. 删除某个源

```
nrm del 源的名字
```

5. 切换到某个源

```
nrm use 源的名字
```

6. 测试源的速度

```
nrm test
```

---

```
% nrm
Usage: nrm [options] [command]

Options:
  -V, --version                           output the version number
  -h, --help                              output usage information

Commands:
  ls                                      List all the registries
  current                                 Show current registry name
  use <registry>                          Change registry to registry
  add <registry> <url> [home]             Add one custom registry
  set-auth [options] <registry> [value]   Set authorize information for a custom registry with a base64 encoded string or username and pasword
  set-email <registry> <value>            Set email for a custom registry
  set-hosted-repo <registry> <value>      Set hosted npm repository for a custom registry to publish packages
  del <registry>                          Delete one custom registry
  home <registry> [browser]               Open the homepage of registry with optional browser
  publish [options] [<tarball>|<folder>]  Publish package to current registry if current registry is a custom registry.
   if you're not using custom registry, this command will run npm publish directly
  test [registry]                         Show response time for specific or all registries
  help                                    Print this help
```
