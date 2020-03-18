## 1. 源码

```
@Composable
inline fun Clip(shape: Shape, crossinline children: @Composable() () -> Unit) {
    RepaintBoundaryNode(name = null, shape = shape, clipToShape = true) {
        children()
    }
}
```

## 2. 使用

```

```

