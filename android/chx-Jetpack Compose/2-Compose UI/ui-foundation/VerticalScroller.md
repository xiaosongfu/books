## 1. 源码

```
@Composable
fun VerticalScroller(
    scrollerPosition: ScrollerPosition = ScrollerPosition(),
    modifier: Modifier = Modifier.None,
    isScrollable: Boolean = true,
    child: @Composable() () -> Unit
) {
    Scroller(scrollerPosition, modifier, true, isScrollable, child)
}
```

## 2. 使用

