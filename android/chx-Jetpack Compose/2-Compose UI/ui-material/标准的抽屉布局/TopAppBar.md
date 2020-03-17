## 1. 源码

```
@Composable
fun TopAppBar(
    title: @Composable() () -> Unit,
    color: Color = MaterialTheme.colors().primarySurface,
    contentColor: Color = contentColorFor(color),
    elevation: Dp = TopAppBarElevation,
    navigationIcon: @Composable() (() -> Unit)? = null
) {
}
```

## 2. 使用

```
TopAppBar(
    title = {
        Text(
            text = "Published in: ${post.publication?.name}",
            style = MaterialTheme.typography().subtitle2
        )
    },
    navigationIcon = {
    }
)
```
