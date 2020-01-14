
playback、read 和 paly_and_get_digits 必须加上 say；speak 则不需要 say。这里的 say 是 FS 的应用。

---

## 使用 playback 实现 tts

```
<action application="playback" data="say:tts_commandline:Ting-Ting:欢迎使用FS" />

等价于

<action application="set" data="tts_engine=tts_commandline" />
<action application="set" data="tts_voice=Ting-Ting" />
<action application="playback" data="say:欢迎使用FS" />
```

```
<action application="playback" data="say:flite:kal:欢迎使用FS" />

等价于

<action application="set" data="tts_engine=flite" />
<action application="set" data="tts_voice=kal" />
<action application="playback" data="say:欢迎使用FS" />
```

## 使用 read 和 paly_and_get_digits 实现 tts 并获取 DTMF

read 和 paly_and_get_digits 可以使用 playback 来播放 tts，所以需要这样使用：

```
<action application="read" data="... say:tts_commandline:Ting-Ting:welcom ..." />
<action application="paly_and_get_digits" data="... say:tts_commandline:Ting-Ting:welcome ..." />
```

等价于 先设置通道变量，然后直接使用 `say:welcome`。

---

# flite 引擎、tts_commandline 引擎和 mrcp 引擎

```
<action application="set" data="tts_engine=flite"/>
<action application="set" data="tts_voice=kal"/>
<action application="speak" data="Hello,welcome" />
或
<action application="speak" data="flite|kal|Hello,welcome" />

//---------

<action application="set" data="tts_engine=tts_commandline" />
<action application="set" data="tts_voice=Ting-Ting"/>
<action application="speak" data="欢迎使用" />
或
<action application="speak" data="tts_commandline|Ting-Ting|欢迎使用" />

//---------
<action application="set" data="tts_engine=unimrcp"/>
<action application="set" data="tts_voice=xiaoyun"/>
<action application="speak" data="欢迎使用" />
或
<action application="speak" data="unimrcp|xiaoyun|欢迎使用" />
```
