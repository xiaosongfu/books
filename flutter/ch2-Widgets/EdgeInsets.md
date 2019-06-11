## 


EdgeInsets.zero


## 1. EdgeInsets.all(double value)

同时指定上下左右为同一个值。

```
const EdgeInsets.all(double value)
    : left = value,
      top = value,
      right = value,
      bottom = value;
```

## 2. EdgeInsets.only({this.left = 0.0, this.top = 0.0, this.right = 0.0, this.bottom = 0.0})

可以单独指定某一个方向的值。

```
const EdgeInsets.only({
    this.left = 0.0,
    this.top = 0.0,
    this.right = 0.0,
    this.bottom = 0.0
  });
```

## 2. EdgeInsets.symmetric({double vertical = 0.0, double horizontal = 0.0,})

上和下对称，左和右对称。通过指定 vertical 或/和 horizontal 来设置上下、左右的值。

```
const EdgeInsets.symmetric({
    double vertical = 0.0,
    double horizontal = 0.0,
  }) : left = horizontal,
       top = vertical,
       right = horizontal,
       bottom = vertical;
```

## 2. EdgeInsets.fromLTRB(this.left, this.top, this.right, this.bottom)

通过指定左上角和右下角来设置值。

```
const EdgeInsets.fromLTRB(this.left, this.top, this.right, this.bottom);
```

## 2. EdgeInsets.fromWindowPadding(...)

```
EdgeInsets.fromWindowPadding(ui.WindowPadding padding, double devicePixelRatio)
    : left = padding.left / devicePixelRatio,
      top = padding.top / devicePixelRatio,
      right = padding.right / devicePixelRatio,
      bottom = padding.bottom / devicePixelRatio;
```