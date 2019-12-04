## Q1: 报错：sip.invitecontext.sessionDescriptionHandler | unable to acquire streams

A: 

Chrome 浏览器禁止非 Https 的网站访问麦克风，解决办法：`/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --unsafely-treat-insecure-origin-as-secure="http://localhost"`

更多信息请参考：
* https://www.jianshu.com/p/ea4424bf6993

## Q2: 通话建立失败，SIP 头为：SIP/2.0 488 Not Acceptable Here

A:

错误原因：语音编解码不匹配，SDP 协商不成功

更多信息请参考：
* https://blog.csdn.net/qq_40572277/article/details/90900868
