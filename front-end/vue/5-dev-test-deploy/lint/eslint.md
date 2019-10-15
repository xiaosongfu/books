ESLint 可以通过 .eslintrc 或 package.json 中的 eslintConfig 字段进行配置。

## eslint 命令功能

```
npm install -D eslint eslint-config-standard eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node

npm i -D eslint-plugin-html # 用来处理 .vue 文件中的 script 标签内的 js 代码。
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

