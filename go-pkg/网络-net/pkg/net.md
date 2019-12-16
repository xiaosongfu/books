```
import "net"
```

> 包文件
[]()


net 包为网络 I/O 提供了便携的接口，包括 TCP/IP, UDP, 域名解析，Unix 域套接字。

虽然这个包提供了访问低级原始网络的方法，但是大多数客户端只需要基本 Dial, Listen, Accept 函数，以及相关的 Conn， Listener 接口。
crypto/tls 包使用了相同的接口还有相似的 Dial 和 Listen 函数。  

使用 Dial 函数链接到一个服务器：
```
conn, err := net.Dial("tcp", "golang.org:80")
if err != nil {
	// handle error
}
fmt.Fprintf(conn, "GET / HTTP/1.0\r\n\r\n")
status, err := bufio.NewReader(conn).ReadString('\n')
// ...
```
使用 Listen 函数创建一个服务器：
```
ln, err := net.Listen("tcp", ":8080")
if err != nil {
	// handle error
}
for {
	conn, err := ln.Accept()
	if err != nil {
		// handle error
	}
	go handleConnection(conn)
}
```
