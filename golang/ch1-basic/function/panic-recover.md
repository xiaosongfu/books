## panic

panic 可以直接调用 painc(...) 函数产生，也可以由运行时错误产生，例如访问越界的数值。


# recover


recover 可以让进入 panic 状态的 goroutine 恢复过来，它仅在延迟函数中有效，在正常执行过程中调用 recover 会返回 nil，并且没有任何其他效果。

