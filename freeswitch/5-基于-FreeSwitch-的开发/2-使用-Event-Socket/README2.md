## Inbound mode 内连模式：

Inbound mode means you run your applications (in whatever languages) as clients, and connect to the FreeSWITCH server to invoke commands and control FreeSWITCH.

```
********************************************
*                     |                    *
*  FreeSWITCH™        |  mod_event_socket  *
*                     |  127.0.0.1:8021    *
*                     |                    *
********************************************
          /\                 /\             
          /                   \             
   ******************       ******************
   * Client A       *       * Client B       *
   * 127.0.0.1:9988 *       * 127.0.0.1:9999 *
```

使用内连模式可以检查状态，进行出站呼叫等。

## Outbound mode 外连模式：

使用外连模式，可以在发生特定事件时让 FreeSWITCH 调用您自己的应用程序。

```
<action application="socket" data="address:port [async|full]"/>
```
