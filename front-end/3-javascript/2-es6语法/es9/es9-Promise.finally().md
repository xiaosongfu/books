## Promise.finally()

一个 Promise 调用链要么成功到达最后一个 `.then()`，要么失败触发 `.catch()`。在某些情况下，你想要在无论 Promise 运行成功还是失败，运行相同的代码，例如清除，删除对话，关闭数据库连接等。

`.finally()` 允许你指定最终的逻辑：

```
function doSomething() {
  doSomething1()
  .then(doSomething2)
  .then(doSomething3)
  .catch(err => {
    console.log(err);
  })
  .finally(() => {
    // finish here!
  });
}
```
