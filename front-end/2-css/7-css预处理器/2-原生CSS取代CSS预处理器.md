> 虽然各种预处理器功能强大，但使用最多的，还是以下特性：变量（variables），代码混合（ mixins），嵌套（nested rules）以及模块化(Modules)。

1. 变量
2. 代码混合
3. 嵌套
4. 模块化

## 1. 变量

CSS 自定义属性（CSS Custom Properties)，又叫  CSS 变量（CSS Variable）,允许你自己在样式中声明变量，并通过 var() 函数使用。

定义变量使用 `--` 开头，如 `--main-color`

```
/* declaration */
--VAR_NAME: <value>;
/* usage */
var(--VAR_NAME)
```

示例：

```
:root {
  /* CSS variables declarations */
  --main-color: #ff00ff;
}

body {
  /* use the variable */
  color: var(--main-color);
}
```

不同于 SASS 预处理器变量的编译时处理，CSS 变量是浏览器在运行时进行处理的，因此 CSS 变量会更加强大和灵活。

## 2. 代码混合


## 3. 嵌套


## 4. 模块化


---

参考：

* [2019年，是否可以抛弃 CSS 预处理器？](https://mp.weixin.qq.com/s/9gJVHyBKFQVkhx-rYkTZhA)
