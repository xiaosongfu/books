## 1. 源码

```
@Composable
inline fun OutlinedButton(
    modifier: Modifier = Modifier.None,
    noinline onClick: (() -> Unit)? = null,
    backgroundColor: Color = MaterialTheme.colors().surface,
    contentColor: Color = MaterialTheme.colors().primary,
    shape: Shape = MaterialTheme.shapes().button,
    border: Border? =
        Border(1.dp, MaterialTheme.colors().onSurface.copy(alpha = OutlinedStrokeOpacity)),
    elevation: Dp = 0.dp,
    paddings: EdgeInsets = ButtonPaddings,
    noinline children: @Composable() () -> Unit
) = Button(
    modifier = modifier,
    onClick = onClick,
    backgroundColor = backgroundColor,
    contentColor = contentColor,
    shape = shape,
    border = border,
    elevation = elevation,
    paddings = paddings,
    children = children
)
```

## 2. 使用

