
```
var once sync.Once
once.Do(func() {
		fmt.Println("Only once")
})
```

不管调用了 once.Do(func() {}) 多少次，func() {} 都只可能被执行一次！！！



---

源码：

```
package sync

import (
	"sync/atomic"
)

type Once struct {
	m    Mutex
	done uint32
}

func (o *Once) Do(f func()) {
	if atomic.LoadUint32(&o.done) == 1 {
		return
	}
	// Slow-path.
	o.m.Lock()
	defer o.m.Unlock()
	if o.done == 0 {
		defer atomic.StoreUint32(&o.done, 1)
		f()
	}
}
```
