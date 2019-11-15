
FreeSwitch 内部使用关系型数据库记录一些实时的数据。这些数据有的是临时存储，有的是持久存储的。


```
[root@localhost db]# pwd
/var/lib/freeswitch/db

[root@localhost db]# ls -la
total 740
drwxr-x---. 2 freeswitch daemon    211 Nov 15 17:33 .
drwxr-x---. 7 freeswitch daemon     75 Nov  7 14:16 ..
-rw-r--r--. 1 freeswitch daemon  14336 Nov  7 14:16 call_limit.db
-rw-r--r--. 1 freeswitch daemon 321536 Nov 15 17:23 core.db
-rw-r--r--. 1 freeswitch daemon   5120 Nov 14 18:09 fifo.db
-rw-r--r--. 1 freeswitch daemon  95232 Nov  7 14:16 sofia_reg_external-ipv6.db
-rw-r--r--. 1 freeswitch daemon  95232 Nov  7 14:16 sofia_reg_external.db
-rw-r--r--. 1 freeswitch daemon  95232 Nov  7 14:16 sofia_reg_internal-ipv6.db
-rw-r--r--. 1 freeswitch daemon  97280 Nov 15 17:36 sofia_reg_internal.db
-rw-r--r--. 1 freeswitch daemon  16384 Nov 14 17:46 voicemail_default.db
```
