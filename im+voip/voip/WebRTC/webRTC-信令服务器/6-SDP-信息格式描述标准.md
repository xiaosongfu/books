SDP 只是一种信息格式的描述标准，它本身不属于传输协议，但是可以被其他传输协议用来交换必要的信息。

## SDP 例子

```
v=0
o=
s=
c=IN IP4 192.168.1.2
t=0 0
m=audio 45664 RTP/AVP 0
b=RS:0
b=RR:0
a=rtpmap:0 PCMU/8000
a=candidate:1 1 UDP 32435453421 10.0.1.1 8998 type host
a=candidate:2 1 UDP 12783423003 192.1.2.3 45664 type srflx raddr 10.0.1.1 rport 8998
```
