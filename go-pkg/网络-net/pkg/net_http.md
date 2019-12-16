```
import "net/http"
```

> 包文件
[]()


http 包提供了 HTTP 客户端和服务端的实现。

Get, Head, Post, and PostForm 函数发出 HTTP（或 HTTPS）请求：

```
resp, err := http.Get("http://example.com/")
...
resp, err := http.Post("http://example.com/upload", "image/jpeg", &buf)
...
resp, err := http.PostForm("http://example.com/form",
	url.Values{"key": {"Value"}, "id": {"123"}})
```

当客户端处理完后必须关闭响应体：

```
resp, err := http.Get("http://example.com/")
if err != nil {
	// handle error
}
defer resp.Body.Close()
body, err := ioutil.ReadAll(resp.Body)
// ...
```

ListenAndServe 使用给定的地址和处理器来(handler)开启一个 http 服务器。这个处理器(handler)通常是 nil，意味着使用 DefaultServeMux。使用 Handle 和 HandleFunc 添加处理器(handler)到 DefaultServeMux。

```
http.Handle("/foo", fooHandler)
http.HandleFunc("/bar", func(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello, %q", html.EscapeString(r.URL.Path))
})
log.Fatal(http.ListenAndServe(":8080", nil))
```

如果想要更灵活的控制服务器的行为，可以创建一个自定义的 Server：

```
s := &http.Server{
	Addr:           ":8080",
	Handler:        myHandler,
	ReadTimeout:    10 * time.Second,
	WriteTimeout:   10 * time.Second,
	MaxHeaderBytes: 1 << 20,
}
log.Fatal(s.ListenAndServe())
```

[net/http/method.go](https://golang.google.cn/src/net/http/method.go) 里面定义了各种请求方法，如 http.MethodGet  
[net/http/status](https://golang.google.cn/src/net/http/status.go) 里面定义了各种状态码，如 http.StatusNotFound，还有 func StatusText(code int) string 方法

## 常量

const DefaultMaxHeaderBytes = 1 << 20 // 1 MB
const DefaultMaxIdleConnsPerHost = 2

## 变量

ErrConnDone  
ErrNoRows  
ErrTxDone  

## 函数
### func ListenAndServe(addr string, handler Handler) error
### func ListenAndServeTLS(addr, certFile, keyFile string, handler Handler) error
### func Redirect(w ResponseWriter, r *Request, url string, code int)
### func SetCookie(w ResponseWriter, cookie *Cookie)
### 
### 
### 
### 
### 
### 
### 
### 
### 
### 
### 
### 
### 
### 
### 
### 
### 
### 
### 