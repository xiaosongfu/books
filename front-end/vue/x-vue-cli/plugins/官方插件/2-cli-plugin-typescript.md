> https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli-plugin-typescript/README.md

---

使用 TypeScript + ts-loader + fork-ts-checker-webpack-plugin 实现线程外的快速类型检查。

在已创建的项目中安装:

```
vue add @vue/typescript
```

注入的 webpack-chain 规则:

```
config.rule('ts')
config.rule('ts').use('ts-loader')
config.rule('ts').use('babel-loader') (当配合 @vue/cli-plugin-babel 使用时)
config.rule('ts').use('cache-loader')
config.plugin('fork-ts-checker')
```

---


