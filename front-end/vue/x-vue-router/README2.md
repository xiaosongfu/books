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

## 匹配优先级

有时候，同一个路径可以匹配多个路由，此时，匹配的优先级就按照路由的定义顺序：谁先定义的，谁的优先级就最高。