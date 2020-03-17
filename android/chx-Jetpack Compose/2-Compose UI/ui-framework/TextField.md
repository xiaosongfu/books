## 1. 源码

```
@Composable
fun TextField(
    value: String,
    modifier: Modifier = Modifier.None,
    onValueChange: (String) -> Unit = {},
    textStyle: TextStyle? = null,
    keyboardType: KeyboardType = KeyboardType.Text,
    imeAction: ImeAction = ImeAction.Unspecified,
    onFocus: () -> Unit = {},
    onBlur: () -> Unit = {},
    focusIdentifier: String? = null,
    onImeActionPerformed: (ImeAction) -> Unit = {},
    visualTransformation: VisualTransformation? = null
) {
    val fullModel = state { InputState() }
    if (fullModel.value.text != value) {
        val newSelection = TextRange(
            fullModel.value.selection.start.coerceIn(0, value.length),
            fullModel.value.selection.end.coerceIn(0, value.length)
        )
        fullModel.value = InputState(
            text = value,
            selection = newSelection
        )
    }

    BaseTextField(
        value = fullModel.value,
        modifier = modifier,
        onValueChange = {
            val prevValue = fullModel.value.text
            fullModel.value = it
            if (prevValue != it.text) {
                onValueChange(it.text)
            }
        },
        textStyle = textStyle,
        keyboardType = keyboardType,
        imeAction = imeAction,
        onFocus = onFocus,
        onBlur = onBlur,
        focusIdentifier = focusIdentifier,
        onImeActionPerformed = onImeActionPerformed,
        visualTransformation = visualTransformation
    )
}
```

## 2. 使用

