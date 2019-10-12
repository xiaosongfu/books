## 函数参数默认值

ES6支持在定义函数的时候为其设置默认值：

```
function foo(height = 50, color = 'red'){
    // ...
}
```

不使用默认值：

```
function foo(height, color){
    var height = height || 50;
    var color = color || 'red';
    //...
}
```

这样写一般没问题，但当参数的布尔值为false时，就会有问题了。比如，我们这样调用foo函数：

```
foo(0, "")
```

因为0的布尔值为false，这样height的取值将是50。同理color的取值为‘red’。

所以说，函数参数默认值不仅能是代码变得更加简洁而且能规避一些问题。
