## 1. 概述

SIP Messages 包括：

* SIP.IncomingMessage
* SIP.IncomingRequest
* SIP.IncomingResponse
* SIP.OutgoingRequest

他们都有自己的构造方法，但他们也有很多相似的属性和方法，所以把他们放在一起讲。

属性：

```
logger
ua
headers
method
body
from
to
callId
cseq
ruri
extraHeaders
statusCode
statusCode
reasonPhrase
reasonPhrase
data
via
viaBranch
fromTag
toTag
transport
serverTransaction
```

方法：

```
setHeader(name, value)
addHeader(name, value)
getHeader(name)
getHeaders(name)
hasHeader(name)
parseHeader(name, idx)
s(name, idx)
toString()
reply(code, reason, extraHeaders, body, onSuccess, onFailure)
reply_sl(code, reason)
```

## 属性


## 方法




---

参考：[SIP Messages](https://sipjs.com/api/0.15.0/sipMessage/)
