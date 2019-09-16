## 简单使用

1. 引入 vue
2. 引入 vue-router
3. 让 Vue 使用 VueRouter
4. 创建 router 对象并配置路由规则
5. 挂载 router 到 vue 实例中

```
<script src="./vue.js"></script>
<script src="./vue-router.js"></script>

<script>
    
    Vue.use(VueRouter)

    var router = new VueRouter({
        routes: [
            {
                path: "/login",
                component: Login
            },
            {
                path: "/register",
                component: Register
            }
        ]   
    })

    var vm = new Vue({
        el: "#app",
        router // 一定记得要挂载到 Vue 实例上
    })

</script>
```

## <router-link> 和 <router-view> 组件

引入 vue-router 模块后，我们会得到 vue-router 提供的两个全局的组件：<router-link> 和 <router-view>。

* <router-link> 会渲染成 a 标签，它有一个 to 属性，对应 a 标签的 href 属性
* <router-view> 是路由匹配组件的出口

vue-router 中注册 <router-link> 和 <router-view> 的源码如下：

```
Vue.component('RouterView', View);
Vue.component('RouterLink', Link);
```

简单示例代码：

```
<div id="app">
    <router-link to="/login">登录</router-link>
    <router-link to="/register">注册</router-link>

    <router-view></router-view>
</div>

<script src="./vue.js"></script>
<script src="./vue-router.js"></script>

<script>
    
    // Vue.use(VueRouter)

    var Login = {
        template: `<div><h2>登录界面</h2></div>`,
        mounted() {
            console.log("Login mounted")
        },
    }

    var Register = {
        template: `<div><h2>注册界面</h2></div>`
    }

    var router = new VueRouter({
        routes: [
            {
                path: "/login",
                component: Login
            },
            {
                path: "/register",
                component: Register
            }
        ]   
    })

    var vm = new Vue({
        el: "#app",
        components: {
            Login,
            Register
        },
        router,
        mounted() {
            console.log("vm mounted")
        },
    })
</script>
```

> 组件的定义：`var Login = {template: ``}` 一定要在路由定义 `var router = new VueRouter({})` 之前!!

## 命名路由

就是给路由命名，to 属性需要使用绑定 `:to={name:'login'}` ：

```
var router = new VueRouter({
    routes: [
        {
            path: "/l",
            name: "login",
            component: Login
        }
    ]   
})

<router-link :to="{name:'login'}">登录</router-link>
```

## 传递参数

* path variable : /user/1
* query params  : /user?userid=1

##### path variable

path variable 使用 `/login/:id` 的方式定义路由，使用 `:to="{name:'abc', params:{id:1}}"` 传递路由参数：

```
var router = new VueRouter({
    routes: [
        {
            path: "/login/:id",
            component: Login
        }
    ]   
})
```

```
<router-link :to="{name: 'login', params: {id:1}}></router-link>
```

在组件 created 后就可以使用 `this.$route.params.属性名` 接收参数了：

```
var Login = {
    template: `<div><h2>登录界面</h2></div>`,
    created() {
        console.log(this.$router)
        console.log(this.$route.params.id)
    }
}
```

##### query params

定义路由时没有变化，传递参数时使用 `:to="{name: 'abc', query:{userid:1}}"`：

```
<router-link :to="{name:'login', query:{userid:1}}">
```

在组件 created 后就可以使用 `this.$route.query.属性名` 接收参数了：

```
var Login = {
    template: `<div><h2>登录界面</h2></div>`,
    created() {
        console.log(this.$router)
        console.log(this.$route.query.userid)
    }
}
```

> `this.$router` 和 `this.$route` : 可以通过 `this.$router` 访问路由器，通过 `this.$route` 访问当前路由!!!
