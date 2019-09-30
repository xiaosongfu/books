```
.env                # 在所有的环境中被载入
.env.local          # 在所有的环境中被载入，但会被 git 忽略
.env.[mode]         # 只在指定的模式中被载入
.env.[mode].local   # 只在指定的模式中被载入，但会被 git 忽略
```

为一个特定模式准备的环境文件的 (例如 .env.production) 将会比一般的环境文件 (例如 .env) 拥有更高的优先级。

此外，Vue CLI 启动时已经存在的环境变量拥有最高优先级，并不会被 .env 文件覆写。

## Vue cli 的模式

一个 Vue CLI 项目有三个模式：

* development 模式用于 vue-cli-service serve
* production 模式用于 vue-cli-service build 和 vue-cli-service test:e2e
* test 模式用于 vue-cli-service test:unit

每个模式都会将 NODE_ENV 的值设置为模式的名称——比如在 development 模式下 NODE_ENV 的值会被设置为 "development"。

你可以通过为 .env 文件增加后缀来设置某个模式下特有的环境变量。比如，如果你在项目根目录创建一个名为 .env.development 的文件，那么在这个文件里声明过的变量就只会在 development 模式下被载入。

你可以通过传递 --mode 选项参数为命令行覆写默认的模式。例如，如果你想要在构建命令中使用开发环境变量，请在你的 package.json 脚本中加入：

```
"dev-build": "vue-cli-service build --mode development",
```

## 自定义环境变量

定义：

```
// .env.staging 文件
VUE_APP_TITILE=Myapp
```

使用： 

```
// 代码中
process.env.VUE_APP_TITILE

// html 中

```

## xx

应用代码中始终可用的还有两个特殊的变量：

* `NODE_ENV` - 会是 "development"、"production" 或 "test" 中的一个。具体的值取决于应用运行的模式。
* `BASE_URL` - 会和 vue.config.js 中的 publicPath 选项相符，即你的应用会部署到的基础路径。

你可以在 vue.config.js 文件中计算环境变量。它们仍然需要以 VUE_APP_ 前缀开头。这可以用于版本信息 `process.env.VUE_APP_VERSION = require('./package.json').version`。

## xx

所有解析出来的环境变量都可以在 public/index.html 中以 HTML 插值中介绍的方式使用。

## 只在本地有效的变量

有的时候你可能有一些不应该提交到代码仓库中的变量，尤其是当你的项目托管在公共仓库时。这种情况下你应该使用一个 .env.local 文件取而代之。本地环境文件默认会被忽略，且出现在 .gitignore 中。

.local 也可以加在指定模式的环境文件上，比如 .env.development.local 将会在 development 模式下被载入，且被 git 忽略。