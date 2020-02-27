## 1. 源码

```
@Composable
fun Column(
    modifier: Modifier = Modifier.None,
    arrangement: Arrangement = Arrangement.Begin,
    children: @Composable() ColumnScope.() -> Unit
) {
    FlexLayout(
        orientation = LayoutOrientation.Vertical,
        modifier = modifier,
        arrangement = arrangement,
        crossAxisAlignment = CrossAxisAlignment.Start,
        crossAxisSize = LayoutSize.Wrap,
        children = { ColumnScope().children() }
    )
}
```

## 2. 使用

