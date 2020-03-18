

---

在 Swift 中，struct、enum、tuple 都是值类型，平时使用的 Int、Double、Float、String、Array、Set、Dictionary 等其实都是用 struct 实现的，所以他们也都是值类型。


---

字符串插值

贯穿
完备

解包

参数标签

枚举类型的原始值和关联值

---

断言函数
先决条件
致命错误

---

if 语句与强制解析
可选绑定
隐式解析可选类型

强制解析

---


??  |-> 空合运算符 `let informalGreeting = "Hi \(nickName ?? fullName)"` -> 和 kotlin 的 `?:` 空值合并运算符一样
?.  |-> `let res = foo?.abc()` -> 整个表达式的值也是一个可选值

..< |-> 左闭右开 包含第一个值而不包括最后一个值
... |-> 左闭右闭

单侧区间 names[2...] names[...2] names[..<2]

try? |-> `let res = try? foo.abc()` -> 如果函数抛出错误，该错误会被抛弃并且结果为 nil。否则，结果会是一个包含函数返回值的可选值。

