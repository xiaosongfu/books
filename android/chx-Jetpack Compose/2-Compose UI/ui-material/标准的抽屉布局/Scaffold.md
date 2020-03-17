## 1. 源码

```
@Composable
fun Scaffold(
    scaffoldState: ScaffoldState = remember { ScaffoldState() },
    topAppBar: @Composable() (() -> Unit)? = null,
    bottomAppBar: @Composable() ((FabConfiguration?) -> Unit)? = null,
    floatingActionButton: @Composable() (() -> Unit)? = null,
    floatingActionButtonPosition: FabPosition = FabPosition.End,
    drawerContent: @Composable() (() -> Unit)? = null,
    bodyContent: @Composable() (Modifier) -> Unit
) {
}
```

## 2. 使用

* topAppBar
* bottomAppBar
* floatingActionButton
* floatingActionButtonPosition
* drawerContent
* bodyContent


