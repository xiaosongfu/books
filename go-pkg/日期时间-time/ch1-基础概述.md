* 时间格式 layout
* 月份
* 星期 

---

## 时间格式 layout

time 包内置了一些时间格式 layout，layout 中使用的参考时间是特定时间，必须为：`Mon Jan 2 15:04:05 MST 2006`，你可以自己调整顺序，来实现自定义时间格式的目的。

该 layout 主要用在 `func Parse(layout, value string) (Time, error)` 和 `func (t Time) Format(layout string) string` 这两个方法上。

看两个例子：

```
const longForm = "Jan 2, 2006 at 3:04pm (MST)"
t, _ := time.Parse(longForm, "Feb 3, 2013 at 7:54pm (PST)")
fmt.Println(t)

const shortForm = "2006-Jan-02"
t, _ = time.Parse(shortForm, "2013-Feb-03")
fmt.Println(t)
```

Github 接口返回的时间都是这样的：`2019-03-15T04:58:21Z`，要解析这样的时间格式，需要用到内置的 `time.RFC3339` 格式，这样的格式还有很多，它们是不同的标准，它们被定义在 `format.go` 源文件中，定义如下：

```
// These are predefined layouts for use in Time.Format and time.Parse.
// ......
const (
	ANSIC       = "Mon Jan _2 15:04:05 2006"
	UnixDate    = "Mon Jan _2 15:04:05 MST 2006"
	RubyDate    = "Mon Jan 02 15:04:05 -0700 2006"
	RFC822      = "02 Jan 06 15:04 MST"
	RFC822Z     = "02 Jan 06 15:04 -0700" // RFC822 with numeric zone
	RFC850      = "Monday, 02-Jan-06 15:04:05 MST"
	RFC1123     = "Mon, 02 Jan 2006 15:04:05 MST"
	RFC1123Z    = "Mon, 02 Jan 2006 15:04:05 -0700" // RFC1123 with numeric zone
	RFC3339     = "2006-01-02T15:04:05Z07:00"
	RFC3339Nano = "2006-01-02T15:04:05.999999999Z07:00"
	Kitchen     = "3:04PM"
	// Handy time stamps.
	Stamp      = "Jan _2 15:04:05"
	StampMilli = "Jan _2 15:04:05.000"
	StampMicro = "Jan _2 15:04:05.000000"
	StampNano  = "Jan _2 15:04:05.000000000"
)
```

## 月份

```
type Month int
```

```
const (
	January Month = 1 + iota
	February
	March
	April
	May
	June
	July
	August
	September
	October
	November
	December
)
```

```
var months = [...]string{
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
}
```

```
// String returns the English name of the month ("January", "February", ...).
func (m Month) String() string {
	if January <= m && m <= December {
		return months[m-1]
	}
	buf := make([]byte, 20)
	n := fmtInt(buf, uint64(m))
	return "%!Month(" + string(buf[n:]) + ")"
}
```

## 星期

```
// A Weekday specifies a day of the week (Sunday = 0, ...).
type Weekday int
```

```
const (
	Sunday Weekday = iota
	Monday
	Tuesday
	Wednesday
	Thursday
	Friday
	Saturday
)
```

```
var days = [...]string{
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
}
```

```
// String returns the English name of the day ("Sunday", "Monday", ...).
func (d Weekday) String() string {
	if Sunday <= d && d <= Saturday {
		return days[d]
	}
	buf := make([]byte, 20)
	n := fmtInt(buf, uint64(d))
	return "%!Weekday(" + string(buf[n:]) + ")"
}
```

---

理解Golang的Time结构：https://zhuanlan.zhihu.com/p/47754783