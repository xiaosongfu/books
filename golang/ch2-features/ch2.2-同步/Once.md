
```
// Do calls the function f if and only if Do is being called for the first time for this instance of Once.
func (o *Once) Do(f func()) 
```

## 示例

```
var once sync.Once

once.Do(func() {
    fmt.Println("some thing")
})
```
