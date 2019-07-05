## foreach 循环

```
val items = listOf("apple", "banana", "kiwifruit")
for (index in items.indices) {
    println("item at $index is ${items[index]}")
}
```

遍历 map：

```
for ((k, v) in map) {
    println("$k -> $v")
}
```

遍历 array：

```
for (i in array.indices) {
    println(array[i])
}
```

```
for ((index, value) in array.withIndex()) {
    println("the element at $index is $value")
}
```
