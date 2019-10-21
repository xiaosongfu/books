```
const app = new Vue({
  router
}).$mount('#app')
```

通过 router 配置参数注入路由，从而让整个应用都有路由功能

通过注入路由器，我们可以在任何组件内通过 `this.$router` 访问路由器，也可以通过 `this.$route` 访问当前路由。

`this.$router` 和 `router` 使用起来完全一样。我们使用 `this.$router` 的原因是我们并不想在每个独立需要封装路由的组件中都导入路由。

## $router 对象 - 路由器

## $route 对象 - 当前路由

```
$route
  path: "/Login"
  query: Object(empty)
  params: Object(empty)
  fullPath: "/Login"
  name: "login"
  meta: Object(empty)
```
