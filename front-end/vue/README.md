## Vue 对象的属性

this.$emit()

this.$refs.xx

this.$router : 路由器
this.$route  : 当前路由
    this.$route.query
    this.$route.params

this.$parent
this.$children[0]

## 全局xx

Vue.conpoment("", {})

Vue.filter("", function(value){})





## 常见的报错：组件模板只能有一个明确的根元素-Component template should contain exactly one root element

```
[Vue warn]: Error compiling template:

Component template should contain exactly one root element. If you are using v-if on multiple elements, use v-else-if to chain them instead.

1  |  <MyDiv></MyDiv><MyBtn></Mybtn> -- <MyBtn>我的按钮</MyBtn>
   |                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

(found in <Root>)
```




## :class="myclass" 和 class="myclass" 的区别

:class="myclass" 是将 class 的值动态绑定为 myclass 的值。

class="myclass" 是将 class 的值固定为字面量 myclass 字符串。

## 


