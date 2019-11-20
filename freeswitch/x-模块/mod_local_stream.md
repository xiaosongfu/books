没有安装音乐文件前直接使用 local_stream 播放 moh 会报错：

```
freeswitch@localhost.localdomain> originate user/1000 &playback($${hold_music}})
2019-11-15 16:30:06.320401 [WARNING] mod_local_stream.c:868 Unknown source moh}, trying 'default'
2019-11-15 16:30:06.320401 [ERR] mod_local_stream.c:876 Unknown source default
```

解决方法是安装音乐文件后重新加载 mod_local_stream：

```
yum install freeswitch-sounds-music

reload mod_local_stream
```

执行 `reload mod_local_stream` 会重新加载 local_stream.conf.xml 配置文件中使用到的音乐文件，即是 `yum install freeswitch-sounds-music` 安装的音乐文件。
