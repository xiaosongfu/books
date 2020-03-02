在 Kotlin 中不为空的对象必须初始化。那么怎么办呢？可以输入 lateinit。来承诺最终将会初始化。

```
lateinit var recycleView: RecycleView
```

要检测一个 lateinit var 是否已经初始化过，请在该属性的引用上访问 `.isInitialized` 属性：

```
if (foo::bar.isInitialized) {
    println(foo.bar)
}
```

此检测仅对可词法级访问的属性可用，即声明位于同一个类型内、位于其中一个外围类型中或者位于相同文件的顶层的属性。