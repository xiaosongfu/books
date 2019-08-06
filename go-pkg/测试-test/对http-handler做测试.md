* 方法一：使用 http.Request 和 ResponseRecorder 对象
* 方法二：启动一个 net/http/httptest.Server 来做测试
* 方法三：直接测试 func Foo(w http.ResponseWriter, r *http.Request) 方法

---

> 注意：如果 method 是 POST、PATCH 等，则需要设置`request.Header.Set("Content-Type", "application/x-www-form-urlencoded")` 才能将参数进行编码到 request body 里面，服务器端才能通过 PostForm、Post 等方式获取到值，不然是取不到值得。

* "application/x-www-form-urlencoded"
* "application/json"

---

> 有两种方法！！

## 方法一：使用 http.Request 和 ResponseRecorder 对象

首先使用 `func httptest.NewRequest(method, target string, body io.Reader) *http.Request` 准备一个 *http.Request。

然后使用 `func httptest.NewRecorder() *ResponseRecorder` 准备一个 *ResponseRecorder。

最后将这两个参数传传递给 handlerFunc，即可通过 *ResponseRecorder 来处理结果了。

示例如下：

```
request := httptest.NewRequest(http.MethodGet, "http://localhost/addRepo", nil)
recorder := httptest.NewRecorder()
addRepo(recorder, request)

if recorder.Code != http.StatusOK {
    t.Fatalf("status code is error, the error status code is: %d", recorder.Code)
}

body, _ := ioutil.ReadAll(recorder.Body)
fmt.Println(string(body))
```

## 方法二：启动一个 net/http/httptest.Server 来做测试

使用 `httptest.NewServer(handler http.Handler) *Server` 方法**创建并启动**一个服务器，如果只是创建不启动，可以使用 `httptest.NewUnstartedServer(handler http.Handler) *Server` 方法

启动服务器之后记得需要调用 Close 方法关闭服务器。

net/http/httptest.Server 的 Client() 方法返回一个 *http.Client 类型，使用这个 http.Client 即可完成 http 请求。

net/http/httptest.Server 的 URL 属性即为 Server 的地址，如：`http://127.0.0.1:51733`，所以如果不是用的 http 内置的 router，比如用的 `github.com/julienschmidt/httprouter` 路由的话，记得需要拼接上路径。

示例如下：

```
router := httprouter.New()
router.POST("/v1/repos", addRepo)

server := httptest.NewServer(router)

defer server.Close()

client := server.Client()
resp, err := client.PostForm(server.URL + "/v1/repos", url.Values{"owner": []string{"helm"}, "repo": []string{"helm"}})
if err != nil {
    t.Fatal(err)
}

defer resp.Body.Close()

if resp.StatusCode != http.StatusOK {
    t.Fatalf("status code error, the error status code is: %d", resp.StatusCode)
}
```

## 方法三：直接测试 func Foo(w http.ResponseWriter, r *http.Request) 方法

```
func F(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Hello, World!\n"))
}
```

```
r := httptest.NewRequest("GET", "/", nil)
w := httptest.NewRecorder()
handler := http.HandlerFunc(F)
handler.ServeHTTP(w, r)

resp := w.Result()

if resp.StatusCode != http.StatusOK {
    t.Errorf("wrong status code: got %v want %v", resp.StatusCode, http.StatusOK)
}

body, err := ioutil.ReadAll(resp.Body)
if err != nil {
    t.Fatal(err)
}

if string(body) != "Hello, World!\n" {
    t.Errorf("wrong response body: got %v want %v", body, "Hello, World!\n")
}
```

参考：https://github.com/kelseyhightower/gophercon-2018/blob/master/helloworld/cloud-functions/function_test.go
