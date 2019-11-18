Autoprefixer 自动获取浏览器的流行度和能够支持的属性，并根据这些数据帮你自动为 CSS 规则添加前缀。

例如我们输入以下代码：

```
:fullscreen {
}
```

那么就会输出：

```
:-webkit-:full-screen {
}
:-moz-:full-screen {
}
:full-screen {
}
```
