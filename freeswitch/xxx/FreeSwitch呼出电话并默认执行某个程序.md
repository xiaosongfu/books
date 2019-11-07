### 内部电话

```
# 该命令会呼叫 1000 用户，并在用户接通后执行 echo 程序
originnate user/1000 &echo

# 该命令会呼叫 1000 用户，并在用户接通后执行默认 IVR 流程
originnate user/1000 5000
```

该命令类似于让 1000 软电话拨打 5000 号码。

### 外部电话

```
# 该命令通过网关呼叫 18585436821 号码，在对方接通后 FreeSwitch 执行 echo 程序
originnate sofia/gateway/gw-xiaoi/18585436821 &echo

# 该命令通过网关呼叫 18585436821 号码，在对方接通后 FreeSwitch 执行默认 IVR 流程
originnate sofia/gateway/gw-xiaoi/18585436821 5000
```

