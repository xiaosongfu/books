https://flutter.dev/docs/cookbook/networking/background-parsing

---

讲了将一些计算量大的工作放到一个单独的 isolate 中进行，比如解析特别大的 json 字符串。

但和 isolate 交流时传递的数据类型不能是太复杂的，比如 null, num, bool, double, or String, List<Photo> 这些是可以的，但是像 http.Response、Futura 这些就不可以。
