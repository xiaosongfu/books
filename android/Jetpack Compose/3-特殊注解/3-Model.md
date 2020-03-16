## 1. 源码

```
@kotlin.annotation.MustBeDocumented
@kotlin.annotation.Target
@kotlin.annotation.Retention
@androidx.compose.StableMarker
public final annotation class Model public constructor() : kotlin.Annotation {}
```

## 2. 使用

用于实现响应式。

对于要观察的对象，如果是内置类型，直接可以观察；而如果是自定义的类，则需要使用 @Model 注解修饰：

```
@Model
class Count(var n: Int)
```
