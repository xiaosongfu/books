等待N个线程完成后再进行下一步的同步操作

```
// Add adds delta, which may be negative, to the WaitGroup counter.
func (wg *WaitGroup) Add(delta int)

// Done decrements the WaitGroup counter by one.
func (wg *WaitGroup) Done() 

// Wait blocks until the WaitGroup counter is zero.
func (wg *WaitGroup) Wait()
```

## 示例

```
wg := &sync.WaitGroup{}

wg.Add(1)
wg.Done()
wg.Done()
```
