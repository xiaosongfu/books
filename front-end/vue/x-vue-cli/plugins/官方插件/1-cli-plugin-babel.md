> https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli-plugin-babel/README.md

---

默认使用 Babel 7 + babel-loader + @vue/babel-preset-app，但是可以通过 babel.config.js 配置使用任何其它 Babel 预设选项或插件。

在已创建的项目中安装:

```
vue add @vue/babel
```

注入的 webpack-chain 规则:

```
config.rule('js')
config.rule('js').use('babel-loader')
config.rule('js').use('cache-loader')
```
