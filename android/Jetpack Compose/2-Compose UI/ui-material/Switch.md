## 1. 源码

```
@Composable
fun Switch(
    checked: Boolean,
    onCheckedChange: ((Boolean) -> Unit)?,
    color: Color = MaterialTheme.colors().secondaryVariant
) {
    Semantics(container = true, mergeAllDescendants = true) {
        Wrap {
            Ripple(bounded = false) {
                Toggleable(value = checked, onValueChange = onCheckedChange) {
                    Box(LayoutPadding(DefaultSwitchPadding)) {
                        SwitchImpl(checked, onCheckedChange, color)
                    }
                }
            }
        }
    }
}
```

## 2. 使用

```
Switch(checked = false, onCheckedChange = {
    openDialog.value = it
})
```

