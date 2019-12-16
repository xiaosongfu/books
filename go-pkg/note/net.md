++++ one ++++

```
http.Handle("/foo", fooHandler)

http.HandleFunc("/bar", func(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Hello, %q", html.EscapeString(r.URL.Path))
})

log.Fatal(http.ListenAndServe(":8080", nil))
```

使用 ListenAndServe 根据给定的地址和 handler 来开启一个服务，handler 通常是 nil ，表示使用默认的 DefaultServeMux，并使用
Handle 和 HandleFunc 来添加处理器。

++++ two ++++

```
mux := http.NewServeMux()
mux.HandleFunc("/", index)
// starting up the server
server := &http.Server{
    Addr:           config.Address,
    Handler:        mux,
    ReadTimeout:    time.Duration(config.ReadTimeout * int64(time.Second)),
    WriteTimeout:   time.Duration(config.WriteTimeout * int64(time.Second)),
    MaxHeaderBytes: 1 << 20,
}
server.ListenAndServe()
```

自己准备一个 ServeMux ，而不是使用默认的 DefaultServeMux。

++++ three ++++

使用：

```
    server := &http.Server{
        Addr:           config.Address,
        Handler:        mux,
        ReadTimeout:    time.Duration(config.ReadTimeout * int64(time.Second)),
        WriteTimeout:   time.Duration(config.WriteTimeout * int64(time.Second)),
        MaxHeaderBytes: 1 << 20,
    }
    server.ListenAndServe()
```

可以定制更多的行为

---

### http.Handle 和 http.HandleFunc 的区别

```
func main() {
	helloHandle := HelloHandle {}
	http.Handle("/hello", &helloHandle)
	http.HandleFunc("/hi", func(writer http.ResponseWriter, request *http.Request) {
		fmt.Fprintln(writer, "hi")
	})
    http.HandleFunc("/hi2", hi2)

	http.ListenAndServe(":8080", nil)

	//http.MethodGet
	//http.StatusNotFound
	//fmt.Println(http.StatusText(http.StatusNotFound))
}

type HelloHandle struct {
}

func (helloHandle *HelloHandle) ServeHTTP(writer http.ResponseWriter, request *http.Request) {
	fmt.Fprintln(writer, "hello")
}

func hi2(writer http.ResponseWriter, request *http.Request) {
    fmt.Fprintln(writer, "hi2")
}
```

HelloHandle 叫处理器，而 hi2 叫处理器函数。  
