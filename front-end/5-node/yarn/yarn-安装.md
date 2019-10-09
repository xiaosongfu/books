来源：https://www.yarnpkg.com/zh-Hans/docs/install#mac-stable

---

## 安装

你可以通过 Homebrew 包管理器安装 Yarn，如果没有安装 Node.js 它也可以安装。

```
brew install yarn
```

如果您使用 nvm 或类似的东西，您应该排除安装 Node.js 以便使用 nvm 的 Node.js 版本。

```
brew install yarn --without-node
```

查看安装结果：

```
yarn --version
```

升级 yarn：

```
brew upgrade yarn
或
brew upgrade yarn --without-node
```
