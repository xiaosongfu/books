## npm install -g [package]

安装模块到全局。

不会在项目 node_modules 目录中保存模块，不会将模块依赖写入 dependencies 或 devDependencies 节点，运行 `npm install` 初始化项目时不会下载模块。

## npm install [package]

安装模块到项目 node_modules 目录下。

不会将模块依赖写入 dependencies 或 devDependencies 节点，运行 `npm install` 初始化项目时不会下载模块。

## npm install -save [package]

安装模块到项目 node_modules 目录下，会将模块依赖写入 dependencies 节点，运行 `npm install` 初始化项目时，会将模块下载到项目目录下。

## npm install -save-dev [package]

安装模块到项目 node_modules 目录下，会将模块依赖写入devDependencies 节点，运行 `npm install` 初始化项目时，会将模块下载到项目目录下。

---

1. npm install 和 npm i 是一样
2. --save 和 -S 是一样
3. --save-dev 和 -D 是一样的

---
