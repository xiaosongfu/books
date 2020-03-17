## 1. 源码

```

```

## 2. 使用

先定义可组合函数：

```
@Composable
@GenerateView
fun Greeting(name: String) {
    / * ... */
}
```

会为 Greeting 可组合函数生成 GreetingView，这个 GreetingView 就可以在 xml 布局中使用了：

```
<GreetingView
   android:id="@+id/greeting"
   app:name="@string/greeting_name" />
```

```
val greeting: GreetingView = findViewById(R.id.greeting)
greeting.setName("Jim")
```
