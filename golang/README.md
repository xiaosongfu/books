
---

// 类型别名
type xxx int
type xxx string
type xxx []int
type xxx map[string]int

// 函数类型
type xxx func(param1 type, param2 type) (out1 type)

// struct 类型
type xxx struct {}

// interface 类型
type xxx interface {}

---

x := [3]int{1,3,4}

x := []int{1,3,4}

x := map[int]string{1 : "xx"}

structXx := structXx{x: 3, y: 5} // structXx 是一个有 x 和 y 属性的结构体

---

* 如果一个 method 的 receiver 是 *T 类型，是可以直接使用 T 类型的变量直接调用该方法的，而不需要 &t 取地址后再调用该方法。
* 如果一个 method 的 receiver 的 T 类型，是可以直接使用 *T 类型的变量直接调用该方法的，而不需要 *t 取值后再调用该方法。

所有这些都由 go 自动处理！！！

---

