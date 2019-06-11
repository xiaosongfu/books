
![](../../images/ch2/TextField-class.png)

## TextField

xxx

## TextEditingController

有两个构造方法：

构造方法：

```
TextEditingController({ String text })
    : super(text == null ? TextEditingValue.empty : TextEditingValue(text: text));
```

fromValue 命名构造方法：

```
TextEditingController.fromValue(TextEditingValue value)
    : super(value ?? TextEditingValue.empty);
```

## InputDecoration

见 InputDecoration.md