实现使用 db 应用直接操作数据库

mod_db 为数据库实现 API 和 Dialplan 接口。数据库可以是sqlite或ODBC。它还提供对组拨号的支持，并提供数据库后端的有限接口。



## 使用

将值插入数据库：

```
<action application="db" data="insert/realm/key/value"/>
```