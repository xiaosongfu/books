如果某个 app lua 中没有对应的函数，也可以通过 session:execute() 函数来执行相关的 app，如：session:execute("playback", "/tmp/foo.wav")。

lua 脚本执行完毕后默认会挂断电话，如果需要继续执行 dialplan 中的后续流程，则需要在脚本开始处先设置不要自动挂机，语法如下：

```
session:setAutoHangup(false)
```

