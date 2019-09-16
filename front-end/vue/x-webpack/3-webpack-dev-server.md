1. 安装

```
cnpm install webpack-dev-server -D
```

2. 参数

--open : 自动打开浏览器
--hot : 热更新，在不刷新的情况下替换 css 样式
--inline : 自动刷新
--port 8080 : 指定端口
--process : 显示编译进度
--config : 和 webpack 一样的方式指定配置文件

3. 配置命令

```
{
    "scripts": {
        "dev": "webpack-dev-server --open --hot -- inline --config ./webpack.dev.config.js",
        "prod": "webpack --config ./webpack.prod.config.js"
    }
}
``

直接运行 `npm run dev` 即可
