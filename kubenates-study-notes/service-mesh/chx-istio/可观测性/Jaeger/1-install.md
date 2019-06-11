## 1. 安装 All-in-one 测试

All-in-one 是一个专为快速本地测试而设计的，它使用内存存储组件启动 Jaeger UI,collector, query, agent

使用 docker 启动：

```
docker run -d --name jaeger \
  -e COLLECTOR_ZIPKIN_HTTP_PORT=9411 \
  -p 5775:5775/udp \
  -p 6831:6831/udp \
  -p 6832:6832/udp \
  -p 5778:5778 \
  -p 16686:16686 \
  -p 14268:14268 \
  -p 9411:9411 \
  jaegertracing/all-in-one:1.12
```

jaeger ui 的端口为 16686，所以访问 ip:16686 即可，默认有一个 jaeger-query Service，可以简单体验一下。

## 2. 示例应用程序 HotROD

```
docker run --rm -it \
  --link jaeger \
  -p8080-8083:8080-8083 \
  -e JAEGER_AGENT_HOST="jaeger" \
  jaegertracing/example-hotrod:1.12 \
  all
```

访问 8080 端口即可。

---

Take OpenTracing for a HotROD ride： https://medium.com/opentracing/take-opentracing-for-a-hotrod-ride-f6e3141f7941

这篇文章讲了 HotROD 示例应用，应用运行起来之后怎么查看效果，怎么理解调用链等等。
