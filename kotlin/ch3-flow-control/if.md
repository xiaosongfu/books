## if 语句

```
if (a < b) {
    max = b
}
```

## if 表达式

使用 if 作为表达式:

```
fun maxOf(a: Int, b: Int) = if (a > b) a else b
```


if的分支可以是代码块，最后的表达式作为该块的值：

```
val max = if (a > b) {
    print("Choose a")
    a
} else {
    print("Choose b")
    b
}
```

* Kotlin不包括传统的三元运算符，而是倾向于使用条件表达式。
* 如果你使用 if 作为表达式而不是语句（例如：返回它的值或者把它赋给变量），该表达式需要有 else 分支。
