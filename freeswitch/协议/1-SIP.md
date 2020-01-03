## 基本方法和头域

SIP 定义了6种基本方法：

* REGISTER ：注册联系信息
* INVITE   ：初始化一个会话
* ACK      ：对 INVITE 消息的最终响应
* CANCEL   ：取消一个等待处理或正在处理的请求
* BYE      ：终止一个会话
* OPTIONS  ：查询服务器和能力，也可以用作 ping 测试

此外，SIP 还定义了一些扩展方法，如：SUBSCRIBE、NOTIFY、MESSAGE、REFER、INFO 等。

无论是基本方法还是扩展方法，所有 SIP 消息都必须包含以下6个头域：

* Call-ID      ：用于区分不同会话的唯一标志
* Cseq         ：顺序号，用于在同一会话中区分事务
* From         ：说明请求来源
* To           ：说明请求接受方
* Max-Forwards ：限制跳跃点数和最大转发次数
* Via          ：描述请求消息经过的路径

其他的一些头域如下：

* Contact        ：
* Allow          ：
* Content-Type   ：
* Content-Length ：
* User-Agent     ：
*

一个示例：

```
INVITE sip:1011@182.61.24.127 SIP/2.0
Via: SIP/2.0/WSS p2pp6abp6b0l.invalid;branch=z9hG4bK8934714
To: <sip:1011@182.61.24.127>
From: <sip:1010@182.61.24.127>;tag=r9ahqk5b1q
CSeq: 1 INVITE
Call-ID: c7ct6noabj9nbii01176
Max-Forwards: 70
Contact: <sip:77nu9po7@p2pp6abp6b0l.invalid;transport=ws;ob>
Allow: ACK,CANCEL,INVITE,MESSAGE,BYE,OPTIONS,INFO,NOTIFY,REFER
Supported: outbound
User-Agent: SIP.js/0.15.8
Content-Type: application/sdp
Content-Length: 2111

v=0
o=- 8193583674973040482 2 IN IP4 127.0.0.1
s=-
t=0 0
a=group:BUNDLE 0
a=msid-semantic: WMS E1W6Il2cusAs5ZQDbL5swdx44eQjJtIqtEbm
m=audio 55585 UDP/TLS/RTP/SAVPF 111 103 104 9 0 8 106 105 13 110 112 113 126
c=IN IP4 192.168.160.248
a=rtcp:9 IN IP4 0.0.0.0
a=candidate:1496368476 1 udp 2122260223 192.168.160.248 55585 typ host generation 0 network-id 1
a=candidate:553123156 1 udp 2122194687 192.168.150.235 50969 typ host generation 0 network-id 2 network-cost 10
a=candidate:397621676 1 tcp 1518280447 192.168.160.248 9 typ host tcptype active generation 0 network-id 1
a=candidate:1853096356 1 tcp 1518214911 192.168.150.235 9 typ host tcptype active generation 0 network-id 2 network-cost 10
a=ice-ufrag:JQdF
a=ice-pwd:YqLbjmG4r4SX74B23GUHb1G1
a=ice-options:trickle
a=fingerprint:sha-256 5A:AA:00:06:2A:83:9E:E9:FE:E3:9C:3C:AF:07:A6:89:67:AC:41:84:03:22:F6:B2:A9:CB:62:ED:1F:41:ED:07
a=setup:actpass
a=mid:0
a=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level
a=extmap:2 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time
a=extmap:3 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01
a=extmap:4 urn:ietf:params:rtp-hdrext:sdes:mid
a=extmap:5 urn:ietf:params:rtp-hdrext:sdes:rtp-stream-id
a=extmap:6 urn:ietf:params:rtp-hdrext:sdes:repaired-rtp-stream-id
a=sendrecv
a=msid:E1W6Il2cusAs5ZQDbL5swdx44eQjJtIqtEbm 6461818a-5e57-4d23-8842-2cc8ecf2c3ec
a=rtcp-mux
a=rtpmap:111 opus/48000/2
a=rtcp-fb:111 transport-cc
a=fmtp:111 minptime=10;useinbandfec=1
a=rtpmap:103 ISAC/16000
a=rtpmap:104 ISAC/32000
a=rtpmap:9 G722/8000
a=rtpmap:0 PCMU/8000
a=rtpmap:8 PCMA/8000
a=rtpmap:106 CN/32000
a=rtpmap:105 CN/16000
a=rtpmap:13 CN/8000
a=rtpmap:110 telephone-event/48000
a=rtpmap:112 telephone-event/32000
a=rtpmap:113 telephone-event/16000
a=rtpmap:126 telephone-event/8000
a=ssrc:3098938500 cname:D8PG2gHcDeTeT3Kb
a=ssrc:3098938500 msid:E1W6Il2cusAs5ZQDbL5swdx44eQjJtIqtEbm 6461818a-5e57-4d23-8842-2cc8ecf2c3ec
a=ssrc:3098938500 mslabel:E1W6Il2cusAs5ZQDbL5swdx44eQjJtIqtEbm
a=ssrc:3098938500 label:6461818a-5e57-4d23-8842-2cc8ecf2c3ec
```

一个空行把 SIP Header 和 Body 隔开。

## SIP 承载

SIP 支持 TCP 和 UDP 承载。RFC3261 规定任何 SIP UA 必须同时支持 TCP 和 UDP。我们常见的 SIP 都是通过 UDP 承载的。

现在又有了 SIP over WebSocket，当前大部分浏览器都实现了 WebSocket，从而可以通过它承载 SIP；同时浏览器也实现了 WebRTC，这意味着可以通过浏览器与普通 SIP 话机（甚至是 PSTN）进行音视频通话了。

## 常见的请求和响应

#### 请求

```
REGISTER sip:182.61.24.127 SIP/2.0

INVITE sip:1001@192.168.1.2 SIP/2.0

NOTIFY sip:77nu9po7@p2pp6abp6b0l.invalid;transport=ws SIP/2.0

ACK sip:1011@182.61.24.127 SIP/2.0
```

#### 响应

```
SIP/2.0 401 Unauthorized

SIP/2.0 200 OK

SIP/2.0 407 Proxy Authentication Required

SIP/2.0 100 Trying

SIP/2.0 488 Not Acceptable Here

SIP/2.0 481 Call/Transaction Does Not Exist
```

