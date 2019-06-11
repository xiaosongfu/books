## Duration

Duration 类型是 int64 的别名，它的定义如下：

```
type Duration int64
```

time 包定义了 Hour、Minute、Second 等单位时间，他们的定义如下：

```
const (
        Nanosecond  Duration = 1
        Microsecond          = 1000 * Nanosecond
        Millisecond          = 1000 * Microsecond
        Second               = 1000 * Millisecond
        Minute               = 60 * Second
        Hour                 = 60 * Minute
)
```

所以经常看到这种用法： `time.After(5 * time.Second)`，它表示 5s 之后。这样可以减少一些迷惑，比如在 Java 里面， 5s 可能需要使用 5000 毫秒来表示，那么传递给函数的参数就会是 5000，而不会像 `5 * time.Second` 这样简单直接清晰明了。

---

```
type Duration
    func ParseDuration(s string) (Duration, error)
    func Since(t Time) Duration
    func Until(t Time) Duration

    func (d Duration) Hours() float64
    func (d Duration) Minutes() float64
    func (d Duration) Nanoseconds() int64
    func (d Duration) Seconds() float64

    func (d Duration) String() string

    func (d Duration) Round(m Duration) Duration
    func (d Duration) Truncate(m Duration) Duration
```

Duration 表示两个时刻之间经过的时间，以纳秒为单位，int64 类型。

最大可表示的持续时间限制大约为290年。

## func ParseDuration(s string) (Duration, error)

ParseDuration 解析持续时间字符串。

持续时间字符串是可能签名的十进制数字序列，每个都带有可选的分数和单位后缀，例如“300ms”，“-1.5h”或“2h45m”。有效时间单位是“ns”，“us”（或“μs”），“ms”，“s”，“m”，“h”。

```
hours, _ := time.ParseDuration("10h")
complex, _ := time.ParseDuration("1h10m10s")
```

## func Since(t Time) Duration

Since 返回自 t 以来经过的时间。它是 `time.Now().Sub(t)` 的简写。

## func Until(t Time) Duration

Until 返回直到 t 的持续时间。它是 `t.Sub(time.Now())` 的简写。

## Hours Minutes Seconds Nanoseconds

返回 duration 以小时、分钟、秒、毫秒 为单位的时间。

## func (d Duration) String() string

String 返回表示持续时间的字符串，格式为“72h3m0.5s”。
前导零将被省略。
作为一种特殊情况，小于一秒格式的持续时间使用较小的单位（毫秒，微米或纳秒）来确保前导数字不为零。

持续时间 为 0 将返回 `0s`。

## func (d Duration) Round(m Duration) Duration

## func (d Duration) Truncate(m Duration) Duration
