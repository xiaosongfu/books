## Drawer

child 可以使用任意的 Widget，比如 Column、ListView 等。但是使用 ListView 可以在内容超出屏幕显示范围是可以滑动。

drawer 和 endDrawer 分别是从左边和右边滑出来的菜单。

当用户打开抽屉时，Flutter 将抽屉添加到导航栈中。因此，要关闭抽屉，我们可以调用 `Navigator.pop(context)`。

```
Scaffold(
    appBar: AppBar(title: Text("")),
    drawer: Drawer(
        child: ListView(
            padding: EdgeInsets.zero,
            children: <Widget>[
            DrawerHeader(
                decoration: BoxDecoration(
                    color: Colors.blue,
                ),
                child: Text("DrawerHeader"),
            ),
            ListTile(
                title: Text("ListTile1"),
                onTap: () {
                    Navigator.pop(context);
                },
            ),
            ListTile(
                title: Text("ListTile2"),
                onTap: () {
                    Navigator.pop(context);
                },
            ),
            ],
        ),
    ),
```

## DrawerHeader

```
DrawerHeader(
    decoration: BoxDecoration(
        color: Colors.blue,
    ),
    child: Text("DrawerHeader"),
),
```

---

Add a Drawer to a screen：https://flutter.dev/docs/cookbook/design/drawer