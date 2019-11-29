为了在浏览器中连接 FreeSWTICH 以实现拨打 IP 电话，起初的方案是使用浏览器的 ActiveX、Java Applect 以及 Flash 等插件实现，典型的代表实现有：[Red5 Media Server](red5.org)、[Wowza Media Server](wowza.com)。而伴随着这些插件技术的没落，以及 WebRTC 的开源、流行和高覆盖率的浏览器支持，现阶段通过浏览器拨打 VoIP 电话已经过度到使用现代的、基于 HTML5 技术的 WebRTC 技术栈来实现。

web 应用不能像桌面应用一样通过监听某一个端口，配合 NAT 打洞技术来实现和服务器的双向数据交换，所以在浏览器中为了实现和 FreeSWTICH 服务器的信令交换，需要借助于 WebSocket 建立的双向数据交换通道；而底层的音视频能力，包括音视频设备管理、音视频数据采集、编解码、加密、传输等，这些都需要借助于谷歌开源的 WebRTC 项目；类似 JsSIP 以及 sip.js 等项目使用原生的 JavaScript 语言实现了 sip 信令规范。所有的这些技术整合在一起便有了现代的基于 WebSocket 和 WebRTC 的浏览器 VoIP 电话的实现。

信令通道有了，音视频采集、编码、传输能力有了，sip 信令规范实现也有了，基于这些技术在浏览器中拨打 IP 电话也就水到渠成了。以使用最广泛的 sip.js 为例，架构如下：

![]()
