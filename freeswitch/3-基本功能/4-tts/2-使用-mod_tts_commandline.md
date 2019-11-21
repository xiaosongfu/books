## 准备终端可以使用 tts 命令

先准备一个命令行程序可以实现 tts 功能，比如 mac 平台可以使用 say 命令：

```
say hello
say 你好
```

在 mac 上直接测试就可以听到！

## 配置 tts_commanline 引擎关联 say 命令

为 tts_commandline 配置关联的 say 命令，编辑 conf/autoload_configs/tts_commandline.conf.xml：

```
<param name="command" value="say ..." />
```

然后为 speak 应用配置 tts 的引擎和嗓音：

```
<action application="set" data="tts_engine=tts_commandline" />
<action application="set" data="tts_voice=Ting-Ting"/>
<action application="speak" data="欢迎使用" />

或者

<action application="speak" data="tts_commandline|Ting-Ting|欢迎使用" />
```

speak 使用 tts_commandline 引擎，而 tts_commandline 内部是使用 say 命令来实现 tts 的。
