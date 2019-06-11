### 

在Flutter中，添加触摸监听器有两种方法:

1. 如果Widget支持事件监听，则可以将一个函数传递给它并进行处理。例如，RaisedButton有一个onPressed参数

```
@override
Widget build(BuildContext context) {
  return new RaisedButton(
      onPressed: () {
        print("click");
      },
      child: new Text("Button"));
}
```

2. 如果Widget不支持事件监听，则可以将该Widget包装到GestureDetector中，并将处理函数传递给onTap参数：

```
class SampleApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Center(
      child: GestureDetector(
        child: FlutterLogo(
          size: 200.0,
        ),
        onTap: () {
          print("tap");
        },
      ),
    ));
  }
}
```

### 

使用 GestureDetector，可以监听多种手势，例如

* Tap
    * onTapDown
    * onTapUp
    * onTap
    * onTapCancel
* Double tap
    * onDoubleTap 用户快速连续两次在同一位置轻敲屏幕.
* 长按
    * onLongPress
* 垂直拖动
    * onVerticalDragStart
    * onVerticalDragUpdate
    * onVerticalDragEnd
* 水平拖拽
    * onHorizontalDragStart
    * onHorizontalDragUpdate
    * onHorizontalDragEnd