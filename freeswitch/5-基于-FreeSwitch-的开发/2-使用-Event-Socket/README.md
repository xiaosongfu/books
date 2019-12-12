
---

## 各种命令

fs_cli 中： 

* version
* sofia status
* /event plain CHANNEL_CREATE

event socket 中：

* api verison
* api sofia status
* event plain CHANNEL_CREATE

## 各种命令

event plain ALL -- 订阅所有事件

event plain CHANNEL_CREATE -- 订阅 CHANNEL_CREATE 事件

event plain CUSTOM sofia::register -- 订阅自定义事件

---

```
nc -l 8084

nc 192.168.150.235 8084
```


```
sendmsg
call-command: execute
execute-app-name: playback
execute-app-arg: local_stream://moh
```


```
sendmsg
call-command: answer
```

```
sendmsg
call-command: hangup
```