## TabBar & TabBarView & Tab


```
TabBar(
    tabs: [
        Tab(icon: Icon(Icons.directions_car)),
        Tab(icon: Icon(Icons.directions_transit)),
        Tab(icon: Icon(Icons.directions_bike)),
    ],
),
```


```
TabBarView(
  children: [
    Icon(Icons.directions_car),
    Icon(Icons.directions_transit),
    Icon(Icons.directions_bike),
  ],
);
```


## TabController & DefaultTabController

为了使 tabs 工作，我们需要保持选定的 tab 和内容部分同步。这是TabController的工作。

我们可以手动创建 TabController 或使用 DefaultTabController。使用 DefaultTabController 是最简单的方式，因为它将为我们创建一个 TabController 并使其可供所有后代 Widgets 使用。

默认情况下，TabBar 会在 Widget 树中查找最近的 DefaultTabController。如果您手动创建 TabController，则需要将其传递给 TabBar。

TabBar 可以放在这些位置：

* Scaffold.bottomNavigationBar
* AppBar.bottom

```
DefaultTabController(
  // The number of tabs / content sections we need to display
  length: 3,
  child: // See the next step!
);
```

---

> 一个完整的例子

```
import 'package:flutter/material.dart';

void main() {
  runApp(TabBarDemo());
}

class TabBarDemo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: DefaultTabController(
        length: 3,
        child: Scaffold(
          appBar: AppBar(
            bottom: TabBar(
              tabs: [
                Tab(icon: Icon(Icons.directions_car)),
                Tab(icon: Icon(Icons.directions_transit)),
                Tab(icon: Icon(Icons.directions_bike)),
              ],
            ),
            title: Text('Tabs Demo'),
          ),
          body: TabBarView(
            children: [
              Icon(Icons.directions_car),
              Icon(Icons.directions_transit),
              Icon(Icons.directions_bike),
            ],
          ),
        ),
      ),
    );
  }
}
```

---

Working with Tabs：https://flutter.dev/docs/cookbook/design/tabs