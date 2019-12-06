* 1. 初始化用户代理（UA）并连接 FreeSwitch 服务器
* 2. 改变状态为就绪（注册上线）
* 3. 准备 audio 标签播放远端的音频
* 4. 监听并处理呼入
* 5. 实现外呼功能
    * 5.1 使用 `invite(target[, options, modifiers])` 方法外呼
    * 5.2 取消和挂断通话
* 6. 改变状态为未就绪并下线

---

## 1. 初始化用户代理（UA）并连接 FreeSwitch 服务器

sip.js 中使用 UA（用户代理）来代表一个用户执行各种操作。

用户代理（UA）与 SIP 用户地址相关联，并代表该用户执行发送和接收 SIP 请求的操作。

UA 可以注册以接收传入的请求，以及创建和发送出站消息。

UA 还维护传输信令的 WebSocket。

使用 `SIP.UA([configuration])` 方法初始化一个 UA：

```
let config = {
    uri: '1010@sip.xiaoi.com',
    transportOptions: {
        wsServers: 'sip.xiaoi.com',
        traceSip: true,
    },
    authorizationUser: '1010',
    password: '1234',
    register: true,
}
let ua = new SIP.UA(config)

ua.start()
```

设置 traceSip 为 true，sip.js 就会在浏览器的 console 控制台打印发送和接收的 SIP 信令。
 
设置 register 为 fasle 使得调用 `ua.start()` 以后不会自动调用 `ua.register()` 方法，而是需要主动调用 `ua.register()` 方法改变状态为就绪；而设置为 true 就会自动 register 并将状态变为就绪状态。

> 就绪状态是指可以拨打和接听电话的状态。

最后调用 `ua.start()` 方法连接到 FreeSwitch 服务器。

## 2. 改变状态为就绪（注册上线）

调用 `register([options])` 方法改变用户状态为就绪状态，监听 `registered、unregistered、registrationFailed` 事件来监控注册是否成功：

```
// 如果初始化 UA 时 register 设置为 true，则会自动 register，而不需要再调用该方法。
// ua.register()

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

当接收到 registered 事件，即表示用户状态变为了就绪状态，现在就可以拨打和处理呼入请求。

当接收到 registrationFailed 事件，则表明没有就绪，请查看控制台错误输出并解决相应的问题。

## 3. 准备 audio 标签播放远端的音频

```
<audio autoplay id="remoteAudio" />
```

## 4. 监听并处理呼入

监听 invite 事件以接收呼入请求。

获得呼入请求 session 对象后可以调用 `session.accept()` 接受请求或调用 `session.reject` 拒绝请求。同时还需要监听 session 的 cancel、failed、bye 和 terminate 事件，这些事件为：远端取消、通话建立失败、远端挂断、通话结束。

远端的电话号码通过 `session.session.remoteURI.user` 属性获取。

还需要监听 session 的 `trackAdded` 事件将远端音频信息添加到 audio 标签，以播放远端的音频。

```
ua.on('invite', (session) =>{

    // 获取远端的电话号码
    //session.session.remoteURI.user

    // 接受请求
    // session.accept()
    // 拒绝请求
    // session.reject()

    // 监听 session 的 cancel、failed、bye 和 terminate 事件
    this.session.on('cancel', () => {
        console.log("对方已取消")
    })
    this.session.on('failed', (response, cause) => {
        console.log(`建立通话失败, response: ${response}, cause=${cause}`)
    })
    this.session.on('bye', (request) => {
        console.log(`通话已结束: ${request}`)
    })
    this.session.on('terminate', (message, cause) => {
        console.log(`对方已挂断,message : ${message}, cause=${cause}`)
    })

    // 将音频信息添加到 audio 标签，以播放远端的音频
    this.session.on('trackAdded', () => {
        let pc = this.session.sessionDescriptionHandler.peerConnection

        // remoteStream
        let remoteStream = new MediaStream()
        pc.getReceivers().forEach(receiver => {
        remoteStream.addTrack(receiver.track)
        })
        document.getElementById('remoteAudio').srcObject = remoteStream

        // // localStream
        // let localStream = new MediaStream()
        // pc.getSenders().forEach(sender => {
        //   localStream.addTrack(sender.track)
        // })
        // document.getElementById('localAudio').srcObject = localStream
    })
})
```

## 5. 实现外呼功能

#### 5.1 使用 `invite(target[, options, modifiers])` 方法外呼

外呼之前先调用 UA.isRegistered() 方法判断是否已经就绪。

调用 `invite(target[, options, modifiers])` 方法邀请对方通话，该方法会返回一个 session 对象；获得 session 对象后需要监听 accepted、rejected、failed、bye 和 terminate 事件，分别表示远端已接受、已拒绝、对话建立失败、远端已挂断和通话结束事件。

还需要监听 session 的 `trackAdded` 事件将远端音频信息添加到 audio 标签，以播放远端的音频。

```
if (this.ua.isRegistered()) {
    // 邀请对方通话
    this.session = ua.invite('1001@sip.xiaoi.com', {
        sessionDescriptionHandlerOptions: {
            constraints: {
                audio: true,
                video: false
            }
        }
    })

    // 监听 accepted、rejected、failed、bye 和 terminate 事件
    this.session.on('accepted', (data) => {
        console.log(`对方已接受: ${data}`)
    })
    this.session.on('rejected', (response, cause) => {
        console.log(`对方已拒绝, response: ${response}, cause=${cause}`)
    })
    this.session.on('failed', (response, cause) => {
        console.log(`呼叫失败, response: ${response}, cause=${cause}`)
    })
    this.session.on('bye', (request) => {
        console.log(`对方已挂断: ${request}`)
    })
    this.session.on('terminate', (message, cause) => {
        console.log(`通话已结束,message : ${message}, cause=${cause}`)
    })

    // 监听 session 的 `trackAdded` 事件将远端音频信息添加到 audio 标签，以播放远端的音频
    this.session.on('trackAdded', () => {
        let pc = this.session.sessionDescriptionHandler.peerConnection

        // remoteStream
        let remoteStream = new MediaStream()
        pc.getReceivers().forEach((receiver) => {
        remoteStream.addTrack(receiver.track)
        })
        document.getElementById('remoteAudio').srcObject = remoteStream

        // // localStream
        // let localStream = new MediaStream()
        // pc.getSenders().forEach((sender) => {
        //   localStream.addTrack(sender.track)
        // })
        // document.getElementById('localAudio').srcObject = localStream
    })
} else {
    console.log('请先签入')
}
```

使用 constraints 参数来添加音视频约束，该参数遵循 WebRTC 的定义。

#### 5.2 取消和挂断通话

使用 session 对象的 `cancel()、terminate()` 方法来取消和挂断通话：

```
// 取消通话
cancelCall() {
    if (this.session) {
        this.session.cancel()
        console.log('通话已取消')
    }
}

// 挂断通话
endCall () {
    if (this.session) {
        this.session.terminate()
        console.log('通话已结束')
    }
}
```

## 6. 改变状态为未就绪并下线

调用 `unregister([options])` 方法改变状态为未就绪，并调用 `stop()` 方法断开与 FreeSwitch 的连接：

```
ua.unregister()

ua.stop()
```
