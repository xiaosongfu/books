
可以直接通过 api 接口发送日志：

https://github.com/grafana/loki/blob/master/docs/api.md

---

* url: http://182.61.24.127:3100/api/prom/push
* header: "Content-Type:application/json"
* body

```
{
  "streams": [
    {
      "labels": "{service=\"order_service\"}",
      "entries": [{ "ts": "2019-07-18T17:28:27.645637+08:00", "line": "foo and bar" }]
    }
  ]
}
```
