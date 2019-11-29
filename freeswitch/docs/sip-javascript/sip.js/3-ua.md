## 1. 概述
sip.js 中使用 UA（用户代理）来代表一个用户执行各种操作。

用户代理（UA）与 SIP 用户地址相关联，并代表该用户执行发送和接收 SIP 请求的操作。

UA 可以注册以接收传入的请求，以及创建和发送出站消息。

UA 还维护传输信令的 WebSocket。

构造方法：

```
new SIP.UA([configuration])
```

方法：

```
start()
stop()
register([options])
unregister([options])
isRegistered()
message(target, body[, options])
subscribe(target, event[, options])
invite(target[, options, modifiers])
request(method, target[, options])
```

事件：

```
registered
unregistered
registrationFailed
invite
message
outOfDialogReferRequested
transportCreated
```

## 2. 创建 UA

简单示例：

```
let ua = new SIP.UA({
    uri: 'bob@sip.xiaoi.com',
    transportOptions: {
        wsServers: 'sip.xiaoi.com',
        traceSip: true,
    },
    register: false,
})
```

通过 `SIP.UA([configuration])` 构造方法创建一个 UA，虽然 configuration 参数是可选的，但是大多数应用都会配置 uri 和 wsServers 选项。

如果没有传递 configuration 参数，则会默认创建一个匿名的 UA；如果只传递了一个字符串，则该字符串会被设置为 uri。

configuration 对象包含如下属性：

### 1. uri

String 类型。

### 2. authorizationUser

String 类型。

登录的用户账号。

### 3. password

String 类型。

登录的用户密码。

### 4. register

Boolean 类型。

是否自动向 FreeSwitch 注册，默认值为 true

### 5. transportOptions

Object 类型。

初始化 UA 时传递给 `SIP.Transport` 的参数，包括的属性如下：

##### wsServers 

用于指定 WebSocket 的地址，可以有以下3种类型：

* String 类型：定义单个 WebSocket 地址
* String Array 类型：定义多个 WebSocket 地址
* Objcet Array 类型：定义多个 WebSocket 地址，并且为每个指定一个权重，权重大的优先尝试

```
// 指定单个 WebSocket 地址
wsServers: 'ws://ip:port'

// 指定多个 WebSocket 地址
wsServers: ['ws://ip1:port', 'ws://ip2:port']

// 指定多个带权重的 WebSocket 地址
wsServers: [
    {
        wsUri: "ws://ip1:port",
        weight: 10
    },
    {
        wsUri: "ws://ip2:port",
        weight: 4
    }
]
```

##### connectionTimeout

Number 类型。 连接超时时间，单位为秒，默认值为 5

##### maxReconnectionAttempts

Number 类型。 最大重连次数，默认值为 3

##### reconnectionTimeout

Number 类型。 两次重连之间的时间，单位为秒，默认值为 5

##### traceSip

Boolean 类型。 是否在浏览器控制台打印发送和接收的 SIP 请求和响应，默认值为 false

> 更详细的说明请参考官方文档：
* [configuration 参数](https://sipjs.com/api/0.15.0/ua_configuration_parameters/)
* [transportOptions 参数](https://sipjs.com/api/0.15.0/wstransport/#configuration-options)

## 3. 方法

`start() -> register() -> unregister() -> stop()`

### start()


### stop()

### register([options])

需要先注册 UA，然后才可以接收呼叫请求。

注册成功后，系统会发送 `registered` 事件。

可选的 options 参数为一个对象，包含的属性如下：

* extraHeaders ：字符串数组，用于为每个 `REGISTER` SIP 注册信令添加额外的头字段。

如：

```
let options = {
    'extraHeaders': ['X-Foo: foo', 'X-Bar: bar']
}

ua.register(options)
```

### unregister([options])

注销 UA。

可选的 options 参数为一个对象，包含的属性如下：

* all ：Boolean 类型，注销同一 SIP 用户的所有绑定，默认值为 false。
* extraHeaders ：字符串数组，用于为每个 `REGISTER` SIP 注册信令添加额外的头字段。

如：

```
let options = {
    'all': true,
    'extraHeaders': ['X-Foo: foo', 'X-Bar: bar']
}

ua.unregister(options)
```

### isRegistered()

判断是否已经注册，返回 Boolean 类型，已经注册则返回 true，没有注册则返回 false。

### message(target, body[, options])

使用 SIP `MESSAGE` 信令来发送即时消息。


### subscribe(target, event[, options])

### invite(target[, options, modifiers])

邀请用户通话。

通过指定 options 参数，可以进行其他配置选择。

示例：

```
let session = ua.invite('alice@xiaoi.com', {
    sessionDescriptionHandlerOptions: {
        constraints: {
            audio: true,
            video: false
        }
    }
})
```

### request(method, target[, options])

发送一个 SIP 消息。

## 4. 事件

UA 对象实现了 EventEmitter 接口，它发送事件，并且会将相应的参数传给事件回调。

### registered

成功注册后发送该事件。

```
on('registered', function () {})
```

### unregistered

```
on('unregistered', function (response, cause) {})
```

### registrationFailed

注册失败时发送该事件。

```
on('registrationFailed', function (response, cause) {})
```

### invite

收到 `INVITE` 请求时发送该事件。

```
on('invite', function (session) {})
```

### message

收到 `MESSAGE` 请求时会触发该事件。sip.js 只会接收有效的 message。

```
on('message', function (message) {})
```

示例：

```
ua.on('message', (message) =>{
    console.log(message.body)
})
```

### outOfDialogReferRequested

```
on('outOfDialogReferRequested', function (referServerContext) {})
```

### transportCreated

```
on('transportCreated', function (transport) {})
```

---

参考：[SIP.UA](https://sipjs.com/api/0.15.0/ua/)
