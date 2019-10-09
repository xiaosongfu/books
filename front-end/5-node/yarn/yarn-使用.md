来源：https://www.yarnpkg.com/zh-Hans/docs/usage

---

## 初始化一个新的项目

```
yarn init
```

## 添加一个依赖包

```
yarn add [package]
yarn add [package]@[version]
yarn add [package]@[tag]
```

将依赖项添加到不同依赖项类别

分别添加到 `devDependencies`、`peerDependencies` 和 `optionalDependencies`：

```
yarn add [package] --dev
yarn add [package] --peer
yarn add [package] --optional
```

## 更新一个依赖包

```
yarn upgrade [package]
yarn upgrade [package]@[version]
yarn upgrade [package]@[tag]

yarn upgrade --latest [package] 更新到最新版本
```

## 删除一个依赖包

```
yarn remove [package]
```

## 安装所有的依赖包

```
yarn
```

or

```
yarn install
```
