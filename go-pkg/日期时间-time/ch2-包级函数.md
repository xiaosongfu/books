## func Now() Time

```
func Date(year int, month Month, day, hour, min, sec, nsec int, loc *Location) Time
func Now() Time
```

## func Parse(layout, value string) (Time, error)

```
func Parse(layout, value string) (Time, error)
func ParseInLocation(layout, value string, loc *Location) (Time, error)
```

## func Unix(sec int64, nsec int64) Time

//----------------------------

## func After(d Duration) <-chan Time

等待 duration 时间后，在返回的 channel 上发送当前时间。

如果需要考虑效率，请使用 `func NewTimer(d Duration) *Timer` 方法创建并使用 Timer 对象，并且记得不再需要定时器时调用 `func (t *Timer) Stop() bool` 停止定时器。

## func AfterFunc(d Duration, f func()) *Timer

等待时间过期，然后在同一 goroutine 调用方法 f。

该方法返回 *Timer，可以通过调用它的 Stop 方法来取消调用 f 方法。

//----------------------------

## func Sleep(d Duration)

Sleep 方法暂停当前的 goroutine 至少持续 duration 时间，d 为负数或0，会导致 Sleep 方法立即结束。

//----------------------------

## func Tick(d Duration) <-chan Time

Tick 方法是对 `func NewTicker(d Duration) *Ticker`
方法的便利包装器，仅提供对滴答通道的访问。

虽然Tick对于不需要关闭Ticker的客户端很有用，但请注意，如果没有办法将其关闭，底层Ticker将无法通过垃圾收集器恢复;它“泄漏”。

与 `func NewTicker(d Duration) *Ticker` 不同，如果d <= 0，Tick将返回nil。

//----------------------------

## func Since(t Time) Duration

## func ParseDuration(s string) (Duration, error)

## func Until(t Time) Duration