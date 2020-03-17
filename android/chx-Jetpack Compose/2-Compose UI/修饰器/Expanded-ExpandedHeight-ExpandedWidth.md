## 1. 源码

```
/**
 * A layout modifier that forces a target component to fill all available width.
 *
 * Example usage:
 * @sample androidx.ui.layout.samples.SimpleExpandedWidthModifier
 */
val ExpandedWidth: LayoutModifier = object : LayoutModifier {
    override fun DensityScope.modifyConstraints(constraints: Constraints): Constraints {
        return if (constraints.hasBoundedWidth) {
            constraints.withTight(width = constraints.maxWidth)
        } else {
            constraints
        }
    }
}

/**
 * A layout modifier that forces a a target component to fill all available height.
 *
 * Example usage:
 * @sample androidx.ui.layout.samples.SimpleExpandedHeightModifier
 */
val ExpandedHeight: LayoutModifier = object : LayoutModifier {
    override fun DensityScope.modifyConstraints(constraints: Constraints): Constraints {
        return if (constraints.hasBoundedHeight) {
            constraints.withTight(height = constraints.maxHeight)
        } else {
            constraints
        }
    }
}

/**
 * A layout modifier that forces a target component to fill all available space.
 *
 * Example usage:
 * @sample androidx.ui.layout.samples.SimpleExpandedModifier
 */
val Expanded: LayoutModifier = object : LayoutModifier {
    override fun DensityScope.modifyConstraints(constraints: Constraints): Constraints {
        return if (constraints.hasBoundedWidth && constraints.hasBoundedHeight) {
            Constraints.tightConstraints(constraints.maxWidth, constraints.maxHeight)
        } else {
            constraints
        }
    }
}
```

## 2. 使用

