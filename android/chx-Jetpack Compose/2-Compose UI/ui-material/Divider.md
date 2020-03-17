## 1. 源码

```
@Composable
fun Divider(
    modifier: Modifier = Modifier.None,
    color: Color = MaterialTheme.colors().surface,
    height: Dp = 1.dp,
    indent: Dp = 0.dp
) {
    val indentMod = if (indent.value != 0f) LayoutPadding(left = indent) else Modifier.None
    ColoredRect(color, modifier + indentMod, height = height)
}
```

## 2. 使用

