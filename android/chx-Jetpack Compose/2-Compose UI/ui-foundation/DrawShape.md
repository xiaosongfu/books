## 1. 源码

```
@Composable
fun DrawShape(shape: Shape, color: Color) {
    DrawShape(shape = shape, brush = remember(color) { SolidColor(color) })
}

/**
 * Draw the [shape] with the provided [brush].
 *
 * @param shape the [Shape] to draw.
 * @param brush the [Brush] to use for filling the shape.
 */
@Composable
fun DrawShape(shape: Shape, brush: Brush) {
    with(remember { DrawShapeCacheHolder() }) {
        lastShape = shape
        Draw { canvas, parentSize ->
            brush.applyTo(paint)
            lastParentSize = parentSize
            val outline =
                lastOutline ?: shape.createOutline(parentSize, this).also { lastOutline = it }
            canvas.drawOutline(outline, paint)
        }
    }
}
```

## 2. 使用

画一个实验 primary 颜色填充的圆形：

```
DrawShape(
    shape = CircleShape,
    color = MaterialTheme.colors().primary
)
```



