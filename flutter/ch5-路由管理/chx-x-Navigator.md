## Navigator

和Android相似，您可以在AndroidManifest.xml中声明您的Activities，在Flutter中，您可以将具有指定Route的Map传递到顶层MaterialApp实例

```
void main() {
  runApp(new MaterialApp(
    home: new MyAppHome(), // becomes the route named '/'
    routes: <String, WidgetBuilder> {
      '/a': (BuildContext context) => new MyPage(title: 'page A'),
      '/b': (BuildContext context) => new MyPage(title: 'page B'),
      '/c': (BuildContext context) => new MyPage(title: 'page C'),
    },
  ));
}
```

然后，您可以通过Navigator来切换到命名路由的页面。

```
Navigator.of(context).pushNamed('/b');
```


## 传递和接收参数


## 获取返回值

```
Map coordinates = await Navigator.of(context).pushNamed('/location');
```

```
Navigator.of(context).pop({"lat":43.821757,"long":-79.226392});
```