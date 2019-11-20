只需要在 package.json 文件中添加 build 和 start 命令即可：

```
{
  "scripts": {
    "build": "tsc",
    "start": "node dist/server.js"
  }
}
```

配置了 build ，heroku 就会安装 devDependencies 下面的依赖（默认是不安装的），并且在执行 `npm run start`  之前先执行 build 命令，这样就可以实现编译 ts 代码了。("build": "tsc", 命令需要配合 tsconfig.json 文件)

heroku 默认执行 `npm run start` 命令来启动服务器，当然也可以在 Procfile 文件中指定启动命令：

```
web: npm run start
```
