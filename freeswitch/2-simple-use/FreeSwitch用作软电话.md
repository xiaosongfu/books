## 安装 mod_portaudio 模块，并实现呼出

可以把 FreeSwitch 简单的用作一个软电话。

FreeSwitch 使用 mod_portaudio 模块支持本地的音视频设备，该模块默认是不编译和安装的，使用以下命令编译并安装该模块：

```
make mod_portaudio

make mod_portaudio-install
```

安装完成加载该模块

```
freeswitch> load mod_portaudio
```

执行 `pa devlist` 查看本机都有哪些音视频设备：

```
freeswitch> pa devlist

API CALL [pa(devlist)] output:
0;Built-in Microphone;2;0;
1;Built-in Speaker;0;2;r;
2;Built-in Headphone;0;2;
```

指定使用某个音视频设备：

```
freeswitch> pa indev #0
freeswitch> pa outdev #2
```

至此，我们就有了一个可以用命令行控制的软电话了，尝试使用以下：

```
freeswitch> pa call 5000
freeswitch> pa hangup
```

## 监听呼入

我们需要先为自己配置一个账号，使得其他账号可以拨打。

编辑 `conf/dialplan/default/portaudio.xml`：

```
<include>
    <extension name="call me">
        <condition field="destination_number" expression="^(1111)$">
            <action application="bridge" data="portaudio" />
        </condition>
    </extension>
</include>
```

输入以下命令让配置生效：

```
freeswitch> reloadxml
```

现在就可以使用其他账号呼叫 1111 来呼叫自己了。你可以在控制台看到类似 `[DEBUG] mod_portaudio.c:268 BRRRRING! BRRRRRING!` 的信息，这说明你的电话正在响铃，多按几个回车后输入 `pa answer` 就可以接听了，输入 `pa hangup` 就可以挂断电话。

## 配置响铃声

准备一个声音文件（wav 格式），编辑 `conf/autoload_configs/portaudio.conf.xml`，将 ring-file 的值修改为声音文件的路径：

```
<param name="ring-file" value="/path/to/wavfile"/>>
```

然后重新加载配置和 portaudio 模块：

```
freeswitch> reloadxml
freeswitch> reload mod_portaudio
```

再拨打试试，现在应该就可以听见铃声了。

## 为 FreeSwitch 软电话准备的图形应用

* FreeSwitch-Air
* FSComm
* FSClient
