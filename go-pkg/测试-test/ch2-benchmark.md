* 测试文件要求
* 测试方法签名要求
* 测试命令
* b.N
* b.ResetTimer()

---

## 测试文件要求

文件必须以 "xxx_test.go" 结尾。

但是并不要求 `xxx.go` 文件的测试文件一定为 `xxx_test.go` 文件，go 规范没有明确的要求，但是通常都是让它们保持一样，对应起来。

## 测试方法签名要求

方法签名必须为 `func BenchmarkXxx(b *testing.B) {}`

每次执行都必须运行 b.N 次(The benchmark function must run the target code b.N times)。

```
func BenchmarkSample(b *testing.B) {
    for i := 0; i < b.N; i++ {
        // ...
    }
}
```

## 测试命令

需要使用 `-bench=.` flag：

```
go test -bench=.
```

注意：基准测试默认是顺序运行的。

## b.N

在执行过程中会根据实际 case 的执行时间是否稳定会增加 b.N 的次数已达到稳定状态。

所以需要注意被测试函数的执行时间一定要尽量稳定，下面的例子就是一个反例：

```
func errorSample(n int) n {
    for n > 0 {
        n--
    }
    
    return n
}

func BenchmarkErrorSample(b *testing.B) {
    for i := 0; i < b.N; i++ {
        errorSample(n)
    }
}
```

## b.ResetTimer()

如果测试方法里面需要做一些比较耗时的操作，则可以将 timer 重置：

```
func BenchmarkBigLen(b *testing.B) {
    big := NewBig()

    b.ResetTimer()

    for i := 0; i < b.N; i++ {
        big.Len()
    }
}
```
