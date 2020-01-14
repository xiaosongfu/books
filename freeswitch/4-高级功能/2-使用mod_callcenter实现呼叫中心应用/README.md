我们可以用命令的方式动态添加坐席和梯队，但是队列只能在配置文件中静态配置。

`<action application="callcenter" data="xiaoi_ivr_queue"/>`


需要配置 odbc-dsn 来提高性能

---

transfer_after_bridge=4099

hangup_after_bridge=true

park_after_bridge=true

---

tone_stream://%(2000,4000,440,480)
tone_stream://%(250,250,425);loops=3

/var/sounds/custom_moh.wav

file_string:///var/sounds/custom_moh.wav!/var/sounds/custom_moh.mp3


local_stream://moh
local_stream://example_moh


---

sipjs 获取 aleg uuid

* cc_agent
* cc_member_uuid
* cc_export_vars
* cc_side
* cc_member_session_uuid

---

```
<param name="discard-abandoned-after" value="120">
<param name="abandoned-resume-allowed" value="true">
```

是否允许用户放弃后再次进入队列，并且保存先前的位置。abandoned-resume-allowed 为 true 表示允许，但是超过了  discard-abandoned-after 时就算允许也不能恢复先前的位置了。

```
<param name="tier-rule-wait-second" value="120">
<param name="tier-rule-wait-multiply-level" value="true">
```

tier-rule-wait-second 从一个梯队前进到下一个梯队需要等待的时间，如果 tier-rule-wait-multiply-level 为 true，等待的时间还需要乘以下一个梯队的 level 值。


