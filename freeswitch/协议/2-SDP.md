SIP 发送 INVITE 方法请求请求时会携带 SDP 信息：

```
INVITE sip:1000@192.168.1.1 SIP/2.0

...

Content-type: applcation/sdp

...

一个空行
v=0
0=- 1234234892340 IN  IP4 192.168.1.1
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

SDP 是一种规范，包含了发送流的地址，音频、视频的端口号，媒体能力（音视频编码格式）等等信息。

通过 offer SDP 告诉对方自己支持的音视频编码格式，由对方结合自己的音视频编码能力，选择出最终使用的音视频编码格式，并通过 answer SDP 告诉第一方。


