本文整理自：https://github.com/googleapis/googleapis/blob/master/google/api/http.proto

# 1
## part1

HttpRule 定义了一个 RPC 方法映射到一个或者多个 HTTP REST JSON API。

映射由 field 和 method 组成。

一个 GET 示例：

```
service Messaging {
  rpc GetMessage(GetMessageRequest) returns (Message) {
    option (google.api.http).get = "/v1/messages/{message_id}/{sub.subfield}";
  }
}
message GetMessageRequest {
  message SubMessage {
    string subfield = 1;
  }
  string message_id = 1; // mapped to the URL
  SubMessage sub = 2;    // `sub.subfield` is url-mapped
}
message Message {
  string text = 1; // content of the resource
}
```

注意 GetMessageRequest 的 message_id 和 sub.subfield 都被映射为了 path variable

这个映射可以在 HTTP JSON 和 RPC 之间自动双向的对应：

```
HTTP | RPC
-----|-----
`GET /v1/messages/123456/foo`  | `GetMessage(message_id: "123456" sub: SubMessage(subfield: "foo"))`
```

## part2

* 对 GET/DELETE 请求：如果一个 field 没有绑定到 path variable，则会被自动绑定为 query parameter

* 对 POST/PUT/PATCH 请求：如果一个 field 没有绑定到 path variable，则会被自动绑定为 request body

##### `path variable` -> `query parameter` 示例

```
service Messaging {
  rpc GetMessage(GetMessageRequest) returns (Message) {
    option (google.api.http).get = "/v1/messages/{message_id}";
  }
}
message GetMessageRequest {
  message SubMessage {
    string subfield = 1;
  }
  string message_id = 1; // mapped to the URL
  int64 revision = 2;    // becomes a parameter
  SubMessage sub = 3;    // `sub.subfield` becomes a parameter
}
```

请求方法：

```
HTTP | RPC
-----|-----
`GET /v1/messages/123456?revision=2&sub.subfield=foo` | `GetMessage(message_id: "123456" revision: 2 sub: SubMessage(subfield: "foo"))`
```

##### `path variable` -> `request body` 示例

```
service Messaging {
  rpc UpdateMessage(UpdateMessageRequest) returns (Message) {
    option (google.api.http) = {
      put: "/v1/messages/{message_id}"
      body: "message"
    };
  }
}
message UpdateMessageRequest {
  string message_id = 1; // mapped to the URL
  Message message = 2;   // mapped to the body
}
```

请求方法：

```
HTTP | RPC
-----|-----
`PUT /v1/messages/123456 { "text": "Hi!" }` | `UpdateMessage(message_id: "123456" message { text: "Hi!" })`
```

## part3

`*` 星号可以用在 body 里面，用来将没有绑定到 path variable 的所有 field 绑定到 request body。

示例：

```
service Messaging {
  rpc UpdateMessage(Message) returns (Message) {
    option (google.api.http) = {
      put: "/v1/messages/{message_id}"
      body: "*"
    };
  }
}
message Message {
  string message_id = 1;
  string text = 2;
}
```

请求方法：

```
The following HTTP JSON to RPC mapping is enabled:
HTTP | RPC
-----|-----
`PUT /v1/messages/123456 { "text": "Hi!" }` | `UpdateMessage(message_id: "123456"text: "Hi!")`
```

## part4

使用 `additional_bindings` 选项映射多个 HTTP 方法到一个 RPC 方法。

但是 `additional_bindings` 选项内部不能再嵌套一个 `additional_bindings` 选项了!!!

示例：

```
service Messaging {
  rpc GetMessage(GetMessageRequest) returns (Message) {
    option (google.api.http) = {
      get: "/v1/messages/{message_id}"
      additional_bindings {
        get: "/v1/users/{user_id}/messages/{message_id}"
      }
    };
  }
}
message GetMessageRequest {
  string message_id = 1;
  string user_id = 2;
}
```

请求方法：

```
HTTP | RPC
-----|-----
`GET /v1/messages/123456` | `GetMessage(message_id: "123456")`
`GET /v1/users/me/messages/123456` | `GetMessage(user_id: "me" message_id: "123456")`
```

# 2 Rules for HTTP mapping

