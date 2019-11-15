实现在不同的时间使用不同的 ivr ：

根据时间设置不同的 ivr 流程：

```
<extension>
    <condition wday="2-6" hour="8:30-17:30>
        <action application="set" data="ivr=ivr_day" inline="true">
        <anti-action application="set" data="ivr=ivr_night" inline="true">
    </condition>
</extension>
```

周一到周五，8:30 到 17:30 使用 ivr_day，其他时间使用 ivr_night。

配置一个拨号计划使用该 ivr 配置：

```
<extension>
    <condition field="destination_number" expression="^DID$">
        <action application="answer" />
        <action application="ivr" data="$(ivr)" />
    </condition>
</extension>
```
