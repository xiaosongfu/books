## 1. 创建项目

```
yarn create strapi-app my-project --quickstart

npx create-strapi-app my-project --quickstart
```

使用 `--quickstart` 参数会指定使用 sqlite 数据库，从而不需要安装其他数据库。

命令执行成功后自动启动应用，并打开 `http://localhost:1337/admin`（这叫 admin panel），在该网页上创建第一个管理员账号。


---

```
Your application was created at /Users/fuxiaosong/dev/project/vue/strapi-demo.

Available commands in your project:

  yarn develop
  Start Strapi in watch mode.

  yarn start
  Start Strapi without watch mode.

  yarn build
  Build Strapi admin panel.

  yarn strapi
  Display all available commands.

You can start by doing:

  cd /Users/fuxiaosong/dev/project/vue/strapi-demo
  yarn develop

.....

One more thing...
Create your first administrator 💻 by going to the administration panel at:

┌─────────────────────────────┐
│ http://localhost:1337/admin │
└─────────────────────────────┘
```