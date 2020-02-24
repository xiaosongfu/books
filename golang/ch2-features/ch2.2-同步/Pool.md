
```
// Put adds x to the pool.
func (p *Pool) Put(x interface{})

// Get selects an arbitrary item from the Pool, removes it from the Pool, and returns it to the caller.
func (p *Pool) Get() interface{}
```

## 示例

```
var p sync.Pool
if p.Get() != nil {
    fmt.Println("expected empty")
}

p.Put("a")
p.Put("b")

if g := p.Get(); g != "a" {
    fmt.Printf("got %#v; want a", g)
}
if g := p.Get(); g != "b" {
    fmt.Printf("got %#v; want b", g)
}
```
