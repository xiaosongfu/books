## 安装

```
yum install ngrep
```

## 使用

```
[root@localhost ~]# tshark -i ens160 port 5060
Running as user "root" and group "root". This could be dangerous.
Capturing on 'ens160'
  1 0.000000000 192.168.160.248 -> 192.168.160.46 SIP/SDP 963 Request: INVITE sip:9196@192.168.160.46 |
  2 0.001190027 192.168.160.46 -> 192.168.160.248 SIP 900 Status: 407 Proxy Authentication Required |
  3 0.001964702 192.168.160.248 -> 192.168.160.46 SIP 381 Request: ACK sip:9196@192.168.160.46 |
  4 0.002300023 192.168.160.248 -> 192.168.160.46 SIP/SDP 1227 Request: INVITE sip:9196@192.168.160.46 |
  5 0.022617547 192.168.160.46 -> 192.168.160.248 SIP 395 Status: 100 Trying |
  6 9.290737632 192.168.150.144 -> 192.168.160.2 UDP 60 Source port: 58029  Destination port: sip
  7 10.065610680 192.168.160.46 -> 192.168.160.248 SIP/SDP 1178 Status: 200 OK |
  8 10.071321057 192.168.160.248 -> 192.168.160.46 SIP 518 Request: ACK sip:9196@192.168.160.46:5060;transport=udp |
  9 20.758010963 192.168.160.248 -> 192.168.160.46 UDP 60 Source port: 53017  Destination port: sip
 10 27.381826515 192.168.160.248 -> 192.168.160.46 SIP 801 Request: BYE sip:9196@192.168.160.46:5060;transport=udp |
 11 27.383949209 192.168.160.46 -> 192.168.160.248 SIP 550 Status: 200 OK |
```
