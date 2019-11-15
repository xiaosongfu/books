MRCP 是一个支持访问网络上的媒体资源的协议。

UniMRCP 是 MRCP 的一个开源实现。

mod_unimrcp 是在 UniMRCP 基础上在 FreeSwitch 中实现的一个模块，它同时支持 TTS 和 ASR。

```
<action application="set" data="tts_engine=unimrcp:ttsServerAddr" />
```


