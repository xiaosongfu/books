## 安装

```
$ brew install ngninx
```

输出命令记录：

```

......

Docroot is: /usr/local/var/www

The default port has been set in /usr/local/etc/nginx/nginx.conf to 8080 so that
nginx can run without sudo.

nginx will load all files in /usr/local/etc/nginx/servers/.

To have launchd start nginx now and restart at login:
  brew services start nginx
Or, if you don't want/need a background service you can just run:
  nginx
```

## 使用

* 默认配置文件路径：`/usr/local/etc/nginx/nginx.conf`
* 启动：`nginx`
* 停止：`nginx -s stop`
