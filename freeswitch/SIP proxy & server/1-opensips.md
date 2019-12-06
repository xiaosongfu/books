https://www.opensips.org/

* download site: https://opensips.org/pub/opensips/
* latest stable release: https://opensips.org/pub/opensips/latest/

---

OpenSIPS has to offer many important and interesting features. To mention some of the most important ones:

* SIP registrar server
* SIP router / proxy (lcr, dynamic routing, dialplan features)
* SIP redirect server
* SIP presence agent
* SIP back-to-back User Agent
* SIP IM server (chat and end-2-end IM)
* SIP to SMS gateway (bidirectional)
* SIP to XMPP gateway for presence and IM (bidirectional)
* SIP load-balancer or dispatcher
* SIP front end for gateways/asterisk
* SIP NAT traversal unit
* SIP application server

---

## 安装

```
wget https://opensips.org/pub/opensips/latest/opensips-3.0.1.tar.gz


```


## opensips-cli

从 OpenSIPS 3.0 开始，旧的 opensipsctl 工具已被弃用（作为功能和软件），并由新的 opensips-cli 取代 -- 一个功能强大的Python3 应用程序，可让您与 OpenSIPS 进行智能交互，以调用高级工具，例如作为诊断或跟踪程序，以及执行数据库设置。

参考：https://blog.opensips.org/2019/03/13/new-opensips-cli-tool-for-the-new-management-interface-in-opensips-3-0/

