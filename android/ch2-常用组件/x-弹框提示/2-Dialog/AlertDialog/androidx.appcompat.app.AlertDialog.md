## androidx.appcompat.app.AlertDialog

```
val alertDialog = AlertDialog.Builder(this)
        .setTitle("退出")
        .setMessage("您确定要退出录制吗？")
        .setPositiveButton("取消") { _: DialogInterface, _: Int -> }
        .setNegativeButton("确定") { _: DialogInterface, _: Int -> }
        .setCancelable(true)
        .create()
alertDialog.show()

// 隐藏
alertDialog.dismiss()
```

效果图：

![]()
