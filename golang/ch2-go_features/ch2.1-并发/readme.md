`ch := make(chan type, value)`

value = 0， channel 是无缓冲阻塞读写的，
value > 0， channel 是有缓冲的，是非阻塞的，直到写满 value 个元素后才阻塞写入。

---

主 goroutine 使用无缓冲的 channel 时，写入后就阻塞了，要么就用有缓冲的 channel 避免阻塞，要么就用 go 程去实现。

---

> 不知道下面这些说法对不对！！！！！
* 主 goroutine 使用无缓冲的 channel 时，写入后就阻塞了；
* 但是只要是带缓冲的，比如有2个缓冲，写满2个也不阻塞，写第3个才阻塞；
* 非主 goroutine 使用无缓冲的 channel 时，写入后却不阻塞；

主 goroutine 阻塞后，如果没有其他 goruntine 了，则认为是 deadlock；
如果还有其他 goroutine，则等他们结束后再判断，如果主 goroutine 解除了阻塞，则正常结束；如果还是阻塞则认为是 deadlock。

`fatal error: all goroutines are asleep - deadlock!`

---