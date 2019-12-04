
简单来说，一个App是一个程序（Application），它作为一个Channel一端与另一端的UA进行通信，相当于它工作在Channel内部；而一个API则是独立于一个Channel之外的，它只能通过找到Channel的UUID来控制一个Channel（如果需要的话），相当于一个第三者

通常我们在控制台上输入的命令都是API；而在dialplan中执行的程序都是App（dialplan中也能执行一些特殊的API）。大部分公用的API都是在mod_commands模块中加载的；而App则在mod_dptools中，因而App又称为拨号计划工具（Dialplan Tools）。某些模块（如mod_sofia）有自己特有的API和App

* mod_commands
* mod_dptools

---

某些 APP 有其对应的 API，如 bridge 和 uuid_bridge、transfer 和 uuid_transfer
