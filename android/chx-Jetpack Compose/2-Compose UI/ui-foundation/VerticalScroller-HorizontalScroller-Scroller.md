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

@Composable
fun HorizontalScroller(
    scrollerPosition: ScrollerPosition = ScrollerPosition(),
    modifier: Modifier = Modifier.None,
    isScrollable: Boolean = true,
    child: @Composable() () -> Unit
) {
    Scroller(scrollerPosition, modifier, false, isScrollable, child)
}

@Composable
private fun Scroller(
    scrollerPosition: ScrollerPosition,
    modifier: Modifier,
    isVertical: Boolean,
    isScrollable: Boolean,
    child: @Composable() () -> Unit
) {
    val direction =
        if (isVertical) DragDirection.Vertical else DragDirection.Horizontal
    Semantics(container = true, properties = {
        if (isScrollable) {
            ScrollTo(action = { x, y ->
                if (isVertical) {
                    scrollerPosition.scrollBy(y.value)
                } else {
                    scrollerPosition.scrollBy(x.value)
                }
            })
        }
    }) {
        Scrollable(
            scrollableState = scrollerPosition.scrollableState,
            dragDirection = direction,
            enabled = isScrollable
        ) {
            ScrollerLayout(
                scrollerPosition = scrollerPosition,
                onMaxPositionChanged = { scrollerPosition.maxPosition = it },
                modifier = modifier,
                isVertical = isVertical,
                child = child
            )
        }
    }
}
```

## 2. 使用

