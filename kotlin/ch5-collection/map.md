Map 的默认实现 – LinkedHashMap – 迭代 Map 时保留元素插入的顺序。 反之，另一种实现 – HashMap – 不声明元素的顺序。


## 创建 Map

Map 的键和值以 `Pair` 对象传递，通常使用中缀函数 `to` 创建：

```
val numbersMap = mapOf("key1" to 1, "key2" to 2, "key3" to 3, "key4" to 1)
```


## 遍历 Map

```
for ((k, v) in map) {
    println("$k -> $v")
}
```
