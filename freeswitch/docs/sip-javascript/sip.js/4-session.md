## 1. 概述

SIP.Session 类表示 WebRTC 媒体（音频/视频）会话。它可以由本地用户或远端用户初始化。

会话是通过 SIP `INVITE` 信令创建的。SIP.Session 类实现了 `SIP.ClientContext` 或 `SIP.ServerContext`，具体取决于它们是呼出还是呼入 INVITE 请求的结果。

SIP.Session 的构造方法仅供内部调用。对于呼出，Session 通过 `SIP.UA.inviate(target[, options, modifiers])` 方法创建；对于呼入，Session 通过 SIP.UA 的 `invite` 事件创建。

属性：

```
startTime
endTime
ua
method
sessionDescriptionHandler
request
localIdentity
remoteIdentity
data
```

方法：

```
dtmf(tone[, options])
terminate([options])
bye([options])
hold([options, modifiers])
unhold([options, modifiers])
reinvite([options, modifiers])
refer(target[, options])

// 呼出 Session 特有的方法
cancel([options])

// 呼如 Session 特有的方法
progress([options])
accept([options, modifiers])
reject([options])
reply([options])
```

事件：

```
progress
accepted
rejected
failed
terminated
cancel
reinvite
referRequested
replaced
dtmf
SessionDescriptionHandler-created
directionChanged
trackAdded
bye
```

## 2. 属性

### startTime

Date 类型，会话开始的时间，`accepted` 事件发生时赋值。

### endTime

Date 类型，会话结束的事件，`terminated` 事件发生时赋值。

### ua

### method

String 类型，始终为 `INVITE`。

### sessionDescriptionHandler

默认为 `SIP.Web.SessionDescriptionHandler`。

为了保持信令与媒体的分离，会话将所有媒体功能委托给一个单独的 SessionDescriptionHandler 对象。SessionDescriptionHandler 处理所有 SDP 描述，SDP 协商，ICE 候选者收集等工作。

默认情况下，此对象配置为使用WebRTC。在Node.js，移动应用或其他平台中使用SIP.js时，可以使用UA的sessionDescriptionHandlerFactory配置参数定义自定义SessionDescriptionHandler 。

### request

### localIdentity

### remoteIdentity

### data

应用程序定义自定义数据的空对象。

## 3. 方法

### 3.1 通用的方法

##### dtmf(tone[, options])

使用 SIP `INFO` 信令发送一个或多个 DTMF​​。

##### terminate([options])

终止当前会话。

根据会话的状态，此功能可能会发送 `CANCEL` 信令，非2xx 最终响应，`BYE` 信令甚至根本没有信令。不同的行为将导致发出不同的事件，但它们最终都会触发 `terminated` 事件。

##### bye([options])


##### hold([options, modifiers])


##### unhold([options, modifiers])


##### reinvite([options, modifiers])

##### refer(target[, options])

发送一个 REFER 信令。当 A 和 B 在通话，而 A 想将 B 转接到 C 时，就会发生 REFER，这叫转接，转接分为盲转和协商转。

A 在连接 B 与 C 之前，先建立了与 C 的会话，就为协商转；如果 A 直接让 B 和 C 建立会话就是盲转。

### 3.2 呼出 Session 的方法

##### cancel([options])

请注意，cancel() 方法会导致会话终止，但不会立即终止，而是发送一个 `CANCEL` 请求。根据请求的时机，这通常会触发一个拒绝响应（比如 `rejected`，`failed` 和 `terminated` 事件）。如果远端已经接受了邀请，则必须发送 `BYE` 信令，这会触发 `accepted`，`bye` 和 `terminated` 事件。
 
### 3.3 呼如 Session 的方法

##### progress([options])


##### accept([options, modifiers])

 
##### reject([options])


##### reply([options])

 
## 4. 事件

`SIP.Session` 定义了一系列的事件，每一个事件都运行定义一个回调方法，以便当事件发生时执行。

### progress

每次收到临时响应（100-199）都会触发该事件。

```
on('progress', function (response) {})
```

response 参数为 SIP.IncomingResponse 类型。

### accepted

每次收到成功的最终响应（200-299）都会触发该事件。

```
on('accepted', function (data) {})
```

data 参数有如下属性：

* code : 收到的状态码，位于 200-299 之间
* response : SIP.IncomingResponse

### rejected

每次收到不成功的最终响应（300-699）都会触发该事件。注意，对方拒绝后还会依次触发 `failed` 和 `terminated` 事件。

```
on('rejected', function (response, cause) {})
```

* response 参数为 SIP.IncomingResponse 类型
* cause 为 String 类型，是与 SIP 响应码关联的原因短语。

### failed

当请求失败（无论是由于最终响应失败还是由于超时，传输或其他错误）时触发。但该事件只会由还没有 accepted 的会话触发。如果已经 accepted 了，则会触发 bye 或者 terminated 事件。当然触发 failed 事件后也会触发 terminated 事件。

```
on('failed', function (response, cause) {})
```

* response 参数为 SIP.IncomingResponse 类型
* cause 为 String 类型，是与 SIP 响应码关联的原因短语。

### terminated

当会话被销毁之后触发，无论会话是否被 accepted。

无论会话已明确被拒绝，还是由于技术问题而失败还是以 `BYE` 请求结束，都将触发 terminated 事件。

```
on('terminated', function(message, cause) {})
```

* message 参数为 SIP.IncomingResponse 类型
* cause 为 String 类型

### cancel

当客户端取消会话时触发。

请注意后面不会立即接着触发 rejected, failed, 或者 terminated 事件。

根据取消的时间，可能会触发拒绝响应，或者已经接受的会话会立即终止。这些情况下，rejected 与 failed 或 bye 事件会按照预期触发，terminated 事件也会随后发生。

```
on('cancel', function() {})
```

### bye

发送和接收 BYE 信令时都会触发该事件。

BYE 信令也会触发 terminated 事件。

```
on('bye', function(request) {})
```

request 参数为 SIP.IncomingRequest 类型。

### reinvite

在已经建立的会话上收到邀请时触发。

```
on('reinvite', function(session) {})
```

### referRequested

REFER 信令发送或接收时触发。

如果没有监听该事件，则 sip.js 会自动尝试处理 REFER 信令。如果需要自己处理可以参考例子。

```
on('referRequested', function(context) {})
```

手动处理例子：

```
session.on('referRequested', function(context) {
  // Outgoing REFER Request
  if (context instanceof SIP.ReferClientContext) {
    // Set up event listeners
    context.on(..);
    return;
  }
  // Incoming REFER Request
  if (context instanceof SIP.ReferServerContext) {
    // Set up event listeners
    context.on(...);
    context.accept();
    return;
  }
});
```

### replaced

当有一个替换的 INVITE 请求到来是，当前会话会被结束并且会被一个新的会话替换。使用此事件来清理旧会话，并将所有UI元素与新会话无缝关联。此事件会在当前会话终止和新会话接受之前立即触发。

```
on('replaced', function (newSession) {})
```

### dtmf

发送和接收 DTMF 事件时触发。

```
.on('dtmf', function(request, dtmf) {})
```

### SessionDescriptionHandler-created

当 Session Description Handler 被创建时，由当前会话触发。该事件总是会被触发，即使使用自定义的 Session Description Handler。

```
on('SessionDescriptionHandler-created', function() {})
```

### directionChanged

由当前会话的 Session Description Handler Observer 触发。对于默认的 WebRTC Session Description Handler，当 offer answer 开始协商时，在 Session Description Handler 上触发。

```
on('directionChanged', function() {})
```

### trackAdded

由当前会话的 Session Description Handler Observer 触发。对于默认的 WebRTC Session Description Handler，当 track 被添加到 peer connection 上时触发。

```
on('trackAdded', function() {})
```

---

参考：[SIP.Session](https://sipjs.com/api/0.15.0/session/)
