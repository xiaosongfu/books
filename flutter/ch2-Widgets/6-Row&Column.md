## Flex

由 `final Axis direction` 来控制方向。

```
enum Axis {
  horizontal,
  vertical,
}
```
有2个子类：Row 和 Column。

## Row

Row 继承自 Flex，方向为水平方向：`direction: Axis.horizontal`

## Column

Row 继承自 Flex，方向为垂直方向：`direction: Axis.vertical`

`final MainAxisAlignment mainAxisAlignment`： 主轴的对其方式
`final CrossAxisAlignment crossAxisAlignment`：交叉轴的对其方式

MainAxisAlignment CrossAxisAlignment 见 `对齐.md`