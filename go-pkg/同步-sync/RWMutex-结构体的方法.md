```
type RWMutex
    func (rw *RWMutex) Lock()
    func (rw *RWMutex) Unlock()
    
    func (rw *RWMutex) RLock()
    func (rw *RWMutex) RUnlock()

    func (rw *RWMutex) RLocker() Locker
```
