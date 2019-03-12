## 测试文件要求

文件必须以 "xxx_test.go" 结尾。

但是并不要求 `xxx.go` 文件的测试文件一定为 `xxx_test.go` 文件，go 规范没有明确的要求，但是通常都是让它们保持一样，对应起来。

## 测试方法要求

方法签名必须为 `func BenchmarkXxx(b *testing.B) {}`


每次执行都会跑 b.N 次。

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