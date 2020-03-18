## 1. 源码

```
@Composable
fun AlertDialog(
    onCloseRequest: () -> Unit,
    title: @Composable() (() -> Unit)? = null,
    text: @Composable() () -> Unit,
    confirmButton: @Composable() () -> Unit,
    dismissButton: @Composable() (() -> Unit)? = null,
    buttonLayout: AlertDialogButtonLayout = SideBySide
) {
}

@Composable
fun AlertDialog(
    onCloseRequest: () -> Unit,
    title: (@Composable() () -> Unit)? = null,
    text: @Composable() () -> Unit,
    buttons: @Composable() () -> Unit
) {
}
```

## 2. 使用

```
AlertDialog(
    onCloseRequest = {},
    text = {
        Text(
            text = "Functionality not available",
            style = MaterialTheme.typography().body2
        )
    },
    confirmButton = {
        TextButton(
            onClick = {}
        ) {
            Text(text = "CLOSE")
        }
    }
)
```

