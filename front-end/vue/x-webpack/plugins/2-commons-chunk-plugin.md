
CommonsChunkPlugin 主要是用于将第三方库和公共模块提取到单独的 js 文件，避免首屏加载的 bundle 文件过大，从而导致加载时间过长，是优化的利器。

分离公共模块、分离第三方库、分离 webpack 运行文件

## 分离第三方库

```
var path = require('path')
var webpack = require('webpack')
var packagejson = require('./package.json)

module.exports = {
    entry: {
        "main": "main.js",
        "vendor": Object.keys(packagejson.dependencies) // 获取生产环境依赖 
    },
    output: {
        path: path.resolve('./dist'),
        filename: '[name].js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor','runtime'],
            filename: '[name].js'
        })
    ]
}
```

该配置可以将第三方库和公共模块分离成一个单独的 js 文件：vendor.js，并将 webpack 运行文件分离到单独的 runtime.js 文件。

但是 vendor.js 文件里面还是包含第三方库和公共模块。

假设  main1.js 和 main2.js 都依赖了 common.js 
