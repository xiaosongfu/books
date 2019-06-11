> Go语言的RPC规则：
方法只能有两个可序列化的参数，其中第二个参数是指针类型，并且返回一个error类型，同时必须是公开的方法

> Go语言的RPC框架有两个比较有特色的设计：
一个是RPC数据打包时可以通过插件实现自定义的编码和解码；另一个是RPC建立在抽象的io.ReadWriteCloser接口之上的，我们可以将RPC架设在不同的通讯协议之上。

> The net/rpc package stipulates that only methods that satisfy the following criteria will be made available for remote access; other methods will be ignored.

* The method’s type is exported.
* The method is exported
* The method has two arguments, both exported (or builtin types).
* The method’s second argument is a pointer
* The method has return type error

rpc 方法的第一个参数表示调用者提供的参数; 第二个参数表示要返回给调用者的结果参数。如果返回错误，则不会将reply参数发送回客户端。

---

## 服务端

```
package main

import (
	"net"
	"net/rpc"
)

const helloServiceNameServer = "com.xiaosongfu.go.rpc.hello"

type HelloServiceInterface interface {
	Hello(string, *string) error
}

func RegisterHelloService(helloService HelloServiceInterface) error {
	return rpc.RegisterName(helloServiceNameServer, helloService)
}

//------------------

type HelloService struct{}

func (h HelloService) Hello(text string, reply *string) error {
	*reply = "hello " + text
	return nil
}

//------------------

func main() {
	RegisterHelloService(new(HelloService))
	
	listener, err := net.Listen("tcp", ":12001")
	if err != nil {
		panic(err)
	}

	conn, err := listener.Accept()
	if err != nil {
		panic(err)
	}

	rpc.ServeConn(conn)
}
```

## 客户端

```
package main

import (
	"fmt"
	"net/rpc"
)

func main() {
	client, err := rpc.Dial("tcp", "localhost:12001")
	if err != nil {
		panic(err)
	}

	defer client.Close()

	var reply string
	err = client.Call("com.xiaosongfu.go.rpc.hello.Hello", "xiaosongfu", &reply)
	if err != nil {
		panic(err)
	}

	fmt.Println(reply)
}
```
