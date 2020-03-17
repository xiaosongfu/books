## 1. 源码

```
@Composable
fun Text(
    text: String,
    modifier: Modifier = Modifier.None,
    style: TextStyle? = null,
    softWrap: Boolean = DefaultSoftWrap,
    overflow: TextOverflow = DefaultOverflow,
    maxLines: Int = DefaultMaxLines,
    onTextLayout: (TextLayoutResult) -> Unit = {}
) {
    Text(
        text = AnnotatedString(text),
        modifier = modifier,
        style = style,
        softWrap = softWrap,
        overflow = overflow,
        maxLines = maxLines,
        onTextLayout = onTextLayout
    )
}
```

## 2. 使用