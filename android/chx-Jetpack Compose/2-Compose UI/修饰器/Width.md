## 1. 源码

```
/**
 * A layout modifier that sets the exact width of the component.
 *
 * @sample androidx.ui.layout.samples.SimpleWidthModifier
 *
 * If the [Width] modifier's target layout is measured with constraints that do not allow the
 * specified width, the width will be coerced inside the incoming constraints.
 */
fun Width(value: Dp): LayoutModifier {
    require(value.isFinite()) { "Width value parameter should be finite." }
    return SizeModifier(DpConstraints.tightConstraintsForWidth(value))
}
```

## 2. 使用

