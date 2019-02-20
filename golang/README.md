

type xxx int
type xxx string
type xxx []int
type xxx map[string]int

type xxx struct {}

type xxx interface {}

> 总结：type xxx 一共有3中情况

---

x := [3]int{1,3,4}

x := map[int]string{
    1 : "xx",
    2 : "yy",
}

structXx := structXx{x: 3, y: 5} // structXx 是一个有 x 和 y 属性的结构体

> 总结：xxx{} 这种情况也有3种

---

如果一个 method 的 receiver 是 *T 类型，是可以直接使用 T 类型的变量直接调用该方法的，而不需要 &t 取地址后再调用该方法。

如果一个 method 的 receiver 的 T 类型，是可以直接使用 *T 类型的变量直接调用该方法的，而不需要 *t 取值后再调用该方法。

所有这些都由 go 自动处理！！！

---

