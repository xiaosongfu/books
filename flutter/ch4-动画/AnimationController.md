使用 AnimationController 类指定动画的运行方式。AnimationController 类允许您定义动画的重要特征，例如其持续时间和播放方向（正向或反向）。

创建 AnimationController 时，必须传递 vsync 参数。vsync 可防止屏幕外的动画消耗不必要的资源。


```
AnimationController animationController = AnimationController(vsync: this, duration: Duration(milliseconds: 2000));
```
