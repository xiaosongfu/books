## 2个 interface

```
type Context interface {
	Deadline() (deadline time.Time, ok bool)
	Done() <-chan struct{}
	Err() error
	Value(key interface{}) interface{}
}
```

```
type canceler interface {
	cancel(removeFromParent bool, err error)
	Done() <-chan struct{}
}
```

## 1个函数类型别名

```
type CancelFunc func()
```

## 4个 struct

* emptyCtx
* cancelCtx
* timerCtx
* valueCtx

```
type emptyCtx int
```

```
type cancelCtx struct {
	Context

	mu       sync.Mutex            // protects following fields
	done     chan struct{}         // created lazily, closed by first cancel call
	children map[canceler]struct{} // set to nil by the first cancel call
	err      error                 // set to non-nil by the first cancel call
}
```

```
type timerCtx struct {
	cancelCtx
	timer *time.Timer // Under cancelCtx.mu.

	deadline time.Time
}
```

```
type valueCtx struct {
	Context
	key, val interface{}
}
```

## 4个函数

```
func WithCancel(parent Context) (ctx Context, cancel CancelFunc)

func WithDeadline(parent Context, d time.Time) (Context, CancelFunc)

func WithTimeout(parent Context, timeout time.Duration) (Context, CancelFunc)

func WithValue(parent Context, key, val interface{}) Context
```

`WithTimeout(timeout)` 方法内部调用 `WithDeadline(parent, time.Now().Add(timeout))`，即是使用当前时间加上超时时间来调用 `WithDeadline`。

```
func WithTimeout(parent Context, timeout time.Duration) (Context, CancelFunc) {
	return WithDeadline(parent, time.Now().Add(timeout))
}
```

## xx

```
var (
	background = new(emptyCtx)
	todo       = new(emptyCtx)
)
```

```
func Background() Context {
	return background
}

func TODO() Context {
	return todo
}
```

## 使用建议

不要将上下文存储在 struct 中；相反，要将 Context 明确传递给需要它的每个函数。Context 应该是第一个参数，通常命名为 ctx：

```
func DoSomething(ctx context.Context, arg Arg) error {
    // ... use ctx ...
}
```

可以将相同的 Context 传递给在不同 goroutine 中运行的函数；Context 对于多个 goroutine 同时使用是安全的。
