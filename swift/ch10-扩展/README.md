

使用 extension 来为现有的类型添加功能，比如新的方法和计算属性。你可以使用扩展让某个在别处声明的类型来遵守某个协议，这同样适用于从外部库或者框架引入的类型。


```
// 给 Double 类型添加 absoluteValue 属性扩展
extension Double {
    var absoluteValue: Double {
        get {
            if self >= 0 {
                return self
            } else {
                return -self
            }
        }
    }
}
```

