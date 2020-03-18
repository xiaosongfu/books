## 1. 源码

```
@Stable
data class LayoutHeight(val height: Dp): LayoutModifier by SizeModifier(DpConstraints.fixedHeight(height)) {
}
```

## 2. 使用

```
val sizeModifier = LayoutHeight.Min(180.dp) + LayoutWidth.Fill
Container(modifier = sizeModifier) {
    Clip(shape = RoundedCornerShape(4.dp)) {
        val imageModifier = ImagePainter(image).toModifier(scaleFit = ScaleFit.FillHeight)
        Box(modifier = sizeModifier + imageModifier)
    }
}
```

