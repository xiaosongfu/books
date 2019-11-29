https://eslint.org/

https://cn.eslint.org/

--

JSLint -> JSHint -> ESLint

* 2002 年，Douglas Crockford 开发 JSLint，并于 2010 年开源
* 在 2011 年，Anton Kovalyov 老爷子 Fork 原项目开发了 JSHint
* 2013 年的 6 月份，Zakas 发布了全新的 lint 工具——ESLint

---

## 核心

eslint

## plugin

eslint-plugin-standard
eslint-plugin-promise
eslint-plugin-import
eslint-plugin-node

eslint-plugin-html # 用来处理 .vue 文件中的 script 标签内的 js 代码

eslint-plugin-vue

## loader

eslint-loader

## 解析器

* babel-eslint # ES 的接下去
* @typescript-eslint/parser # ts 的解析器

## 规则

* eslint-config-recommended
* eslint-config-standard
* eslint-config-airbnb

* @vue/eslint-config-typescript
* @vue/eslint-config-airbnb

---

* [github.com/standard/eslint-config-standard](https://github.com/standard/eslint-config-standard/blob/master/eslintrc.json)
* [github.com/airbnb/javascript/packages/eslint-config-airbnb](https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/README.md)

## 参考文章

ESLint 使用简介 https://www.jianshu.com/p/933b6b6a84c9

ESLint配置（一）：eslint默认及自定义规则介绍，上传自己的eslint-config-*风格文件 https://blog.csdn.net/guang_s/article/details/90231312