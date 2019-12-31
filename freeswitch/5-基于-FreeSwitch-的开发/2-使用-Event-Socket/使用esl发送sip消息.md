"SEND_MESSAGE"
"NOTIFY"
"SEND_INFO"


## 




```
sendevent SEND_MESSAGE
profile: internal
content-length: 2
content-type: text/plain
user: 1005
host: 99.157.44.194

OK
```


## NOTIFY

```
sendevent NOTIFY
profile: internal
event-string: check-sync;reboot=false
user: 1000
host: 192.168.10.4
content-type: application/simple-message-summary
```
sendevent NOTIFY
profile: internal
content-type: application/simple-message-summary
event-string: check-sync
user: 1005
host: 192.168.10.4
content-length: 2
 
OK
```

```

```

```

## SEND_INFO

```
sendevent SEND_INFO
profile: external
content-type: text/plain
to-uri: sip:1@2.3.4.5
from-uri: sip:1@1.2.3.4
content-length: 15
 
test
```

```

```
