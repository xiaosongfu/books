Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。

* state 就是一个对象
* getters 需要 state 作为第一个参数，也可以传递 getters 作为第二个参数 
* mutations 需要 state 作为第一个参数，后面可以有多个参数，通过 store.commit 传递进来
* actions 需要 context 作为第一个参数，后面可以有多个参数，通过 store.dispatch 传递进来

```
this.$store.state.foo1
this.$store.getters.foo2
this.$store.commit('bar1')
this.$store.dispatch('bar2')
```

由于 store 中的状态是响应式的，在组件中调用 store 中的状态简单到仅需要在计算属性中返回即可。触发变化也仅仅是在组件的 methods 中提交 mutation。

* state -> mapState -> 放在 computed 计算属性块中
* getters -> mapGetters -> 放在 computed 计算属性块中
* mutations -> mapMutations -> 放在 methods 方法块中
* actions -> mapActions -> 放在 methods 方法块中

---

```
commit(type: string, payload?: any, options?: Object)
dispatch(type: string, payload?: any, options?: Object)

mapState(namespace?: string, map: Array<string> | Object<string | function>): Object
mapGetters(namespace?: string, map: Array<string> | Object<string>): Object
mapActions(namespace?: string, map: Array<string> | Object<string | function>): Object
mapMutations(namespace?: string, map: Array<string> | Object<string | function>): Object

createNamespacedHelpers(namespace: string): Object // 返回一个包含 mapState、mapGetters、mapActions 和 mapMutations 的对象
```
