## v-model 双向数据绑定

只能用在有 value 属性的元素上。

` <input type="text" v-model="msg" ` : msg 改变 input 的 value 也会改变；input 的 value 改变，msg 的值也会改变。

其实是 v-bind:value 和 v-on:input 的组合体现：

```
<div id="app">
<input type="text" v-bind:value="msg" v-on:input="valueChange">
</div>

<script>
    new Vue({
        el: "#app",
        data() {
            return {
                msg: "abc"
            }
        },
        methods: {
            valueChange(e) {
                this.msg = e.target.value;
            }
        }
    })
</script>
```

过程：先绑定 value 为 msg，然后在 value 改变的时候，更新 msg 的值!!!
