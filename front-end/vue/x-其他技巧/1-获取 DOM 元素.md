可以给标签和组件绑定 ref 属性， ref 属性值不能重复，

如果是标签绑定 ref 属性，通过 this.$refs.foo 获取到的是原生的 js  DOM 对象

如果给组件绑定 ref 属性，通过 this.$refs.bar 获取到的是当前的组件对象

```
<div id="app">
    <button ref="btn">按钮</button>
    <sub-com ref="sub"></sub-com>
</div>

<script src="./node_modules/vue/dist/vue.js"></script>
<script>
    var SubCom = {
        template: `<h3>abc</h3>`
    }

    var vm = new Vue({
        el: "#app",
        mounted() {
            console.log(this.$refs.btn.outerHTM)
            console.log(this.$refs.sub)  
        },
        components: {
            SubCom
        }
    })
</script>
```

输出：

```
"<button>按钮</button>"

Object { _uid: 1, _isVue: true, "$options": {…}, _renderProxy: Proxy, _self: {…}, "$parent": {…}, "$root": {…}, "$children": [], "$refs": {}, _watcher: {…}, … }
```

> this.$refs.sub 使用一个 Vue 组件，可以看到它有 $parent、$root 等属性
