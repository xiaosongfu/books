https://github.com/nvm-sh/nvm

---

## 1. 安装

using cURL:

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
```

or Wget:

```
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
```

## 2. 常用命令

列出全部可以安装的版本号: `nvm ls-remote` 或 `nvm ls-remote --lts`，运行命令后，稍等一会，就会列出全部可以安装的版本号
 
安装指定版本: `nvm install v7.9.0`

卸载指定版本: `nvm uninstall v7.9.0`

切换指定版本，切换效果是全局的: `nvm use v7.9.0`

查看当前使用的版本: `nvm current`

查看该系统已经安装的版本，这个命令也能看到当前使用的是哪个版本: `nvm ls`

使用系统安装的 node: `nvm use system` `nvm run system --version`

---

nvm 会将各个版本的 node 安装在 `~/.nvm/versions/node` 目录下

```
ls -a ~/.nvm/versions/node/
```
