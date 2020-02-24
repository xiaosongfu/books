## 类名的对应

Foo.kt -> FooKt.java

可以使用 `@file:JvmName(Foo)` 来指定生成的类名

## 全局函数

会变为 `public static` 签名的函数，直接使用 FooKt.foo(...) 调用即可。

## 
