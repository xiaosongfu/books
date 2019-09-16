html-webpack-plugin 可以实现将 index.html 拷贝到 dist 目录，并且自动加上 `<script src="./bundle.js"></script>`

安装：

```
cnpm install html-webpack-plugin -D
```

配置：

```
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        "main": "./main.js"
    },
    output: {
        path: path.resolve('./dist'), // 实现将相对路径改为绝对路径
        filename: './bundle.js'
    },
    // watch: true, // 执行 webpack 命令时会挂起，一直监听文件变化，有变化就重新打包

    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /.(jpg|png|jpeg|svg)$/,
                loader: 'url-loader?limit=40000'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html', // index.html 文件
        })
    ]
}
```

使用 path 库将打包产物输出到 dist 目录；使用 html-webpack-plugin 来处理 index.html ，包括自动加上 `<script src="./bundle.js"></script>` 标签。

index.html 文件里面只需要一个 div 就可以了：

```
<body>
    <div id="app"></div>
</body>
```
