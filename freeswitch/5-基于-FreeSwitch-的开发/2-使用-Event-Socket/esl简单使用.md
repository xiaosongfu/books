
```
nc 192.168.160.10 8021
```

```
auth ClueCon
```

```
sofia profile internal siptrace on

sofia global siptrace on

/event SEND_MESSAGE NOTIFY
```

```
sendevent SEND_MESSAGE
profile: internal
user: 1005
host: 192.168.160.46
content-length: 2
content-type: text/plain

OK
```

```
sendevent NOTIFY
profile: internal
event-string: check-sync
host: 192.168.160.10
content-type: text/plain
content-length: 15
user: 1005

出租车甩客
```


```
sendevent CUSTOM
Event-Subclass: SMS::SEND_MESSAGE
sip_profile: internal
dest_proto: sip
from: 1005@192.168.160.10
to: 1010@192.168.160.10
content-type: text/plain
content-length: 15

出租车甩客
```
