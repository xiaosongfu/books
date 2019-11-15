> 如果希望可以使用 mp3 格式的文件，则需要安装 mod_shout 模块。

直接加载该模块报错信息如下：

```
freeswitch@localhost.localdomain> load mod_shout
-ERR [module load file routine returned an error]

2019-11-15 16:21:29.040408 [CRIT] switch_loadable_module.c:1786 Error Loading module /usr/lib64/freeswitch/mod/mod_shout.so
**/usr/lib64/freeswitch/mod/mod_shout.so: cannot open shared object file: No such file or directory**
```

安装命令：

```
yum install freeswitch-format-mod-shout
```

加载模块：

```
load mod_shout
```
