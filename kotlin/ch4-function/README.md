## Lambda 表达式与匿名函数

* lambda 表达式: `{ a, b -> a + b }`
* 匿名函数: `fun(s: String): Int { return s.toIntOrNull() ?: 0 }`



lambda 表达式语法缺少指定函数返回类型的能力，如果确实需要显式指定，可以使用匿名函数 。

