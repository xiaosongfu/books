## /_matrix/client/r0/login

获取 homeserver 支持的登录类型以验证用户身份。

客户端应选择其中一个并在登录时将其作为类型提供。

---

响应示例：

```
{
    "flows": [
        {
            "type": "m.login.password"
        }
    ]
}
```


## /_matrix/client/r0/login

对用户进行身份验证，并发放一个访问令牌（access token），用于在后续请求中对自己进行授权。

如果客户端未提供 device_id，则服务器必须自动生成一个。

返回的访问令牌必须与客户端提供的或服务器生成的 device_id 相关联。服务器可以使先前与该设备相关联的任何访问令牌无效。

---

请求示例：

```
{
  "identifier": {
    "type": "m.id.user",
    "user": "xiaoi1"
  },
  "device_id": "t1",
  "password": "Xiaoi@123456",
  "type": "m.login.password"
}
```

响应示例：

```
{
    "user_id": "@xiaoi1:im.fdev.ltd",
    "access_token": "MD...bS8RvMhFggo",
    "home_server": "im.fdev.ltd",
    "device_id": "t1"
}
```

```
{
    "errcode": "M_FORBIDDEN",
    "error": "Invalid password"
}

{
    "errcode": "M_UNKNOWN",
    "error": "Unknown login type m.login.passwo33rd"
}
```


## /_matrix/client/r0/logout

使现有访问令牌无效，以便它不能再用于授权。

与访问令牌关联的设备也将被删除。设备的 `Device keys` 也随设置一起删除。




## /_matrix/client/r0/logout/all

使用户的所有访问令牌无效，因此无法再将其用于授权。这包括发出此请求的访问令牌。

用户的所有设备也将被删除。设备的 `Device keys` 也随设置一起删除。


