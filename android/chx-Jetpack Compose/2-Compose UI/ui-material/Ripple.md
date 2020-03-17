## 1. 源码

```
@Composable
fun Ripple(
    bounded: Boolean,
    radius: Dp? = null,
    color: Color? = null,
    enabled: Boolean = true,
    clock: AnimationClockObservable = AnimationClockAmbient.current,
    children: @Composable() () -> Unit
) {
    val density = DensityAmbient.current
    val state = remember { RippleState() }
    val theme = RippleThemeAmbient.current

    OnChildPositioned(onPositioned = { state.coordinates = it }) {
        PressIndicatorGestureDetector(
            onStart = { position ->
                if (enabled && transitionsEnabled) {
                    state.handleStart(position, theme.factory, density, bounded, radius, clock)
                }
            },
            onStop = { state.handleFinish(false) },
            onCancel = { state.handleFinish(true) },
            children = children
        )
    }

    Recompose { recompose ->
        state.recompose = recompose
        val finalColor = (color ?: theme.defaultColor()).copy(alpha = theme.opacity())
        Draw { canvas, _ ->
            if (state.effects.isNotEmpty()) {
                val position = state.coordinates!!.parentCoordinates
                    ?.childToLocal(state.coordinates!!, PxPosition.Origin) ?: PxPosition.Origin
                canvas.translate(position.x.value, position.y.value)
                state.effects.forEach { it.draw(canvas, finalColor) }
                canvas.translate(-position.x.value, -position.y.value)
            }
        }
    }

    onDispose {
        state.effects.forEach { it.dispose() }
        state.effects.clear()
        state.currentEffect = null
    }
}
```

## 2. 使用

名词：波纹，涟漪，波，涟，涞，漪
动词：涟漪，荡漾，涟，漾，涞，渼

用它包裹的元素在点击时会有符合材料设计规范的波纹效果。

```

```

