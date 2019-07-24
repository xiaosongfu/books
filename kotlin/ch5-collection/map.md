Map 的默认实现 – LinkedHashMap – 迭代 Map 时保留元素插入的顺序。 反之，另一种实现 – HashMap – 不声明元素的顺序。


遍历 map

```
for ((k, v) in map) {
    println("$k -> $v")
}
```
