* 测试命令
* 测试文件要求
* 测试方法签名要求
* 与 Junit 等的差别
* 著名的表格驱动测试
* t.SkipNow() 跳过当前测试 case
* t.Fail() 标记当前测试为失败
* t.Helper() 辅助函数
* t.Run(...) 运行子测试
* func TestMain(m *testing.M) 测试的起点和终点

---

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

## 测试方法签名要求

方法签名必须为 `func TestXxx(t *testing.T) {}`

## 与 Junit 等的差别

go 的测试并不像 Java 之类的，会使用 `assert.Equal(...)` 方法，而是自行判断值是否相等，如果不等，则使用 `t.Errorf("")` 来告知测试框架当前测试 case 测试失败，如：

```
if res != nil {
    t.Errorf("return value is not nil")
}
```

当然也可以借助第三方库来实现类型的用法，比如 `https://github.com/stretchr/testify/assert` 库，它的用法如下：

```
import (
  "testing"
  "github.com/stretchr/testify/assert"
)

func TestSomething(t *testing.T) {

  // assert equality
  assert.Equal(t, 123, 123, "they should be equal")

  // assert inequality
  assert.NotEqual(t, 123, 456, "they should not be equal")

  // assert for nil (good for errors)
  assert.Nil(t, object)

  // assert for not nil (good when you expect something)
  if assert.NotNil(t, object) {
    // now we know that object isn't nil, we are safe to make
    // further assertions without causing any errors
    assert.Equal(t, "Something", object.Value)
  }
}
```

## 著名的表格驱动测试

`tests tt want got`

```
func TestReverse(t *testing.T) {
	tests := []struct {
		in, want string
	}{
		{"Hello, world", "dlrow ,olleH"},
		{"Hello, 世界", "界世 ,olleH"},
		{"", ""},
	}
	for _, tt := range tests {
		got := Reverse(tt.in)
		if got != tt.want {
			t.Errorf("Reverse(%q) == %q, want %q", tt.in, got, c.want)
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

## t.Fail() 标记当前测试为失败

## t.Helper() 辅助函数

t.Helper() 需要告诉测试套件这个方法是辅助函数（helper）。通过这样做，当测试失败时所报告的行号将在函数调用中而不是在辅助函数内部。这将帮助其他开发人员更容易地跟踪问题。

```
func TestHello(t *testing.T) {
    assertCorrectMessage := func(t *testing.T, got, want string) {
        t.Helper()
        if got != want {
            t.Errorf("got '%s' want '%s'", got, want)
        }
    }

    t.Run("saying hello to people", func(t *testing.T) {
        got := Hello("Chris")
        want := "Hello, Chris"
        assertCorrectMessage(t, got, want)
    })

    t.Run("empty string defaults to 'world'", func(t *testing.T) {
        got := Hello("")
        want := "Hello, World"
        assertCorrectMessage(t, got, want)
    })
}
```

## t.Run(...) 运行子测试

```
func TestXxx(t *testing.T) {
    t.Run("a1", func(t *testing.T){ ... })
    t.Run("a2", func(t *testing.T){ ... })
}
```

* 运行子测试，可以用来控制测试 case 的执行顺序，可以将子测试 case 排序，按照自己需要的顺序来执行他们。
* 也可以用来对测试 case 进行分组，比如对同一个方法不同情况的测试可以分开为几个子测试方法，并用一个方法来统一运行他们。

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

## func TestMain(m *testing.M)：测试的起点和终点

使用 TestMain 作为初始化 test，并且使用 m.Run() 来执行其他 test。在该测试方法中可以完成一些初始化操作，比如数据库连接，文件打开等；同时也可以完成一些收尾工作，比如清空数据库、关闭文件等。

如果没有在 TestMain 中调用 `m.Run()`，则除了 TestMain，其他的测试都不会被执行。

> !!!! 一个 package 中只能有一个 TestMain 函数，并且这个包中的所有测试方法都受这个 TestMain 函数的管理，

下面的示例演示了在 TestMain(m *testing.M) 方法中先打开数据库连，然后清空表，然后执行其他测试方法，当测试方法都执行完成后再清空数据库并关闭数据库连接。

```
func TestMain(m *testing.M) {

    // 打开数据库连接
	database.OpenDBConnection()
	database.TestDBConnection()

	// 需要清空数据库
	truncateReposTable()

	fmt.Println("before ....")
	m.Run()
	fmt.Println("after ....")

	// 需要清空数据库
	truncateReposTable()

    // 关闭数据库连接
	database.CloseDBConnection()
}

func truncateReposTable() { //... }

func TestAllInFlow(t *testing.T) { //... }
```

执行结果：

```
$ go test -v
before ....
=== RUN   TestAllInFlow
--- PASS: TestAllInFlow (0.72s)
PASS
after ....
ok      go.xiaosongfu.com/releasebus/releasebus 1.153s
```

> !! `before ....` 和 `after ....` 分别在 `TestAllInFlow(t *testing.T)` 方法前后打印。
