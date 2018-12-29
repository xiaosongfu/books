```
try {
  breedMoreLlamas();
} on OutOfLlamasException {
  // 一个特殊的异常
  buyMoreLlamas();
} on Exception catch (e) {
  // 其他任何异常
  print('Unknown exception: $e');
} catch (e) {
  // 没有指定的类型，处理所有异常
  print('Something really unknown: $e');
}
```

1. 捕获语句中可以同时使用 on 和 catch ，也可以单独分开使用。 使用 on 来指定异常类型， 使用 catch 来捕获异常对象。

2. catch() 函数可以指定1到2个参数， 第一个参数为抛出的异常对象， 第二个为堆栈信息 ( 一个 StackTrace 对象 )。

```
try {
  // ···
} on Exception catch (e) {
  print('Exception details:\n $e');
} catch (e, s) {
  print('Exception details:\n $e');
  print('Stack trace:\n $s');
}
```

---

1. 如果仅需要部分处理异常， 那么可以使用关键字 rethrow 将异常重新抛出。

---

1. 不管是否抛出异常， finally 中的代码都会被执行。 如果 catch 没有匹配到异常， 异常会在 finally 执行完成后，再次被抛出：

```
try {
  breedMoreLlamas();
} finally {
  // Always clean up, even if an exception is thrown.
  cleanLlamaStalls();
}
```

2. 任何匹配的 catch 执行完成后，再执行 finally ：

```
try {
  breedMoreLlamas();
} catch (e) {
  print('Error: $e'); // Handle the exception first.
} finally {
  cleanLlamaStalls(); // Then clean up.
}
```