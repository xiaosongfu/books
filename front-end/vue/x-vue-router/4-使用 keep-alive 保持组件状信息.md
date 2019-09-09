比如界面有两个组件，Home 和 Hot ，界面在他们之间来回切换，默认情况下，在来回切换的过程中，两个组件都会在显示的时候被创建，切换到另一个组件的时候被销毁，然后再显示的时候再重新创建，这样不仅不能保存状态，而且性能消耗也很大。

不能保存状态的意思是说，比如 Hot 界面的点击一个按钮修改了某一段文本的颜色，当先切换到 Home 再切换回来的时候，这段文本的颜色会变成默认颜色，需要再次点击按钮才能重新改变颜色。

而使用 keep-alive 将组件缓存起来后，先切换到 Home 再切换回来的时这段文本的颜色会保持为点击按钮后修改的颜色。

## keep-alive

使用 <keep-alive> 标签将 <router-view> 包裹起来即可。

```
<div id="app">
    <router-link to="/home">Home</router-link>
    <router-link to="/hot">Hot</router-link>

    <keep-alive>
        <router-view></router-view>
    </keep-alive>
</div>

<script src="./vue.js"></script>
<script src="./vue-router.js"></script>

<script>
    
    var Home = {
        template: `<h2>Home</h2>`,
        created() {
            console.log("Home created")
        },
        destroyed() {
            console.log("Home destroyed")
        },
    }

    var Hot = {
        template: `<div> <h2>Hot</h2> <button @click="cc"> 点击变色 </button> </div>`,
        methods: {
            cc(e) {
                document.getElementsByTagName("h2")[0].style.color = "#ffaced";
            }
        },
        created() {
            console.log("Hot created")
        },
        destroyed() {
            console.log("Hot destroyed")
        },
    }

    var router = new VueRouter({
        routes: [
            {
                path: "/home",
                component: Home
            },
            {
                path: "/hot",
                component: Hot
            }
        ]
    })

    var vm = new Vue({
        el: "#app",
        router,
        components: {
            Home,
            Hot
        }
    })

</script>
```

如果没有使用 <keep-alive> 包裹：

```
<div id="app">
    <router-link to="/home">Home</router-link>
    <router-link to="/hot">Hot</router-link>
    
    <router-view></router-view>
</div>
```

则控制台会输出：

```
Home created 
Hot created
Home destroyed
Home created 
Hot destroyed
```

先创建 Home，切换到 Hot 后创建 Hot，并销毁 Home，切换回 Home 后，创建 Home 并销毁 Hot。

显而易见， Hot 界面的 Hot 文字的颜色没有切换都会变为默认的黑色。

当使用 <keep-alive> 包裹后， Home 和 Hot 都只会被创建一次，且 Hot 的文本颜色会保持不变。

