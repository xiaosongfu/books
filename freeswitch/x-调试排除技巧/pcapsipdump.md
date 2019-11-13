pcapsipdump 是专门针对 sip 的抓包工具，它会将一路通话的 sip 和 rtp 包保存到一个文件夹里面。

```
pcapsipdump -i eth0 -d /tmp/sipdump/
```
