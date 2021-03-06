# 变量

 Rust 的变量必须先声明后使用。

`let 变量名: 类型 = 值;`

声明的变量默认是 “只读” 的，即 “不可变的变量”，比如：

```
fn main() {
    let x = 5;
    x = 10;
}
```

会得到 "re-assignment of immutable variable 'x'" 这样的编译错误。

要让变量是可写的，需要使用 `mut` 关键字：

`let mut 变量名: 类型 = 值;`

Rust 中，每个变量都必须被初始化后才能被使用，使用未初始化的变量会报错，如 “error: use of possibly uninitialized variable: 'x'”，编译器会帮我们做一个执行路径的静态分析，确保变量在使用前一定被初始化。

当然，定义了变量，没有初始化，也没有使用是没有问题的。

### 1.1 变量遮蔽

```
fn main() {
    let x = "hello";
    println!("x is {}", x);
    let x = 32;
}
```

可以编译通过。

但是这两个 x 代表的内存空间完全不同，类型也完全不同，他们实际上是两个不同的变量。从第5行开始，一直到这个代码块结束，都没有办法在访问第一个 x 变量了，因为它已经被遮蔽了。

## 1.2 类型推断

## 1.3 类型别名




# 2.变量