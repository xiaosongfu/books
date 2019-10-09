vue.config.js 是一个可选的配置文件，如果项目的 (和 package.json 同级的) 根目录中存在这个文件，那么它会被 @vue/cli-service 自动加载。你也可以使用 package.json 中的 vue 字段，但是注意这种写法需要你严格遵照 JSON 的格式来写。

这个文件应该导出一个包含了选项的对象：

```
// vue.config.js
module.exports = {
  // 选项...
}
```

## 1. publicPath

* Type: string  
* Default: '/'

部署应用包时的基本 URL。用法和 webpack 本身的 output.publicPath 一致，但是 Vue CLI 在一些其他地方也需要用到这个值，所以请始终使用 publicPath 而不要直接修改 webpack 的 output.publicPath。

## 2. outputDir

* Type: string
* Default: 'dist'

当运行 vue-cli-service build 时生成的生产环境构建文件的目录。注意目标目录在构建之前会被清除 (构建时传入 --no-clean 可关闭该行为)。











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
    modules: true,
    extract: true
  }
}
```

css.extract : 是否将组件中的 CSS 提取至一个独立的 CSS 文件中 (而不是动态注入到 JavaScript 中的 inline 代码)。

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



