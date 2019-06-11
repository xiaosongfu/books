https://github.com/stretchr/testify

一个具有常见断言和模拟的工具包，可与标准库很好地配合使用

---

## github.com/stretchr/testify/assert

assert.True()
assert.False()

assert.Equal()
assert.NotEqual()

assert.Nil()
assert.NotNil()

上面的方法都需要传递 t，使用 New(t) 返回的对象就可以不用了。
assert.New()

## github.com/stretchr/testify/require

提供了和 assert package 一样的方法，但是当测试失败时会停止执行。

## github.com/stretchr/testify/mock

!! 可以使用 https://github.com/vektra/mockery 库自动生成 mock 代码

## github.com/stretchr/testify/suite

## github.com/stretchr/testify/http

已废弃!!!
