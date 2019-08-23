使用 `func` 来声明一个函数，使用名字和参数来调用函数。使用 `->` 来指定函数返回值的类型

## 

## 函数是第一等类型

函数是第一等类型，这意味着函数可以作为另一个函数的返回值。

函数也可以当做参数传入另一个函数。



## 参数名称

默认情况下，函数使用它们的参数名称作为它们参数的标签，在参数名称前可以自定义参数标签，或者使用 _ 表示不使用参数标签。

```
func greet(_ person: String, on day: String, say: String) -> String {
    return "Hello \(person), today is \(day), \(say)."
}
greet("John", on: "Wednesday", say: "吃饭了")
```

## 


