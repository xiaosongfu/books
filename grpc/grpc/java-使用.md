* 1.概述
* 2. 安装
    * 2.1 Java 项目
    * 2.2 Android 项目

---

## 1.概述

在较高的层次上，库有三个不同的层：Stub，Channel和Transport。

##### 1.1 Stub

Stub 层是大多数开发人员所接受的，它为您正在调整的任何 datamodel/IDL/interface 提供类型安全绑定。gRPC 附带了一个 protocol-buffers 编译器插件，可以从 `.proto` 文件中生成 Stub 接口，但是绑定到其他 datamodel/IDL 是很容易的和也是鼓励的。

##### 1.2 Channel

通道层是传输处理的抽象，适用于拦截/装饰，并向应用程序公开比Stub层更多的行为。应用程序框架很容易使用该层来解决诸如日志记录，监视，身份验证等交叉问题。

##### 1.3 Transport

传输层完成了从线路上放置和取出字节的繁重工作。它的接口是抽象的，足以允许插入不同的实现。gRPC附带三个Transport实现：
* `基于 Netty 的传输` 是基于 Netty 的主要传输实现。它适用于客户端和服务器。
* `基于 OkHttp 的传输` 是基于 OkHttp 的轻量级传输。它主要用于Android，仅供客户使用。
* `进程内传输` 用于服务器与客户端处于同一进程中。
它对测试很有用，同时对生产使用也很安全。


## 2. 安装

grpc-java 支持 Java 项目和 Android 项目

#### 2.1 Java 项目

使用 maven：

```
<dependency>
  <groupId>io.grpc</groupId>
  <artifactId>grpc-netty-shaded</artifactId>
  <version>1.19.0</version>
</dependency>
<dependency>
  <groupId>io.grpc</groupId>
  <artifactId>grpc-protobuf</artifactId>
  <version>1.19.0</version>
</dependency>
<dependency>
  <groupId>io.grpc</groupId>
  <artifactId>grpc-stub</artifactId>
  <version>1.19.0</version>
</dependency>
```

使用 gradle：

```
compile 'io.grpc:grpc-netty-shaded:1.19.0'
compile 'io.grpc:grpc-protobuf:1.19.0'
compile 'io.grpc:grpc-stub:1.19.0'
```

#### 2.2 Android 项目

对于Android项目，需要使用 `grpc-okhttp` 来代替 `grpc-netty-shaded`，使用 `grpc-protobuf-lite` 来代替 `grpc-protobuf`。

```
compile 'io.grpc:grpc-okhttp:1.19.0'
compile 'io.grpc:grpc-protobuf-lite:1.19.0'
compile 'io.grpc:grpc-stub:1.19.0'
```

## 3. 使用

```
```