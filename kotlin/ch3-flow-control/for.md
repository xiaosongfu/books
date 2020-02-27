## foreach 循环

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

遍历 map：

```
for ((k, v) in map) {
    println("$k -> $v")
}
```
