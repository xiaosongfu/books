* babel.config.js
* vue.config.js
* package.json


# 1. babel.config.js

Vue CLI 使用了 Babel 7 中的新配置格式 `babel.config.js`。和 `.babelrc` 或 `package.json` 中的 babel 字段不同，这个配置文件不会使用基于文件位置的方案，而是会一致地运用到项目根目录以下的所有文件，包括 node_modules 内部的依赖。我们推荐在 Vue CLI 项目中始终使用 babel.config.js 取代其它格式。

所有的 Vue CLI 应用都使用 @vue/babel-preset-app，它包含了 babel-preset-env、JSX 支持以及为最小化包体积优化过的配置。

# 2. vue.config.js

见 `vue.config.js.md`。

# 3. package.json

## 3.1 eslint

ESLint 可以通过 `.eslintrc` 或 `package.json` 中的 `eslintConfig` 字段来配置。

```
"eslintConfig": {
    "root": true,
    "env": {
      "node": true
    },
    "extends": [
      "plugin:vue/essential",
      "eslint:recommended"
    ],
    "rules": {},
    "parserOptions": {
      "parser": "babel-eslint"
    }
  }
```

## 3.3 browserslist

```
{
    "browserslist": [
        "> 1%",
        "last 2 versions"
    ]
}
```

.browserslistrc 文件：

```

```

## xx
