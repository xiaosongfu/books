## 淡入淡出动画

```
class MyFadePage extends StatefulWidget {
  @override
  _MyFadePageState createState() {
    return _MyFadePageState();
  }
}

class _MyFadePageState extends State<MyFadePage> with TickerProviderStateMixin {
  AnimationController animationController;

  CurvedAnimation curvedAnimation;

  @override
  void initState() {
    super.initState();

    animationController = AnimationController(
        vsync: this, duration: Duration(milliseconds: 2000));

    curvedAnimation =
        CurvedAnimation(parent: animationController, curve: Curves.easeIn);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("Anim test")),
      body: Center(
        child: Container(
          child: FadeTransition(
            opacity: curvedAnimation,
            child: FlutterLogo(
              size: 100.0,
            ),
          ),
        ),
      ),
      floatingActionButton: FloatingActionButton(
        child: Icon(Icons.brush),
        onPressed: () {
          animationController.forward();
        },
      ),
    );
  }
}
```
