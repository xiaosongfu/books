ESLint 可以通过 .eslintrc 或 package.json 中的 eslintConfig 字段进行配置。

## eslint 命令功能

```
npm install -D eslint

npm install -D eslint-config-standard

npm install -D eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node

npm i -D eslint-plugin-html # 用来处理 .vue 文件中的 script 标签内的 js 代码
```

.eslintrc 文件：

```
{
    extends: "standard",
    "plugins": [
        "html"
    ]
}
```

命令：

```
scripts: {
    "lint": "eslint --ext .js --ext .jsx --ext .vue src/",
    "lint-fix": "eslint --fix --ext .js --ext .jsx --ext .vue src/"
}
```

## 编写代码时实时 lint

```
npm install -D eslint-loader babel-eslint
```

```
{
    "extends": "standard",
    "plugins": [
        "html"
    ],
    "parse": "babel-eslint"
}
```

## 配置文件格式

ESLint 支持几种格式的配置文件
* JavaScript - 使用 .eslintrc.js 然后输出一个配置对象。
* YAML - 使用 .eslintrc.yaml 或 .eslintrc.yml 去定义配置的结构。
* JSON - 使用 .eslintrc.json 去定义配置的结构，ESLint 的 JSON 文件允许JavaScript 风格的注释。
* (弃用) - 使用 .eslintrc，可以使 JSON 也可以是 YAML。
* package.json - 在 package.json 里创建一个 eslintConfig属性，在那里定义配置。
