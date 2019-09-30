## lintOnSave: false

通过 eslint-loader 在每次保存时执行校验的选项是默认开启的，你也可以通过 vue.config.js 中的 lintOnSave 选项将其关闭。

```
module.exports = {
    lintOnSave: false
}
```

## xx

```
module.exports = {
  css: {
    modules: true
  }
}
```

## 调整 webpack 配置

调整 webpack 配置最简单的方式就是在 vue.config.js 中的 configureWebpack 选项提供一个对象：

```
configureWebpack: {
    plugins: [
      new MyAwesomeWebpackPlugin()
    ]
  }
```

该对象将会被 webpack-merge 合并入最终的 webpack 配置。

## 



