```
type Mutex
    func (m *Mutex) Lock()
    func (m *Mutex) Unlock()
```


## Mutex互斥锁

Mutex用于提供锁定机制，以确保在任何时间点只有一个Goroutine运行代码的临界区，以防止发生竞态条件。

sync包中提供了Mutex。Mutex上定义了两种方法，即锁定Lock和UnLock。在Lock和UnLock的调用之间的任何代码将只能由一个Goroutine执行，从而避免竞态条件。

```
mutex.Lock()  
x = x + 1  
mutex.Unlock()  
```

在上面的代码中，`x = x + 1` 将仅由一个Goroutine执行。在任何时候只允许一个Goroutine执行临界区。

如果一个Goroutine已经持有锁，当一个新的Goroutine试图获取锁的时候，新的Goroutine将被阻塞直到互斥锁被解锁。
