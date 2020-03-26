# go 客户端

> https://github.com/nats-io/go-nats

## 方式一：发送接收 []byte

发布 []byte
接收一个 *nats.Msg，其 Data 属性为 []byte

```
// Connect to a server
nc, _ := nats.Connect(nats.DefaultURL)

// Simple Publisher
nc.Publish("foo", []byte("Hello World"))

// Simple Async Subscriber
nc.Subscribe("foo", func(m *nats.Msg) {
    fmt.Printf("Received a message: %s\n", string(m.Data))
})
```

## 方式二：使用 json 编码

```
nc, _ := nats.Connect(nats.DefaultURL)
c, _ := nats.NewEncodedConn(nc, nats.JSON_ENCODER)
defer c.Close()

// Simple Publisher
c.Publish("foo", "Hello World")

// Simple Async Subscriber
c.Subscribe("foo", func(s string) {
    fmt.Printf("Received a message: %s\n", s)
})
```

除了可以是字符串，还可以是任意的类型，比如自定义的 struct。