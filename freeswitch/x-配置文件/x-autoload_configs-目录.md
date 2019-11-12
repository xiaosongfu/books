autoload_configs 目录下的各种配置文件会在系统启动时自动装入。一般都是每个模块对应一个配置文件，文件名一般以 “模块.conf.xml” 命名，模块名不包括 `mod_`，如 `sofia.conf.xml`

自动装入功能由 freeswitch.xml 中的配置完成：

```

```

## modules.conf.xml 和 post_load_modules.conf.xml 和 pre_load_modules.conf.xml

autolaod_confgs 目录中有一个特殊的 modules.conf.xml，器决定了 FreeSwitch 在启动时自动加载哪些模块。

post_load_modules.conf.xml 和 modules.conf.xml 的格式和用法一样，不同的是其中定义的模块加载时间比较晚。

pre_load_modules.conf.xml 是

