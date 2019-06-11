```
type Ticker
    func NewTicker(d Duration) *Ticker
    func (t *Ticker) Stop()
```

---

```
func Tick(d Duration) <-chan Time
```

---

Ticker持有一个通道，每隔一段时间传递一个时钟的“滴答”。

## func NewTicker(d Duration) *Ticker

NewTicker返回一个新的Ticker，其中包含一个通道，该通道将使用duration参数指定间隔时间周期性的发送时间。它调整间隔或下降滴答以弥补慢速接收器。

持续时间 d 必须大于零;如果没有，NewTicker将会 panic。

停止 ticker 以释放相关资源。

## func (t *Ticker) Stop()

Stop 关闭 ticker。停止后，不再发送 tick。

停止不关闭通道，以防止并发 goroutine 从通道读取错误的 "tick"
