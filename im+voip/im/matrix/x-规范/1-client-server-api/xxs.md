## /_matrix/client/r0/presence/@xiaoi2:im.fdev.ltd/status

获取指定用户的在线状态。



{
    "errcode": "M_UNKNOWN",
    "error": "Expected UserID string to start with '@'"
}


## /_matrix/client/r0/presence/@xiaoi2:im.fdev.ltd/status

设置当前用户的状态。设置状态时，活动时间（）会更新以反映该操作。

客户端不需要指定 `last_active_ago` 字段。

只能设置自己的状态，不能设置其他用户的状态。

