

```
// 绘制一个矩形
@Composable
fun DrawBox() {
    Draw { canvas, parentSize ->
        val size = parentSize.width.value
        val outer = RRect(...).withRadius(Dp(2))

        canvas.drawRoundRect(outer, paint)
    }
}


// 绘制一个勾
@composable
fun DrawCheck() {
    Draw { canvas, parentSize ->
        val crossPoint = Offset(...)
        val leftBranch = Offset(...)
        val rightBranch = Offset(...)

        canvas.drawLine(crossPoint, leftBranch, paint)
        canvas.drawLine(crossPoint, rightBranch, paint)
    }
}
```
