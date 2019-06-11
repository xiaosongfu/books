## 1. 安装 grpc-gateway 和 swagger 生成器插件

```
go get -u github.com/grpc-ecosystem/grpc-gateway/protoc-gen-grpc-gateway
go get -u github.com/grpc-ecosystem/grpc-gateway/protoc-gen-swagger
```

## 2. 复制文件

先在 third_party 文件夹下创建两个文件夹：

```
mkdir -p third_party/google
mkdir -p third_party/protoc-gen-swagger/options
```

1. 将 `protoc-3.7.0-osx-x86_64/include/google` 下的 `protobuf` 文件夹及其里面的所有文件和文件夹一起复制到 `third_party/google` 文件夹下。

2. 将 `github.com/grpc-ecosystem/grpc-gateway/third_party/googleapis/google` 下的 `api` 文件夹和 `rpc` 文件夹复制到 `third_party/google` 文件夹下。

3. 将 `github.com/grpc-ecosystem/grpc-gateway/protoc-gen-swagger/options` 下的2个 proto 文件（`annotations.proto` 和 `openapiv2.proto`）复制到 `third_party/protoc-gen-swagger/options` 文件夹下。

结果如下：

```
$ cd third_party

$ tree
.
├── google
│   └── protobuf
│   │   ├── any.proto
│   │   ├── api.proto
│   │   ├── compiler
│   │   │   └── plugin.proto
│   │   ├── descriptor.proto
│   │   ├── duration.proto
│   │   ├── empty.proto
│   │   ├── field_mask.proto
│   │   ├── source_context.proto
│   │   ├── struct.proto
│   │   ├── timestamp.proto
│   │   ├── type.proto
│   │   └── wrappers.proto
│   ├── api
│   │   ├── annotations.proto
│   │   ├── http.proto
│   │   └── httpbody.proto
│   └── rpc
│       ├── code.proto
│       ├── error_details.proto
│       └── status.proto
├── protoc-gen-swagger
│   └── options
│       ├── annotations.proto
│       └── openapiv2.proto

8 directories, 21 files
```
