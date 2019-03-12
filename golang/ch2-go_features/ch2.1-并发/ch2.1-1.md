## 创建 channel

必须使用 make 创建 channel：

```
channel1 := make(chan int)
channel2 := make(chan int, 2)
```

channel 通过 `<-` 来发送和接收数据：

```
channel1 <- a // 把 a 发送到 channel1

b := <-channel1 // 从 channel1 里面取出数据，并赋值给 b
```

## 带缓冲的 channel 和无缓冲的 channel

`ch := make(chan type, value)`

* value = 0， channel 是无缓冲阻塞读写的，
* value > 0， channel 是有缓冲的，是非阻塞的，直到写满 value 个元素后才阻塞写入。

主 goroutine 使用无缓冲的 channel 时，写入后就阻塞了，要么就用有缓冲的 channel 避免阻塞，要么就用 go 程去实现。

---

> 不知道下面这些说法对不对！！！！！
* 主 goroutine 使用无缓冲的 channel 时，写入后就阻塞了；
* 但是只要是带缓冲的，比如有2个缓冲，写满2个也不阻塞，写第3个才阻塞；
* 非主 goroutine 使用无缓冲的 channel 时，写入后却不阻塞，写第二个才阻塞；

---

主 goroutine 阻塞后，如果没有其他 goruntine 了，则认为是 deadlock；
如果还有其他 goroutine，则等他们结束后再判断，如果主 goroutine 解除了阻塞，则正常结束；如果还是阻塞则认为是 deadlock。

`fatal error: all goroutines are asleep - deadlock!`

## range 和 close

```
func fibonacci(n int, c chan int){
    x, y := 1, 1
    for i := 0; i < n; i++ {
        c <- x
        x, y = y, x + y
    }
    close(c)
}

func main() {
    c := make(chan int, 10)
    go fibonacci(cap(c), c)
    for i := range c {
        fmt.Println(i)
    }
}
```

`for i := range c` 能够不断读取 channel 里面的数据，直到该 channel 被显式的 close。

在消费方可以通过 `v, ok := <- c` 测试 channel 是否被关闭，如果 ok 为 false ，则表明 channel 已经没有任何数据，并且已经被关闭了。

## select

### 1 select 默认是阻塞的

select 默认是阻塞的，只有当监听的 channel 中有发送或者接收可以进行时才会运行。

当有多个 channel 都准备好的时候， select 会随机选择一个执行。

```
func fibonacci(c, quit chan int) {
    x, y := 1, 1
    for {
        select {
        case c <- x:
            x, y = y, x + y
        case <- quit:
            fmt.Println("quit")
            return
        }
    }
}

func main() {
    c := make(chan int)
    quit := make(chan int)
    
    go func() {
        for i := 0; i < 10; i++ {
            fmt.Println(<-c)
        }
        quit <- 0
    }()
    
    fibonacci(c, quit)
}
```

### 2 default

在 select 里面还有 default 语法，default 代码块就是当监听的 channel 都没有准备好的时候，默认执行的代码块。

有 default 代码块后，select 就不再阻塞等待 channel 了。

### 3  超时

有时候会出现 goroutine 阻塞的情况，那么我们怎么避免整个程序进入阻塞的情况呢？可以通过设置超时解决：

```
func main() {
    c := make(chan int)
    o := make(chan int)
    
    go func() {
        for {
            select {
            case v:= <- c:
                fmt.Println(v)
            case <- time.After(5 * time.Second):
                fmt.Println("timeout")
                o <- 1
                break
            }
        }
    }()
    
    <- o
}
```