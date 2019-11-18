## STUN 协议

STUN 存在的目的就是进行 NAT 穿越。
STUN 是典型的 C/S 架构，客户端发送请求，服务端进行响应。

RFC 3489/STUN : Simple Traversal of UDP  Through NAT
RFC 5389/STUN : Session Travelsal Utilites for NAT

header 长度为20字节，body 中可以有0个或者多个 attribute。
