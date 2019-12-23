## fifo

reloadxml
fifo reparse

fifo list

fifo list xiaoi_ivr

## fifo_member

`-USAGE: [add <fifo_name> <originate_string> [<simo_count>] [<timeout>] [<lag>] [<expires>] [<taking_calls>] | del <fifo_name> <originate_string>]`

fifo_member add xiaoi_ivr user/1003
fifo_member del xiaoi_ivr user/1003

> add 和 del 命令后面的呼叫字符串必须严格相同 !!!

## 

没有坐席签入：

```
  <fifo name="5900@192.168.160.46" consumer_count="0" caller_count="0" waiting_count="0" importance="0" outbound_per_cycle="0" outbound_per_cycle_min="0" ring_timeout="0" default_lag="0" outbound_priority="5" outbound_strategy="ringall">
    <outbound></outbound>
    <callers></callers>
    <consumers></consumers>
    <bridges></bridges>
  </fifo>
```

1011 坐席签入：

```
  <fifo name="5900@192.168.160.46" consumer_count="0" caller_count="1" waiting_count="1" importance="0" outbound_per_cycle="0" outbound_per_cycle_min="0" ring_timeout="0" default_lag="0" outbound_priority="5" outbound_strategy="ringall">
    <outbound></outbound>
    <callers>
      <caller uuid="2020b1f3-e1ac-4aff-b02c-c91176d39c23" status="WAITING" caller_id_name="1011" caller_id_number="1011" timestamp="2019-12-23 15:37:32" position="1" slot="0"></caller>
    </callers>
    <consumers></consumers>
    <bridges></bridges>
  </fifo>
```