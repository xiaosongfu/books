对 css 的处理，webpack 需要 css-loader 和 style-loader。

```
cnpm install css-loader style-loader -D
```

1. 使用 css：

```
import './main.css'
```

2. 报错：

```
ERROR in ./main.css
Module parse failed: Unexpected token (1:4)
You may need an appropriate loader to handle this file type.
| body{
|     background-color: aqua
| }
 @ ./main.js 5:0-19
```

3. 配置方法：

```
module.exports = {
    entry: {
        "main": "./main.js"
    },
    output: {
        filename: './bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    }
}
```

`loader: 'style-loader!css-loader'` 表示遇到 css 文件，先使用 css-loader 解析这个文件，解析完成后再使用 style-loader 生成一个内容为最终解析的 css 代码的 style 标签，并放到 head 标签里。
