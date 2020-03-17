## 1. 源码

```
@Composable
fun FixedSpacer(width: Dp, height: Dp) {
    ConstrainedBox(constraints = DpConstraints.tightConstraints(width, height)) {
        // no children as we only need space
    }
}

/**
 * Component that represents an empty space with fixed width and zero height.
 *
 * @param width width of the empty space
 */
@Composable
fun WidthSpacer(width: Dp) {
    FixedSpacer(width = width, height = 0.dp)
}

/**
 * Component that represents an empty space with fixed height and zero width.
 *
 * @param height height of the empty space
 */
@Composable
fun HeightSpacer(height: Dp) {
    FixedSpacer(height = height, width = 0.dp)
}
```

## 2. 使用

