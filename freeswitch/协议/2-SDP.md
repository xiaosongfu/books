## 概述

SIP 负责建立和释放会话，一般来说，会话会包含相关的媒体能力和网络信息，媒体能力和网络信息都是通过 SDP 协议来描述的。

SDP 一般不单独使用，它与 SIP 配合使用时会放到 SIP 的 Body 里面。

SDP 是一种规范，包含了收发流的地址，音频、视频的端口号，媒体能力（音视频编码格式）等等信息。

通过 offer SDP 告诉对方自己支持的音视频编码格式，由对方结合自己的音视频编码能力，选择出最终使用的音视频编码格式，并通过 answer SDP 告诉第一方。

媒体协商的过程称为 SOA（Service Offer and Answer），即首先有一方提议它支持的 Codec 类型，由另一方选择。

## SDP 各属性

SIP 发送 INVITE 方法请求请求时会携带 SDP 信息：

```
INVITE sip:1000@192.168.1.1 SIP/2.0
...
Content-type: applcation/sdp
...
一个空行!!!!
v=0
o=- 1234234892340 IN  IP4 192.168.1.1
s=Bria 2 release 3.5.0b stamp 69410
c=IN IP4 192.168.1.1
b=AS:2064
t= 0 0
m=audio 50453 RTP/AVP 8 0 98 101
a=rtpmap:98 ILBC/8000
a=rtpmap:101 telephone-event/8000
a=fmtp:101 0-15
a=sendrecv
m=video 52975 RTP/AVP 123
b=TIAS:2000000
a=rtpmap:123 H264/90000
a=fmtp:123 profile-level-id=428014;packetization-mode=0
a=rtcp-fb:* nack pli
a=sendrecv
```

* v  ：version，表示协议的版本号
* o  ：origin，表示源。各项的含义依次是：username sess-id sess-version nettype addrtype unicase-address
* s  ：session name，表示本 SDP 所描述的 Session 的名称
* c  ：connection data，连接数据，包含网络类型和网络地址，以后的 RTP 流就会发到该地址上。注意：在 NAT 环境中我们要解决透传问题就是要看这个地址
* b  ：bandwidth type，带宽类型
* t  ：timing，起止时间。0 表示无限。
* m  ：media type，媒体类型。包含音视频类型、端口号、传输协议、支持的 Codec 类型。支持的编码类型分为静态编码和动态编码，动态编码需要使用后面的 `a=` 来说明。
* a  ：attributes，属性，它用于描述上面音视频的属性。

`a=sendrecv` 表示该媒体流可用于发和收，其他的还有sendonly（仅发）、recvonly（仅收）、inactive（不收不发）。

`a=ptime:20` 表示 RTP 数据包的打包时间，默认就是 20ms。
