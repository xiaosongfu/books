## 1. 源码

```
@Composable
fun Checkbox(
    checked: Boolean,
    onCheckedChange: ((Boolean) -> Unit)?,
    modifier: Modifier = Modifier.None,
    color: Color = MaterialTheme.colors().secondary
) {
    TriStateCheckbox(
        value = ToggleableState(checked),
        onClick = onCheckedChange?.let { { it(!checked) } },
        color = color,
        modifier = modifier
    )
}
```

## 2. 使用

```
Checkbox(checked = true, onCheckedChange = {
    openDialog.value = it
})
```
