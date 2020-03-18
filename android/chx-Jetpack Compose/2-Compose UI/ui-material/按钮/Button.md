## 1. 源码

```
@Composable
fun Button(
    modifier: Modifier = Modifier.None,
    onClick: (() -> Unit)? = null,
    backgroundColor: Color = MaterialTheme.colors().primary,
    contentColor: Color = contentColorFor(backgroundColor),
    shape: Shape = MaterialTheme.shapes().button,
    border: Border? = null,
    elevation: Dp = 2.dp,
    paddings: EdgeInsets = ButtonPaddings,
    children: @Composable() () -> Unit
) {
    // Since we're adding layouts in between the clickable layer and the content, we need to
    // merge all descendants, or we'll get multiple nodes
    Semantics(container = true, mergeAllDescendants = true) {
        Surface(
            shape = shape,
            color = backgroundColor,
            contentColor = contentColor,
            border = border,
            elevation = elevation,
            modifier = modifier
        ) {
            Ripple(bounded = true, enabled = onClick != null) {
                Clickable(onClick = onClick) {
                    Container(constraints = ButtonConstraints, padding = paddings) {
                        CurrentTextStyleProvider(
                            value = MaterialTheme.typography().button,
                            children = children
                        )
                    }
                }
            }
        }
    }
}
```

## 2. 使用

基本使用：

```
Button(onClick = {
    openDialog.value = false
}) {
    Text(text = "确认")
}
```

不为 Button 定义宽高它将占据整个屏幕，通常可以将它放在一个 Container 里面：

```
Container(width = 60.dp, height = 20.dp) {
    Button(onClick = {}) {}
)
```
