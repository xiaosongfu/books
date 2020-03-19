https://github.com/Kotlin/kotlinx.coroutines

---



协程作用域

作用域构建器


---

本质上，协程是轻量级的线程。它们在某些 CoroutineScope 上下文中与 launch 协程构建器一起启动。

调用了 runBlocking 的主线程会一直阻塞直到 runBlocking 内部的协程执行完毕。

外部协程会直到在其作用域中启动的所有协程都执行完毕后才会结束。

---

GlobalScope.launch {}

runBlocking {}

coroutineScope {}

---

 coroutineScope 构建器会声明自己的作用域。它会创建一个协程作用域并且在所有已启动子协程执行完毕之前不会结束

---

suspend

launch


async/await


runBlocking


Dispatchers.Main
Dispatchers.IO
Dispatchers.Default


---

如何使用协程、LiveData 以及 Kotlin Flow 来编写程序

[Advanced Coroutines with Kotlin Flow and LiveData](https://codelabs.developers.google.com/codelabs/advanced-kotlin-coroutines)

