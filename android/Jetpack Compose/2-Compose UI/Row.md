## 1. 源码

```
@Composable
fun Row(
    modifier: Modifier = Modifier.None,
    arrangement: Arrangement = Arrangement.Begin,
    children: @Composable() RowScope.() -> Unit
) {
    FlexLayout(
        orientation = LayoutOrientation.Horizontal,
        modifier = modifier,
        arrangement = arrangement,
        crossAxisAlignment = CrossAxisAlignment.Start,
        crossAxisSize = LayoutSize.Wrap,
        children = { RowScope().children() }
    )
}
```

## 2. 使用

