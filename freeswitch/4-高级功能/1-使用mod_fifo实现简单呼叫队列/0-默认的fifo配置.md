## 默认的 fifo 配置

```
<!--
    Parking extensions... transferring calls to 5900 will park them in a queue.
-->
<extension name="park">
    <condition field="destination_number" expression="^5900$">
        <action application="set" data="fifo_music=$${hold_music}"/>
        <action application="fifo" data="5900@${domain_name} in"/>
    </condition>
</extension>

<!--
    Parking pickup extension.  Calling 5901 will pickup the call.
-->
<extension name="unpark">
    <condition field="destination_number" expression="^5901$">
        <action application="answer"/>
        <action application="fifo" data="5900@${domain_name} out nowait"/>
    </condition>
</extension>
```

默认的 fifo 配置是当用户拨打 5900 时会听保持音乐，FreeSWITCH 并不会呼叫坐席人员，而是需要坐席人员自己呼叫 5901 去取回通话。

当然我们也可以配置让坐席人员先上线，当用户呼叫 5900 时直接选一个已经上线的坐席人员通话。

让坐席人员先上线的操作是让坐席呼叫 5901 实现的，只是 fifo 的参数需要从 nowait 改为 wait，nowait 的意思是 fifo 中没有待服务的通话的就挂断坐席的电话，而改为 wait 后，当 fifo 中没有待服务的通话时就让坐席等待，而不是挂断坐席的电话，配置方法只是把 nowait 该为 wait，如下：

```
<extension name="unpark">
    <condition field="destination_number" expression="^5901$">
        <action application="answer"/>
        <action application="fifo" data="5900@${domain_name} out wait"/>
    </condition>
</extension>
```
