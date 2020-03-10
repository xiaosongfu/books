Android KTX使得显示toast消息的方式变得更加简单和简单.Kotlin代码：

```
Toast.makeText(context, R.string.toast_message, Toast.LENGTH_SHORT).show()
```

Android KTX代码：

```
toast(R.string.toast_message)
```
