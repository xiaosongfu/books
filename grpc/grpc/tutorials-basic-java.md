https://grpc.io/docs/tutorials/basic/java.html


https://zmis.me/list/topic/2
https://zmis.me/article/1465?topicID=2

---

* Define a service in a `.proto` file.
* Generate server and client code using the protocol buffer compiler.
* Use the Java gRPC API to write a simple client and server for your service.

我们的示例是一个简单的路由映射应用程序，它允许客户端获取有关其路由功能的信息，创建其路由摘要，以及与服务器和其他客户端交换路由信息（如流量更新）。

使用gRPC，我们可以在.proto文件中定义我们的服务一次，并使用gRPC支持的任何语言实现客户端和服务器，而这些语言又可以在从谷歌内部的服务器到您自己的平板电脑的各种环境中运行 - 不同的通信之间的所有复杂性gRPC为您处理语言和环境。我们还获得了使用协议缓冲区的所有优势，包括高效的序列化，简单的IDL和简单的接口更新。

