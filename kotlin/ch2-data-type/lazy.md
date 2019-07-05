使用懒加载，可以省去昂贵的属性初始化的成本直到它们真正需要。计算值然后保存并为了未来的任何时候的调用。

```
val preference: String by lazy {
    sharedPreferences.getString(key)
}
```
