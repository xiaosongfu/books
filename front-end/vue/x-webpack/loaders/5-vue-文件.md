1. 安装：

```
cnpm install vue-loader vue-template-compiler -D
```

安装了 vue-loader vue-template-compiler 并配置好 webpack loader 就可以处理 `.vue` 文件。

例如 App.vue 文件：

```
<template>

</template>

<script>

</script>

<style>

</style>
```

main.js 文件：

```
import Vue from './vue.js'
import App from './App.vue'

var vm = new Vue({
    el: "#app",
    components: {
        App
    },
    template: `<App></App>`
})
```

webpack.config.js 文件：

```
{
    test: /\.vue$/,
    loader: 'vue-loader'
}
```
