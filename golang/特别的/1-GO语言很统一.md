## 声明类型

声明类型都是 `type 类型名称 类型字面量`，如：

```
type age int

type handler func(a, b int) (int, int)

type person struct {}

type car interface {}
```

## 使用类型

使用类型都是 `类型{}`，如：

```
a := [2]int{1, 2}

s := []int{1, 2, 3}

m := map[string]int{"a": 1, "b":2}

st := person{ name: "xsfu", age: 22}
```
