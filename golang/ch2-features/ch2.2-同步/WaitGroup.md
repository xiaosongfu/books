等待N个线程完成后再进行下一步的同步操作


func (wg *WaitGroup) Add(delta int)


// Done decrements the WaitGroup counter by one.
func (wg *WaitGroup) Done() 


// Wait blocks until the WaitGroup counter is zero.
func (wg *WaitGroup) Wait()