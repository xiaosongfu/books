
```
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {

    },
    mutations: {

    },
    actions: {

    },
    getters: {
        
    },
    plugins: [], // 配置插件
    strict: true, // 不要在发布环境下启用严格模式！
    devtools: false, // 为某个特定的 Vuex 实例打开或关闭 devtools
})
```

```
import store from './store'

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
```
