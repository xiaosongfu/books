```
/ 字符串
this.$router.push('/user') // 默认为 path

// 对象
this.$router.push({ path: '/user' }) // 使用 path
this.$router.push({ name: 'user' }) // 使用 name

// 命名的路由
this.$router.push({ name: 'user', params: { userId: '123' }})

// 带查询参数
this.$router.push({ name: 'register', query: { plan: 'private' }})
```

---

```
// 字符串
next('/user') // 默认为 path

// 对象
next({ path: '/user' }) // 使用 path
next({ name: 'user' }) // 使用 name

// 命名的路由
next({ name: 'user', params: { userId: '123' }})

// 带查询参数
next({ name: 'register', query: { plan: 'private' }})
```
