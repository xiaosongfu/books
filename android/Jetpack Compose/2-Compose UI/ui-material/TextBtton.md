## 1. 源码

```
@Composable
inline fun TextButton(
    modifier: Modifier = Modifier.None,
    noinline onClick: (() -> Unit)? = null,
    backgroundColor: Color = Color.Transparent,
    contentColor: Color = MaterialTheme.colors().primary,
    shape: Shape = MaterialTheme.shapes().button,
    border: Border? = null,
    elevation: Dp = 0.dp,
    paddings: EdgeInsets = TextButtonPaddings,
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

