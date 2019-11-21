Flite（Festival-Lite） 是 Festival 的简易版，Festival 是一款开源的语音合成引擎，它仅支持英文。

Flite 支持 awb,kal,rms,slt 四种嗓音。

```
// 方式一：直接指定引擎和嗓音
originate user/1000 &speak(flite|kal|Hello,welcome)
<action application="speak" data="flite|kal|Hello,welcome" />

// 方式二：使用通道变量指定引擎和嗓音
<action application="set" data="tts_engine=flite"/>
<action application="set" data="tts_voice=kal"/>
<action application="speak" data="Hello,welcome" />
```