https://github.com/vektra/mockery

---

需要与 github.com/stretchr/testify/mock 库配合使用

---

```
package thirdpartyapi

//go:generate mockery -name=Client
type Client interface {
  Get(key string) (data interface{}, err error)

}
```

执行 go generate 会在当前目录下的 mocks 目录下生成 mock 实现。