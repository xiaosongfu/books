```
vue
Usage: vue <command> [options]

Options:
  -V, --version                              output the version number
  -h, --help                                 output usage information

Commands:
  create [options] <app-name>                create a new project powered by vue-cli-service
  add [options] <plugin> [pluginOptions]     install a plugin and invoke its generator in an already created project
  invoke [options] <plugin> [pluginOptions]  invoke the generator of a plugin in an already created project
  inspect [options] [paths...]               inspect the webpack config in a project with vue-cli-service
  serve [options] [entry]                    serve a .js or .vue file in development mode with zero config
  build [options] [entry]                    build a .js or .vue file in production mode with zero config
  ui [options]                               start and open the vue-cli ui
  init [options] <template> <app-name>       generate a project from a remote template (legacy API, requires @vue/cli-init)
  config [options] [value]                   inspect and modify the config
  upgrade [semverLevel]                      upgrade vue cli service / plugins (default semverLevel: minor)
  info                                       print debugging information about your environment

  Run vue <command> --help for detailed usage of given command.
```

---

## vue create <项目名称>


## vue add / vue invoke

add 是先下载安装，然后在 invoke。

比如说要安装 cli-plugin-foo 插件：

```
// 如果是官方的插件
vue add @vue/foo
// 或者
vue add @vue/cli-plugin-foo

// 如果是社区的插件
vue add foo
// 或者
vue add vue-cli-plugin-foo
```

即是：如果只有 @vue/foo 或 foo，命令会自动解析为 @vue/cli-plugin-foo 或 vue-cli-plugin-foo

`vue add @vue/eslint` 命令将 @vue/eslint 解析为完整的包名 @vue/cli-plugin-eslint，然后从 npm 安装它，并调用它的生成器。

> vue-router 和 vuex 的情况比较特殊——它们并没有自己的插件，但是你仍然可以这样添加它们：

```
vue add router
vue add vuex
```

## vue serve / vue build

这两个命令时为了可以快速开始原型开发，可以直接查看和构建一个 `.vue` 文件。

但是它依赖 `@vue/cli-service-global`:

```
npm install -g @vue/cli-service-global
```

## vue inspect


## vue ui


## vue init

vue init 是为了兼容 v2 版本的初始化项目方法，不推荐使用。

它依赖 `@vue/cli-init`:

```
npm install -g @vue/cli-init
```

安装完成后使用 `vue init` 就和 v2 版本的用法一样了。
