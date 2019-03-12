## 测试命令

`go test -v` 加上 -v 参数打印详细信息。

示例输出：

```
$ go test -v
=== RUN    TestXxx

--- PASSS: TestXxx
--- FAIL:  TestXxx
--- SKIP:  TestXxx

PASS
ok github.com/user/repo  0.12s
```

## 测试文件要求

文件必须以 "xxx_test.go" 结尾。

但是并不要求 `xxx.go` 文件的测试文件一定为 `xxx_test.go` 文件，go 规范没有明确的要求，但是通常都是让它们保持一样，对应起来。

## 测试方法要求

方法签名必须为 `func TestXxx(t *testing.T) {}`

## 与 Junit 等的差别

go 的测试并不像 Java 之类的，会使用 `assert.Equal(...)` 方法，而是自行判断值是否相等，如果不等，则使用 `t.Errorf("")` 来告知测试框架当前测试 case 测试失败，如：

```
if res != nil {
    t.Errorf("return value is not nil")
}
```

## 著名的表格驱动测试

```
func TestReverse(t *testing.T) {
	cases := []struct {
		in, want string
	}{
		{"Hello, world", "dlrow ,olleH"},
		{"Hello, 世界", "界世 ,olleH"},
		{"", ""},
	}
	for _, c := range cases {
		got := Reverse(c.in)
		if got != c.want {
			t.Errorf("Reverse(%q) == %q, want %q", c.in, got, c.want)
		}
	}
}
```

## t.SkipNow() 跳过当前测试 case

如果想跳过当前测试 case，可以使用 `t.SkipNow()` 方法，该方法为跳过当前测试 case，并按照 PASS 处理当前测试 case，然后继续下一个测试 case。

该方法必须在测试方法的第一行！

```
func TestXxx(t *testing.T) {
    t.SkipNow()
    
    //...
}
```

## t.Run(...) 运行子测试

运行子测试，也即是控制测试 case 的执行顺序。

```
func TestXxx(t *testing.T) {
    t.Run("a1", func(t *testing.T){ ... }
    t.Run("a2", func(t *testing.T){ ... }
}
```

这个可以用来分组测试 case，比如：

```
func testA1(t *testing) {}
func testA2(t *testing) {}
func testAGroup(t *testing) {
    t.Run("a1", testA1)
    t.Run("a2", testA2)
}

func testB1(t *testing) {}
func testB1(t *testing) {}
func testBGroup(t *testing) {
    t.Run("b1", testB1)
    t.Run("b2", testB2)
}
```

> 注意：testA1 这些方法必须小写开头，不然就会被执行两次！

输出如下：

```
fuxiaosongs-Air:govideocourse fuxiaosong$ go test -v
=== RUN   TestAGroup
=== RUN   TestAGroup/a1
=== RUN   TestAGroup/a2
--- PASS: TestAGroup (0.00s)
    --- PASS: TestAGroup/a1 (0.00s)
    --- PASS: TestAGroup/a2 (0.00s)
=== RUN   TestBGroup
=== RUN   TestBGroup/b1
=== RUN   TestBGroup/b2
--- PASS: TestBGroup (0.00s)
    --- PASS: TestBGroup/b1 (0.00s)
    --- PASS: TestBGroup/b2 (0.00s)
PASS
ok      _/Users/fuxiaosong/dev/project/go/go.xiaosongfu.com/govideocourse       0.007s
```

## TestMain

使用 TestMain 作为初始化 test，并且使用 m.Run() 来调用其他 test  可以完成一些需要初始化操作的 testing，比如数据库连接，文件打开等。

```
func TestMain(m *testing.M) {
    fmt.Println("HHH")
    m.Run()
}
```

如果没有在 TestMain 中调用 `m.Run()`，则除了 TestMain，其他的测试都不会被执行。 