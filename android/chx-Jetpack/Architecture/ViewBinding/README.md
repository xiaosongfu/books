
* findViewById
* Butter Knife(Kotter Knife)
* Kotlin Android Extensions
* Data Binding
* View Binding

参考：[你好, View Binding! 再次再见, findViewById!](https://mp.weixin.qq.com/s/iNBj1dYT5g5dE7oIaL5BBA)

---

View Binding 是一项使你能更轻松地编写与视图交互的代码的功能. 在模块中启用 View Binding 后, 它会为该模块中存在的每一个 XML 文件生成一个对应的绑定类(binding class). 绑定类的实例包含了对应布局中所有具有 ID 的 view 的直接引用.

大多数情况下, View Binding 可以替换 findViewById.

View Binding 第一次出现是在 2019 年的 Google I/O 大会 What's New in Android (Google I/O'19) 演讲.

## 1. 开启 View Binding

View Binding 可以逐模块(module)开启。

```
android {
  ...
  buildFeatures {
      viewBinding = true
  }
}
```

如果想要在生成 binding class 时忽略某个布局文件, 我们需要在该布局文件的根元素添加 `tools:viewBindingIgnore="true"` 属性.

```
<LinearLayout
      ...
      tools:viewBindingIgnore="true" >
  ...
</LinearLayout>
```

## 使用方法

和 Data Binding 一样, View Binding 会将 XML 文件的下划线风格的名称转换生成一个驼峰风格并以 Binding 结尾的 binding class.

例如我们有个 result_profile.xml 布局文件:

```
<LinearLayout ... >
  <TextView android:id="@+id/name" />
  <ImageView android:cropToPadding="true" />
  <Button android:id="@+id/button"
      android:background="@drawable/rounded_button" />
</LinearLayout>
```

生成的 binding class 的名称就是 ResultProfileBinding. 这个类有两个字段: 一个叫 name 的 TextView 和一个叫 button 的 Button, 布局文件中的 ImageView 因为没有 ID, 所以 binding class 中没有对其的引用.

每一个 binding class 都包含了一个 getRoot() 的方法, 提供了一个相应布局文件的根 view 的直接引用. 在上面的例子中, ResultProfileBinding 类中的 getRoot()方法返回了根 view LinearLayout.

我们可以调用 inflate() 静态方法来获取生成的 binding class 的实例. 通常来说, 你需要调用 setContentView() 方法, 将生成类的根 view 作为参数传递, 作为屏幕上的内容. 在上面的例子中, 我们可以在 activity 中调用 ResultProfileBinding.inflate().

```
privatelateinitvar binding: ResultProfileBinding

@Override
fun onCreate(savedInstanceState: Bundle) {
  super.onCreate(savedInstanceState)
  binding = ResultProfileBinding.inflate(layoutInflater)
  setContentView(binding.root)
}
```

然后就可以通过 binding class 引用任何 view:

```
binding.name.text = viewModel.name
binding.button.setOnClickListener { viewModel.userClicked() }
```
