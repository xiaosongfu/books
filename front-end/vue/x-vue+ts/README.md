
* vue-class-component : 强化 Vue 组件，使用 TypeScript 装饰器增强 Vue 组件
* vue-property-decorator : 在 vue-class-component 上增强更多的结合 Vue 特性的装饰器

---

* shims-tsx.d.ts：允许你以 .tsx结尾的文件，在 Vue项目中编写 jsx代码
* shims-vue.d.ts：主要用于 TypeScript 识别 .vue 文件， Ts默认并不支持导入 vue 文件，这个文件告诉 ts导入 .vue 文件都按  `VueConstructor<Vue>` 处理。

---

## vue-property-decorator 的装饰器

* @Prop
* @PropSync
* @Provide
* @Model
* @Watch
* @Inject
* @Provide
* @Emit
* @Component (provided by vue-class-component)
* Mixins (the helper function named mixins provided by vue-class-component)

## vuex-class 的装饰器

* @State
* @Getter
* @Action
* @Mutation

---

* [Vue 3.0前的 TypeScript 最佳入门实践](https://mp.weixin.qq.com/s/yxXTx9Gn2HxP6S7lNG9wjA)

