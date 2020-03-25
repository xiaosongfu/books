## Lambda 表达式与匿名函数

* lambda 表达式: `{ a, b -> a + b }`
* 匿名函数: `fun(s: String): Int { return s.toIntOrNull() ?: 0 }`



lambda 表达式语法缺少指定函数返回类型的能力，如果确实需要显式指定，可以使用匿名函数 。

## TODO()：将代码标记为不完整

Kotlin 的标准库有一个 TODO() 函数，该函数总是抛出一个 NotImplementedError。 其返回类型为 Nothing，因此无论预期类型是什么都可以使用它。 还有一个接受原因参数的重载：

```
fun calcTaxes(): BigDecimal = TODO("Waiting for feedback from accounting")
```
