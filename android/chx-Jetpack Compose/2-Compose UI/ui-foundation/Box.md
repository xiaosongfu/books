## 1. 源码

```
@Composable
fun Box(
    modifier: Modifier = Modifier.None,
    shape: Shape = RectangleShape,
    backgroundColor: Color = Color.Transparent,
    border: Border? = null,
    padding: Dp = border?.size ?: 0.dp,
    paddingLeft: Dp = Dp.Unspecified,
    paddingTop: Dp = Dp.Unspecified,
    paddingRight: Dp = Dp.Unspecified,
    paddingBottom: Dp = Dp.Unspecified,
    gravity: ContentGravity = ContentGravity.TopStart,
    children: @Composable() () -> Unit = emptyContent()
) {
}
```

## 2. 使用

```

```

