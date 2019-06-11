## log 打印

* Log() Logf() : 普通的打印日志
* Error() Errorf() : 打印日志并调用 Fail() 方法
* Fatal() Fatalf() : 打印日志并调用 FailNow() 方法

## Fail() FailNow() Failed()

* FailNow() : 标记当前测试已经失败，并调用 runtime.Goexit() 来停止执行
* Fail() : 标记测试失败，但是会继续执行
* Failed() : 返回当前测试是否失败了

## Skip() Skipf() SkipNow() Skiped()

* SkipNow() : 标记当前测试已经被跳过，并调用 runtime.Goexit() 来停止执行
* Skip() 和 SKipf() : 都是打印一条 log 后执行 SkipNow()
* Skiped() : 返回当前测试是否被跳过了

## Helper()

标记当前函数是一个 Helper 函数，这样当发生错误的时候，报告的错误发生的代码行数不会是 该 Helper 函数的 代码位置。而是真正的测试函数的代码位置。

## Name()

返回当前测试的名称。
