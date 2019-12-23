* 示例文件要求
* 示例方法签名要求
* `Output:` 和 `Unordered output:`

---

## 示例文件要求

示例文件必须以 "_test.go" 结尾，但通常命名为 `example_test.go`。

## 示例方法签名要求

方法需要以 Example 开头，但是对参数没有要求，比如：`func ExampleXxx() {}` 或 `func ExampleXxx(num int) {}`

## `Output:` 和 `Unordered output:`

```
func ExampleSalutations() {
    fmt.Println("hello, and")
    fmt.Println("goodbye")
    // Output:
    // hello, and
    // goodbye
}
```

```
func ExamplePerm() {
    for _, value := range Perm(4) {
        fmt.Println(value)
    }
    // Unordered output: 
    // 4
    // 2
    // 1
    // 3
    // 0
}
```

Example 函数如果没有 output 注释，则只会编译，不会运行。

## Example 代码会作为测试的一部分被检查

这些 Example 代码会作为测试的一部分被检查。例如：

```
// Add takes two integers and returns the sum of them
func Add(x, y int) int {
    return x + y
}
```

```
func TestAdder(t *testing.T) {
    got := Add(2, 2)
    want := 4
    if got != want {
        t.Errorf("expected '%d' but got '%d'", want, got)
    }
}
```

```
func ExampleAdd() {
    sum := Add(1, 5)
    fmt.Println(sum)
    // Output:
    // 6
}
```

> 也可以将 Output 写在一行：`Output: 6`

```
$ go test -v
=== RUN   TestAdder
--- PASS: TestAdder (0.00s)
=== RUN   ExampleAdd
--- PASS: ExampleAdd (0.00s)
```
