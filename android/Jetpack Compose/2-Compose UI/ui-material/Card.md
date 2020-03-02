## 1. 源码

```
@Composable
fun Card(
    modifier: Modifier = Modifier.None,
    shape: Shape = (+MaterialTheme.shapes()).card,
    color: Color = (+MaterialTheme.colors()).surface,
    border: Border? = null,
    elevation: Dp = 1.dp,
    children: @Composable() () -> Unit
) {
    Surface(
        modifier = modifier,
        shape = shape,
        color = color,
        elevation = elevation,
        border = border,
        children = children
    )
}
```

## 2. 使用

```
Card(elevation = Dp(1F), shape = RoundedCornerShape(Dp(4F))) {
}
```

---

RoundedCornerShape

