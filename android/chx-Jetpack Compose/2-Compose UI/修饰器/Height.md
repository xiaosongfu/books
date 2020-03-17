## 1. 源码

```
/**
 * A layout modifier that sets the exact height of the component.
 *
 * @sample androidx.ui.layout.samples.SimpleHeightModifier
 *
 * If the [Height] modifier's target layout is measured with constraints that do not allow the
 * specified height, the height will be coerced inside the incoming constraints.
 */
fun Height(value: Dp): LayoutModifier {
    require(value.isFinite()) { "Height value parameter should be finite." }
    return SizeModifier(DpConstraints.tightConstraintsForHeight(value))
}
```

## 2. 使用

