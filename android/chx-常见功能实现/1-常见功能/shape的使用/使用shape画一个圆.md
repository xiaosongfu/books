## 先新建一个shape资源

```
<?xml version="1.0" encoding="utf-8"?>
<shape xmlns:android="http://schemas.android.com/apk/res/android"
    android:shape="rectangle">
    <!-- 填充的颜色 -->
    <solid android:color="@android:color/transparent" />
    <!-- 设置按钮的四个角为弧形 -->
    <!-- android:radius 弧形的半径 -->
    <corners android:radius="30dip" />
    <!--边框的宽度及颜色-->
    <stroke android:width="2px" android:color="#388e3c" />
</shape>
```

## 设置Button的background

```
<Button
    android:layout_width="fill_parent"
    android:layout_height="wrap_content"
    android:text="绑定手环"
    android:background="@drawable/shape_button"
    android:layout_alignParentBottom="true"/>
```
