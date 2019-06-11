## SnackBar

简单使用：

```
final snackBar = SnackBar(content: Text('Yay! A SnackBar!'));
```

使用 Scaffold 的方法来显示：

```
// Find the Scaffold in the Widget tree and use it to show a SnackBar
Scaffold.of(context).showSnackBar(snackBar);
```

使用 action 为用户提供额外的操作：

```
final snackBar = SnackBar(
  content: Text('Yay! A SnackBar!'),
  action: SnackBarAction(
    label: 'Undo',
    onPressed: () {
      // Some code to undo the change!
    },
  ),
);
```

## SnackBarAction

```
/// The button label color. If not provided, defaults to [accentColor].
final Color textColor;

/// The button disabled label color. This color is shown after the
/// [snackBarAction] is dismissed.
final Color disabledTextColor;

/// The button label.
final String label;

/// The callback to be called when the button is pressed. Must not be null.
final VoidCallback onPressed;
```

---

Displaying SnackBars：https://flutter.dev/docs/cookbook/design/snackbars