socket.io 自带房间的概念
socket.io 跨平台，跨终端，跨语言

## 服务端使用 socket.io 发送消息

* 给本连接发送消息： socket.emit()
* 给某个房间内的所有人发送消息： io.in(room).emit()
* 除本连接外，给某个房间内所有人发送消息：socket.to(room).emit()
* 除本连接外，给所有人发送消息：socket.broadcast.emit()

## 客户端使用 socket.io 处理消息

处理 action 命令：

服务端：socket.emit('fooAction')
客户端：socket.on('fooAction', function() {})

// 带有两个参数
服务端：socket.emit('fooAction', arg1, arg2)
客户端：socket.on('fooAction', function(arg2, arg2) {})

// emit 方法中包含回调函数
服务端：socket.emit('fooAction', data, function() {})
客户端：socket.on('fooAction', function(data, fn) {})

## 内置事件

处理客户端连接事件：

io.sockets.on('connection', socket => {

})


接收消息：

socket.on('message', (room, id, data) => {

})

发送消息：

socket.emit('message', room, data)



