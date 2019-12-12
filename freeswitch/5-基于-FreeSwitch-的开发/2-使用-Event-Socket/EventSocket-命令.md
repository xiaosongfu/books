
auth
api xxx
bgapi xxx
linger
nolinger

sendmsg
sendevent

event
myevents


---


## auth

用于向 FreeSwitch 认证。

```
auth <password>
```

## api

用于执行 FreeSwitch 的命令。

```
api <command> <args>
```

## bgapi

api 是阻塞执行的，因此对执行时间较长的命令，会有一段时间得不到响应结果，影响实时接收事件。因此可以使用 bgapi 将这些命令放到后面执行。

```
bgapi <command> <args>
```

该命令会在后台建立一个 job，并返回一个 Job-UUID。当执行完毕后 FreeSwitch 会产生一个 BACKGROUND_JOB 事件，该事件带有对应的 Job-UUID 以及命令的执行结果。

也可以自己提供 Job-UUID，但是需要保证该 Job-UUID 是唯一的。

```
event plain BACKGROUND_JOB

Content-Type: command/reply
Reply-Text: +OK event listener enabled plain


bgapi status

Content-Type: command/reply
Reply-Text: +OK Job-UUID: fd690cce-a6f1-4e8f-8200-99b8c8dcb3e7
Job-UUID: fd690cce-a6f1-4e8f-8200-99b8c8dcb3e7

Content-Length: 920
Content-Type: text/event-plain

Event-Name: BACKGROUND_JOB
Core-UUID: 5ee3162f-48d8-4c17-8119-ad61b79c1021
FreeSWITCH-Hostname: localhost.localdomain
FreeSWITCH-Switchname: localhost.localdomain
FreeSWITCH-IPv4: 192.168.160.46
FreeSWITCH-IPv6: %3A%3A1
Event-Date-Local: 2019-12-10%2015%3A41%3A55
Event-Date-GMT: Tue,%2010%20Dec%202019%2007%3A41%3A55%20GMT
Event-Date-Timestamp: 1575963715911867
Event-Calling-File: mod_event_socket.c
Event-Calling-Function: api_exec
Event-Calling-Line-Number: 1558
Event-Sequence: 216356
Job-UUID: fd690cce-a6f1-4e8f-8200-99b8c8dcb3e7
Job-Command: status
Content-Length: 342

UP 0 years, 19 days, 20 hours, 49 minutes, 47 seconds, 901 milliseconds, 150 microseconds
FreeSWITCH (Version 1.10.0-release  64bit) is ready
213 session(s) since startup
0 session(s) - peak 3, last 5min 0
0 session(s) per Sec out of max 30, peak 2, last 5min 0
1000 session(s) max
min idle cpu 0.00/99.93
Current Stack Size/Max 240K/8192K
```

## linger 和 nolinger

channel 端口后 socket 连接在保留一段时间。

```
linger <seconds>
```

使用 nolinger 撤销。

## event

event 用于订阅事件，让 FreeSwitch 把相关的事件发送过来。

```
event [type] <events>
```

type 表示类型，有 plain、json、xml，默认为 plain，即纯文本格式。

events 参数用于指定事件的名称，或者使用 ALL 表示订阅所有事件：

```
event json ALL
```

同时订阅多个事件：

```
event json CHANNEL_CREATE CHANNEL_ANSWER
```

订阅自定义事件：

```
event json CUSTOM sofia::register

# 同时订阅多个
event json CUSTOM sofia::register sofia::unregister
```

json 格式的示例：

```
bgapi status

Content-Type: command/reply
Reply-Text: +OK Job-UUID: 7eb95f51-a8e3-4b30-80c1-230c2b9170ef
Job-UUID: 7eb95f51-a8e3-4b30-80c1-230c2b9170ef

Content-Length: 961
Content-Type: text/event-json

{"Event-Name":"BACKGROUND_JOB","Core-UUID":"5ee3162f-48d8-4c17-8119-ad61b79c1021","FreeSWITCH-Hostname":"localhost.localdomain","FreeSWITCH-Switchname":"localhost.localdomain","FreeSWITCH-IPv4":"192.168.160.46","FreeSWITCH-IPv6":"::1","Event-Date-Local":"2019-12-10 15:52:37","Event-Date-GMT":"Tue, 10 Dec 2019 07:52:37 GMT","Event-Date-Timestamp":"1575964357051861","Event-Calling-File":"mod_event_socket.c","Event-Calling-Function":"api_exec","Event-Calling-Line-Number":"1558","Event-Sequence":"216448","Job-UUID":"7eb95f51-a8e3-4b30-80c1-230c2b9170ef","Job-Command":"status","Content-Length":"340","_body":"UP 0 years, 19 days, 21 hours, 0 minutes, 29 seconds, 27 milliseconds, 516 microseconds\nFreeSWITCH (Version 1.10.0-release  64bit) is ready\n213 session(s) since startup\n0 session(s) - peak 3, last 5min 0 \n0 session(s) per Sec out of max 30, peak 2, last 5min 0 \n1000 session(s) max\nmin idle cpu 0.00/99.97\nCurrent Stack Size/Max 240K/8192K\n"}
```

## myevents

myevents 使用 event 的一种特殊情况，通过它订阅与该 channel 相关的所有事件：

```
myevents <type> <UUID>
```

对于 Outbound 模式，要省略 UUID，对于 Inbound 模式需要指定 UUID。

## divert_events

InputCallback 默认只能在嵌入式脚本的回调函数中捕获，通过 divert_events 能将这些事件也转发到 Event Socket 上来：

```
divert_events on   -- 开启
divert_events off  -- 关闭
```

## filter

## nixevent 和 noevent

nixevent 用于取消已经订阅的事件。

```
nixevent CHANNEL_CREATE

nixevent all
```

`noevent` 相当于 `nixevent all`

## log 和 nolog

## exit

## sendevent

通过 sendevent 可以向 FreeSwitch 的事件系统发送事件。

发送自定义事件示例：

```
# 订阅
event palin CUSTOM freeswitch:book

## 发送事件
sendevent CUSTOM
Event-Subclass: freeswitch:book
content-type: text/plain
content-length: 44

This message is come from FreeSWTICH book!
```



---

HEARTBEAT


BACKGROUND_JOB

---

event plain BACKGROUND_JOB

---

订阅全部事件：event plain ALL
订阅一个事件：event plain CHANNEL_CREATE
同时订阅多个事件：event plain CHANNEL_CREATE CHANNEL_ANSWER

