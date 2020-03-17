## 1. 源码

```
@MustBeDocumented
@Retention(AnnotationRetention.SOURCE)
@Target(
    AnnotationTarget.FUNCTION
)
annotation class Preview(
    val name: String = "",
    val group: String = "",
    @IntRange(from = 1) val apiLevel: Int = -1,
    val theme: String = "",
    // TODO(mount): Make this Dp when they are inline classes
    val widthDp: Int = -1,
    // TODO(mount): Make this Dp when they are inline classes
    val heightDp: Int = -1,
    val locale: String = "",
    @FloatRange(from = 0.01) val fontScale: Float = 1f
)
```

## 2. 使用

实时预览是一项 Android Studio 功能，您可以用它来在不同的方向、字体大小和主题背景方面测试和比较应用的可组合函数，而无需部署应用。

#### 预览函数的要求

预览函数的要求：
1. 使用 `@Preview` 和 `@Composable` 注解
2. 函数没有参数和返回值

#### 并排显示多个预览窗口

可以在一个 kt 文件中创建多个预览函数，他们将并排显示 IDE 的预览窗口中。

![](../../images/compose_preview.png)

这对于比较可组合函数的行为很有用，比如为可组合函数传递不同的参数以观察他们在行为上有哪些差异。

#### 给 `@Preview` 传递参数

还可以给 `@Preview` 传递参数来控制预览的样式，比如 `@Preview(name="MyPreview")` 这会改名预览的名称，heightDp、widthDp 可以控制预览的宽高；theme 可以控制预览主题。

* name
* group
* theme
* widthDp : 在呈现实时预览时，IDE 可以使用的最大宽度，以密度无关像素 (dp) 为单位。如果您想要在有限的屏幕尺寸上预览可组合函数，这会非常有用。
* heightDp : 在呈现实时预览时，IDE 可以使用的最大高度，以 dp 为单位。如果您想要在有限尺寸的屏幕上预览可组合函数，这会非常有用。
* locale
* fontScale : 字体相对于基本密度缩放比例 (1f) 的缩放比例。如果您想要针对不同的用户字体大小偏好设置测试可组合函数，这会非常有用。
