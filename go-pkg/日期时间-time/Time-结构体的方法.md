```
type Time
    func Date(year int, month Month, day, hour, min, sec, nsec int, loc *Location) Time
    func Now() Time
    func Parse(layout, value string) (Time, error)
    func Unix(sec int64, nsec int64) Time
    
    func (t Time) Add(d Duration) Time
    func (t Time) Sub(u Time) Duration

    func (t Time) After(u Time) bool
    func (t Time) Before(u Time) bool

    func (t Time) Equal(u Time) bool

    func (t Time) Format(layout string) string

    func (t Time) Hour() int
    func (t Time) Minute() int
    func (t Time) Second() int
    func (t Time) Nanosecond() int

    func (t Time) Year() int
    func (t Time) YearDay() int
    func (t Time) Month() Month
    func (t Time) Weekday() Weekday
    func (t Time) Day() int

    ......
```

时间表示具有纳秒精度的瞬间。

使用时间的程序通常应存储并将它们作为值传递，而不是指针。也就是说，时间变量和结构字段的类型应为time.Time，而不是 *time.Time。

## func Date(year int, month Month, day, hour, min, sec, nsec int, loc *Location) Time

## func Now() Time

返回当前位置的当前时间。

## func Parse(layout, value string) (Time, error)

Parse 解析格式化的字符串并返回该字符串表示的时间值。

layout 通过显示定义的参考时间来定义格式 `Mon Jan 2 15:04:05 -0700 MST 2006`。


## func Unix(sec int64, nsec int64) Time

//------------------

## func (t Time) Add(d Duration) Time

## func (t Time) After(u Time) bool

## func (t Time) Before(u Time) bool

## func (t Time) Equal(u Time) bool

## func (t Time) Format(layout string) string

time 包内置了一些时间格式化 layout，layout 中使用的参考时间是特定时间，必须为：`Mon Jan 2 15:04:05 MST 2006`，你可以自己调整顺序，来实现自定义时间格式的目的。

//------------------

    func (t Time) Hour() int
    func (t Time) Minute() int
    func (t Time) Second() int
    func (t Time) Nanosecond() int
//------------------

   func (t Time) Year() int
    func (t Time) YearDay() int
    func (t Time) Month() Month
    func (t Time) Weekday() Weekday
    func (t Time) Day() int

//------------------


