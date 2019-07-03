## foreach 循环

```
val items = listOf("apple", "banana", "kiwifruit")
for (index in items.indices) {
    println("item at $index is ${items[index]}")
}
```

遍历 map/pair型list

```
for ((k, v) in map) {
    println("$k -> $v")
}
```
