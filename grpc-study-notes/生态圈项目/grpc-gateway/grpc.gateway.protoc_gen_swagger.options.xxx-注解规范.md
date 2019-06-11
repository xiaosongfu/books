完整使用方法请参考：https://github.com/grpc-ecosystem/grpc-gateway/blob/ab0345bb32/examples/proto/examplepb/a_bit_of_everything.proto


---



---


Swagger grpc.gateway.protoc_gen_swagger.options.openapiv2_swagger

Operation grpc.gateway.protoc_gen_swagger.options.openapiv2_operation

Schema grpc.gateway.protoc_gen_swagger.options.openapiv2_schema

Tag grpc.gateway.protoc_gen_swagger.options.openapiv2_tag

JSONSchema grpc.gateway.protoc_gen_swagger.options.openapiv2_field

---

```
message Swagger {
  string swagger = 1;
  Info info = 2;
  string host = 3;
  string base_path = 4;
  enum SwaggerScheme {
    UNKNOWN = 0;
    HTTP = 1;
    HTTPS = 2;
    WS = 3;
    WSS = 4;
  }
  repeated SwaggerScheme schemes = 5;
  repeated string consumes = 6;
  repeated string produces = 7;
  reserved 8;
  reserved 9;
  map<string, Response> responses = 10;
  SecurityDefinitions security_definitions = 11;
  repeated SecurityRequirement security = 12;
  reserved 13;
  ExternalDocumentation external_docs = 14;
}
```


```
message Operation {
  repeated string tags = 1;
  string summary = 2;
  string description = 3;
  ExternalDocumentation external_docs = 4;
  string operation_id = 5;
  repeated string consumes = 6;
  repeated string produces = 7;
  reserved 8;
  map<string, Response> responses = 9;
  repeated string schemes = 10;
  bool deprecated = 11;
  repeated SecurityRequirement security = 12;
}
```


```
message Schema {
  JSONSchema json_schema = 1;
  string discriminator = 2;
  bool read_only = 3;
  reserved 4;
  ExternalDocumentation external_docs = 5;
  google.protobuf.Any example = 6;
}
```


```
message Tag {
  reserved 1;
  string description = 2;
  ExternalDocumentation external_docs = 3;
}
```

```
message JSONSchema {
  reserved 1;
  reserved 2;
  string ref = 3;
  reserved 4;
  string title = 5;
  string description = 6;
  string default = 7;
  bool read_only = 8;
  reserved 9;
  double multiple_of = 10;
  double maximum = 11;
  bool exclusive_maximum = 12;
  double minimum = 13;
  bool exclusive_minimum = 14;
  uint64 max_length = 15;
  uint64 min_length = 16;
  string pattern = 17;
  reserved 18;
  reserved 19;
  uint64 max_items = 20;
  uint64 min_items = 21;
  bool unique_items = 22;
  reserved 23;
  uint64 max_properties = 24;
  uint64 min_properties = 25;
  repeated string required = 26;
  reserved 27;
  reserved 28;
  reserved 29;
  reserved 30 to 33;
  repeated string array = 34;

  enum JSONSchemaSimpleTypes {
    UNKNOWN = 0;
    ARRAY = 1;
    BOOLEAN = 2;
    INTEGER = 3;
    NULL = 4;
    NUMBER = 5;
    OBJECT = 6;
    STRING = 7;
  }

  repeated JSONSchemaSimpleTypes type = 35;
  reserved 36 to 41;
  reserved 42;
  reserved 43 to 45;
}
```

