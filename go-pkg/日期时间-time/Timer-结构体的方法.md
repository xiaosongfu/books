```
type Timer
    func AfterFunc(d Duration, f func()) *Timer
    func NewTimer(d Duration) *Timer
    func (t *Timer) Reset(d Duration) bool
    func (t *Timer) Stop() bool
```

---

```
func After(d Duration) <-chan Time
```

---

Timer 类型代表一个单一的事件。当时间过期后就会将当前时间发送到内部的 C channel，如果 Timer 是由 `func AfterFunc(d Duration, f func()) *Timer` 方法创建则不发送。

Timer 类型只能由 `func AfterFunc(d Duration, f func()) *Timer` 或者 `func NewTimer(d Duration) *Timer` 方法创建。

## func AfterFunc(d Duration, f func()) *Timer

等待时间过期，然后在同一 goroutine 调用方法 f。

该方法返回 *Timer，可以通过调用它的 Stop 方法来取消调用 f 方法。

## func NewTimer(d Duration) *Timer

用来创建 Timer 类型。

## func (t *Timer) Reset(d Duration) bool

如果计时器已激活，则返回true;如果计时器已过期或已停止，则返回false。

## func (t *Timer) Stop() bool

如果调用停止计时器，则返回true;如果计时器已经过期或已停止，则返回false。

停止不关闭通道，以防止从通道读取错误。
