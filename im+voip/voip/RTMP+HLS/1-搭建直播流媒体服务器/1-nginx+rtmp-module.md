1. 安装 nginx+rtmp module
2. 配置 rtmp 服务
3. 推流/拉流测试

---

## 1. 安装 nginx+rtmp module

安装 nginx，并同时按照 rtmp 模块：

macOS: `brew install nginx-full --with-rtmp-module`

## 2. 配置 rtmp 服务

修改配置文件： `/usr/local/etc/ngin/nginx.conf`

```
# rtmp 服务
rtmp {
    server {
        # 指定服务端口
        listen 1935;
        chunk_size 4000;

        # 指定流应用
        application live {
            live on;
            record off;
            allow play all;
        }
    }
}
```

## 3. 推流/拉流测试

使用 FFmpeg 推流：`ffmpeg -re -i test.mp4 -c copy -f flv rtmp://localhost:1935/live/streamName`

使用 FFmpeg 拉流：`ffmpeg -i rtmp://localhost:1935/live/streamName -c copy dump.flv` ，只能是保存下来，不能实时观看。

如果要实时观看，可以使用：

* 方式一：`ffplay rtmp://localhost:1935/live/streamName`
* 方式一：``
