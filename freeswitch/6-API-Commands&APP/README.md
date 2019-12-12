## 命令和应用的区别

* 一个 App 是一个程序（Application），它作为一个 Channel 一端与另一端的 UA 进行通信，相当于它工作在 Channel 内部；
* 而一个 API 则是独立于一个 Channel 之外的，它只能通过找到 Channel 的 UUID 来控制一个 Channel（如果需要的话），相当于一个第三者。

通常我们在控制台上输入的命令都是 API；而在 dialplan 中执行的程序都是 App（dialplan中也能执行一些特殊的API）。

大部分公用的 API 都是在 mod_commands 模块中加载的；
而 App 则在 mod_dptools 中，因而 App 又称为拨号计划工具（Dialplan Tools）。某些模块（如mod_sofia）有自己特有的 API 和 App。

* mod_commands
* mod_dptools

---

某些 APP 有其对应的 API，如 bridge 和 uuid_bridge、transfer 和 uuid_transfer

uuid_ 一族的 api 都是在一个 channel 之外对 channel 进行控制的，他们应用于不能参与到通话中却又想对正在通话的 channel 做点什么的场景中。比如使用 uuid_kill 将电话切断、使用 uuid_broadcast 进行广播或使用 uuid_recore 对他们的谈话内容进行录音等。

