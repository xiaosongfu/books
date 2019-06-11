`json:",omitempty"` ： 为空的时候忽略
`json:"-"` ： 任何情况下都忽略

json.Unmarshal 方法只支持 RFC3339 和 RFC3339Nano 两种格式的转换。还有一个需要注意的地方，使用 time.Now() 生成的时间是带有一个 Monotonic Time 的，经过 json.Marshal 转换时候，由于 RFC3339 规范里没有存放 Monotonic Time 的位置，会丢掉这一部分。

---

go json 实践中遇到的坑：https://zhuanlan.zhihu.com/p/53125839
