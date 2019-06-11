当程序并发运行时，多个 Goroutines 不应该同时拥有修改共享内存的权限。修改共享内存的这部分代码则称为临界区。


程序的输出取决于 Goroutines 的执行顺序的情况，称为竞态条件。



---

参考：
1. [golang Mutex互斥锁](https://juejin.im/post/5ca57ca9e51d452d1a071638)