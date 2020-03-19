
协程通过替代回调(callback)来简化异步代码。

---

被 suspend 修饰的函数比普通函数多两个操作（suspend 和 resume） 
* suspend：暂停当前协程的执行，保存所有的局部变量 
* resume：从协程被暂停的地方继续执行协程。

suspend 修饰的函数并不意味着运行在子线程中。如果需要指定协程运行的线程，就需要指定 Dispatchers ，常用的有三种： 

* Dispatchers.Main：Android 中的主线程，可以直接操作 UI
* Dispatchers.IO：针对磁盘和网络 IO 进行了优化，适合 IO 密集型的任务，比如：读写文件，操作数据库以及网络请求 
* Dispatchers.Default：适合 CPU 密集型的任务，比如解析 JSON 文件，排序一个较大的 list

通过 `withContext()` 可以指定 Dispatchers，这里的 get() 函数里的 withContext 代码块中指定了协程运行在 `Dispatchers.IO` 中。 

```
suspend fun fetchDocs() {
    val result = get("developer.android.com")
    show(result)
}

suspend fun get(url: String) = withContext(Dispatchers.IO) {
        ...
    }
```
