## 安装

```
yum whatprovides *tshark*
yum install wireshark
```

## 使用

```
[root@localhost ~]# ngrep -p -q -W byline -d ens160 port 5060
interface: ens160 (192.168.160.0/255.255.255.0)
filter: ( port 5060 ) and ((ip || ip6) || (vlan && (ip || ip6)))

U 192.168.160.248:53017 -> 192.168.160.46:5060 #1
INVITE sip:1001@192.168.160.46 SIP/2.0.
Via: SIP/2.0/UDP 192.168.160.248:53017;branch=z9hG4bK-524287-1---80f5f4567a96a85a;rport.
Max-Forwards: 70.
Contact: <sip:1000@192.168.160.248:53017;rinstance=eac97f745dc9d82b>.
To: <sip:1001@192.168.160.46>.
From: "1000"<sip:1000@192.168.160.46>;tag=323b762d.
Call-ID: 100933N2EzY2Q5ZmUwNzIwNzY4MTA5ODdmMGRjYjk2YTI2ZTg.
CSeq: 1 INVITE.
Allow: OPTIONS, SUBSCRIBE, NOTIFY, INVITE, ACK, CANCEL, BYE, REFER, INFO, MESSAGE.
Content-Type: application/sdp.
Supported: replaces.
User-Agent: X-Lite release 5.7.1 stamp 100933.
Content-Length: 340.
.
v=0.
o=- 1573634230361021 1 IN IP4 192.168.160.248.
s=X-Lite release 5.7.1 stamp 100933.
c=IN IP4 192.168.160.248.
t=0 0.
m=audio 54954 RTP/AVP 9 8 120 0 84 101.
a=rtpmap:120 opus/48000/2.
a=fmtp:120 useinbandfec=1; usedtx=1; maxaveragebitrate=64000.
a=rtpmap:84 speex/16000.
a=rtpmap:101 telephone-event/8000.
a=fmtp:101 0-15.
a=sendrecv.


U 192.168.160.46:5060 -> 192.168.160.248:53017 #2
SIP/2.0 407 Proxy Authentication Required.
Via: SIP/2.0/UDP 192.168.160.248:53017;branch=z9hG4bK-524287-1---80f5f4567a96a85a;rport=53017.
From: "1000" <sip:1000@192.168.160.46>;tag=323b762d.
To: <sip:1001@192.168.160.46>;tag=9pK2BU10K6m6c.
Call-ID: 100933N2EzY2Q5ZmUwNzIwNzY4MTA5ODdmMGRjYjk2YTI2ZTg.
CSeq: 1 INVITE.
User-Agent: FreeSWITCH-mod_sofia/1.10.1-release.3~64bit.
Accept: application/sdp.
Allow: INVITE, ACK, BYE, CANCEL, OPTIONS, MESSAGE, INFO, UPDATE, REGISTER, REFER, NOTIFY, PUBLISH, SUBSCRIBE.
Supported: timer, path, replaces.
Allow-Events: talk, hold, conference, presence, as-feature-event, dialog, line-seize, call-info, sla, include-session-description, presence.winfo, message-summary, refer.
Proxy-Authenticate: Digest realm="192.168.160.46", nonce="3323839f-f472-4762-9fbe-fc223efbd490", algorithm=MD5, qop="auth".
Content-Length: 0.
.


U 192.168.160.248:53017 -> 192.168.160.46:5060 #3
ACK sip:1001@192.168.160.46 SIP/2.0.
Via: SIP/2.0/UDP 192.168.160.248:53017;branch=z9hG4bK-524287-1---80f5f4567a96a85a;rport.
Max-Forwards: 70.
To: <sip:1001@192.168.160.46>;tag=9pK2BU10K6m6c.
From: "1000"<sip:1000@192.168.160.46>;tag=323b762d.
Call-ID: 100933N2EzY2Q5ZmUwNzIwNzY4MTA5ODdmMGRjYjk2YTI2ZTg.
CSeq: 1 ACK.
Content-Length: 0.
.


U 192.168.160.248:53017 -> 192.168.160.46:5060 #4
INVITE sip:1001@192.168.160.46 SIP/2.0.
Via: SIP/2.0/UDP 192.168.160.248:53017;branch=z9hG4bK-524287-1---b6d4556474c1905c;rport.
Max-Forwards: 70.
Contact: <sip:1000@192.168.160.248:53017;rinstance=eac97f745dc9d82b>.
To: <sip:1001@192.168.160.46>.
From: "1000"<sip:1000@192.168.160.46>;tag=323b762d.
Call-ID: 100933N2EzY2Q5ZmUwNzIwNzY4MTA5ODdmMGRjYjk2YTI2ZTg.
CSeq: 2 INVITE.
Allow: OPTIONS, SUBSCRIBE, NOTIFY, INVITE, ACK, CANCEL, BYE, REFER, INFO, MESSAGE.
Content-Type: application/sdp.
Proxy-Authorization: Digest username="1000",realm="192.168.160.46",nonce="3323839f-f472-4762-9fbe-fc223efbd490",uri="sip:1001@192.168.160.46",response="03f31cf5129d3fe381358b079782a679",cnonce="31f5ae28658349ce34741b0f813a7de6",nc=00000001,qop=auth,algorithm=MD5.
Supported: replaces.
User-Agent: X-Lite release 5.7.1 stamp 100933.
Content-Length: 340.
.
v=0.
o=- 1573634230361021 1 IN IP4 192.168.160.248.
s=X-Lite release 5.7.1 stamp 100933.
c=IN IP4 192.168.160.248.
t=0 0.
m=audio 54954 RTP/AVP 9 8 120 0 84 101.
a=rtpmap:120 opus/48000/2.
a=fmtp:120 useinbandfec=1; usedtx=1; maxaveragebitrate=64000.
a=rtpmap:84 speex/16000.
a=rtpmap:101 telephone-event/8000.
a=fmtp:101 0-15.
a=sendrecv.


U 192.168.160.46:5060 -> 192.168.160.248:53017 #5
SIP/2.0 100 Trying.
Via: SIP/2.0/UDP 192.168.160.248:53017;branch=z9hG4bK-524287-1---b6d4556474c1905c;rport=53017.
From: "1000" <sip:1000@192.168.160.46>;tag=323b762d.
To: <sip:1001@192.168.160.46>.
Call-ID: 100933N2EzY2Q5ZmUwNzIwNzY4MTA5ODdmMGRjYjk2YTI2ZTg.
CSeq: 2 INVITE.
User-Agent: FreeSWITCH-mod_sofia/1.10.1-release.3~64bit.
Content-Length: 0.
.


U 192.168.150.144:58029 -> 192.168.160.2:5060 #6
.
.
..............

U 192.168.160.46:5060 -> 192.168.160.248:53017 #7
SIP/2.0 200 OK.
Via: SIP/2.0/UDP 192.168.160.248:53017;branch=z9hG4bK-524287-1---b6d4556474c1905c;rport=53017.
From: "1000" <sip:1000@192.168.160.46>;tag=323b762d.
To: <sip:1001@192.168.160.46>;tag=a0cUDpj4gFBSr.
Call-ID: 100933N2EzY2Q5ZmUwNzIwNzY4MTA5ODdmMGRjYjk2YTI2ZTg.
CSeq: 2 INVITE.
Contact: <sip:1001@192.168.160.46:5060;transport=udp>.
User-Agent: FreeSWITCH-mod_sofia/1.10.1-release.3~64bit.
Accept: application/sdp.
Allow: INVITE, ACK, BYE, CANCEL, OPTIONS, MESSAGE, INFO, UPDATE, REGISTER, REFER, NOTIFY, PUBLISH, SUBSCRIBE.
Supported: timer, path, replaces.
Allow-Events: talk, hold, conference, presence, as-feature-event, dialog, line-seize, call-info, sla, include-session-description, presence.winfo, message-summary, refer.
Content-Type: application/sdp.
Content-Disposition: session.
Content-Length: 224.
Remote-Party-ID: "1001" <sip:1001@192.168.160.46>;party=calling;privacy=off;screen=no.
.
v=0.
o=FreeSWITCH 1573606694 1573606695 IN IP4 192.168.160.46.
s=FreeSWITCH.
c=IN IP4 192.168.160.46.
t=0 0.
m=audio 27548 RTP/AVP 9 101.
a=rtpmap:9 G722/8000.
a=rtpmap:101 telephone-event/8000.
a=fmtp:101 0-16.
a=ptime:20.


U 192.168.160.248:53017 -> 192.168.160.46:5060 #8
ACK sip:1001@192.168.160.46:5060;transport=udp SIP/2.0.
Via: SIP/2.0/UDP 192.168.160.248:53017;branch=z9hG4bK-524287-1---016ea3610d27b20e;rport.
Max-Forwards: 70.
Contact: <sip:1000@192.168.160.248:53017;rinstance=eac97f745dc9d82b>.
To: <sip:1001@192.168.160.46>;tag=a0cUDpj4gFBSr.
From: "1000" <sip:1000@192.168.160.46>;tag=323b762d.
Call-ID: 100933N2EzY2Q5ZmUwNzIwNzY4MTA5ODdmMGRjYjk2YTI2ZTg.
CSeq: 2 ACK.
User-Agent: X-Lite release 5.7.1 stamp 100933.
Content-Length: 0.
.


U 192.168.160.248:53017 -> 192.168.160.46:5060 #9
.
.
..............
```
