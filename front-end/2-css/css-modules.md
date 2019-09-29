https://github.com/css-modules/css-modules

CSS Modules 有所不同。它不是将 CSS 改造成编程语言，而是功能很单纯，只加入了局部作用域和模块依赖。

---

`:global(.className)`

`:local(.className)`

---

## 简单使用

app.css：

```
.title {
    color: green;
}
```

导入：

```
import appStyle from './app.css'

template: `<h1 class={appStyle.title}>Hello</h1>`
```

编译结果：

构建工具会将类名 appStyle.title 编译成一个哈希字符串。

```
<h1 class="_3zyde4l1yATCOkgn-DBWEL">Hello</h1>
```

app.css 也会被编译：

```
._3zyde4l1yATCOkgn-DBWEL {
  color: red;
}
```

这样的代码是默认的局部作用域语法，当然也可以使用显式的局部作用域语法：`:local(.className)`。

## 全局作用域

CSS Modules 允许使用 `:global(.className)` 的语法，声明一个全局规则。凡是这样声明的 class，都不会被编译成哈希字符串。

```
:global(.title) {
    color: green;
}
```

使用普通的class的写法，就会引用全局class。

```
import appStyle from './App.css';

template: `<h1 class="title">Hello</h1>`
```

## Class 的组合

在 CSS Modules 中，一个选择器可以继承另一个选择器的规则，这称为"组合"（"composition"）。

在 App.css中，让 .title 继承 .className：

```
.className {
  background-color: blue;
}

.title {
  composes: className;
  color: red;
}
```

编译的结果是使用 title 的
