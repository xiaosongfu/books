可以在路由的 meta 属性中配置一些额外的属性，比如导航到该路由是否需要用户已登录等。

使用 `router.beforeEach((to, from, next) => {})` 可以监听每一次路由切换，可以这这个方法里面根据路由的 meta 信息，判断是已登录，还是没有登录。使用 `next()` 方法直接放行，如果需要跳转到其他界面，如登录界面，则为 `next({path: "/login"})` 

```
<div id="app">
    <router-link to="/home">Home</router-link>
    <router-link to="/hot">Hot</router-link>
    <router-view></router-view>
</div>

<script src="./vue.js"></script>
<script src="./vue-router.js"></script>

<script>
    var Home = {
        template: `<div>Home</div>`
    }
    var Hot = {
        template: `<div>Hot</div>`
    }

    var Login = {
        methods: {
            login() {
                localStorage.setItem("name", "foo")
                this.$router.push({
                    path: "/hot"
                })
            }
        },
        template: `<div> <button @click="login"> 登录 </button> </div>`
    }

    var router = new VueRouter({
        routes: [
            {
                path: "/home",
                component: Home
            },
            {
                path: "/hot",
                component: Hot,
                meta: {
                    requireLogin: true
                }
            },
            {
                path: "/login",
                component: Login
            }
        ]
    })

    router.beforeEach((to, from, next) => {
        console.log(from)
        console.log(to)

        // 判断是否需要登录
        if(to.meta.requireLogin) {
            // 判断是否已经登录
            if(localStorage.getItem("name")) {
                next()
            } else {
                next({
                    path: "/login"
                })
            }
        } else {
            next()
        }
    })

    var vm = new Vue({
        el: "#app",
        router,
        components: {
            Home,
            Hot,
            Login
        }
    })

</script>
```
