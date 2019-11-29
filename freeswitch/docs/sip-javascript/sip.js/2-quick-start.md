## 1. 初始化用户代理（UA）并连接 FreeSwitch 服务器

sip.js 中使用 UA（用户代理）来代表一个用户执行各种操作。

使用 `SIP.UA([configuration])` 方法初始化一个 UA：

```
let config = {
    uri: '1010@sip.xiaoi.com',
    transportOptions: {
        wsServers: 'sip.xiaoi.com',
        traceSip: true,
    },
    register: false,
}
let ua = new SIP.UA(config)

ua.start()
```

设置 traceSip 为 true，sip.js 就会在浏览器的 console 控制台打印发送和接收的 SIP 信令。

设置 register 为 fasle 使得调用 `ua.start()` 以后不会自动调用 `ua.register()` 方法，而是需要主动调用 `ua.register()` 方法改变状态为就绪。

最后调用 `ua.start()` 方法连接到 FreeSwitch 服务器。

## 2. 改变状态为就绪（注册上线）

调用 `register([options])` 方法改变用户状态为就绪状态，监听 `registered、unregistered、registrationFailed` 事件来监控注册是否成功：

```
ua.register()

ua.on('registered', () => {
    console.log('注册成功')
})

ua.on('registrationFailed',  (response, cause) =>{
    console.log(`注册失败: response: ${response}, cause=${cause}`)
})

ua.on('unregistered', (response, cause) =>{
    console.log(`就绪状态发生改变: response: ${response}, cause=${cause}`)
})
```

用户状态变为就绪后就可以接收并处理呼入请求。

## 3. 监听并处理呼入

监听 invite 事件以接收呼入请求：

```
ua.on('invite', (session) =>{

    // 接受请求

    // 拒绝请求


})
```

## 4. 呼出

调用 `invite(target[, options, modifiers])` 方法邀请对方通话：

```
let session = ua.invite('1001@sip.xiaoi.com', {
    sessionDescriptionHandlerOptions: {
        constraints: {
            audio: true,
            video: false
        }
    }
})
```

使用 constraints 参数来添加音视频约束，该参数遵循 WebRTC 的定义。



## 5. 改变状态为未就绪并下线

调用 `unregister([options])` 方法改变状态为未就绪，并调用 `stop()` 方法断开与 FreeSwitch 的连接：

```
ua.unregister()

ua.stop()
```
