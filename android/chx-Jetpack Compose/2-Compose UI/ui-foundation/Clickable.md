## 1. 源码

```
@Composable
fun Clickable(
    onClick: (() -> Unit)? = null,
    onClickLabel: String? = null,
    consumeDownOnStart: Boolean = false,
    children: @Composable() () -> Unit
) {
    Semantics(
        container = true,
        properties = {
            enabled = (onClick != null)
            if (onClick != null) {
                onClick(action = onClick, label = onClickLabel)
            }
        }
    ) {
        PressReleasedGestureDetector(
            onRelease = onClick,
            consumeDownOnStart = consumeDownOnStart,
            children = children
        )
    }
}
```

## 2. 使用

```
Card(modifier = modifier, shape = RoundedCornerShape(4.dp)) {
    Ripple(bounded = true) {
        Clickable(onClick = {
            navigateTo(Screen.Article(post.id))
        }) {
            Column(modifier = cardSize) {
            }
        }
    }
}
```
