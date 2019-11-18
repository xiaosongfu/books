### 内部电话（本地用户）

```
# 该命令会呼叫 1000 用户，并在用户接通后执行 echo 程序
originate user/1000 &echo

# 该命令会呼叫 1000 用户，并在用户接通后执行默认 IVR 流程
originate user/1000 5000
```

该命令类似于让 1000 软电话拨打 5000 号码。

### 外部电话

```
# 该命令通过网关呼叫 18585436821 号码，在对方接通后 FreeSwitch 执行 echo 程序
originate sofia/gateway/gw-xiaoi/18585436821 &echo

# 该命令通过网关呼叫 18585436821 号码，在对方接通后 FreeSwitch 执行默认 IVR 流程
originate sofia/gateway/gw-xiaoi/18585436821 5000
```

### 其他 FreeSwitch（外地用户）

```
originate sofia/external/sip:1000@192.168.1.2:5080 &echo
```

需要使用 external profile，并且要指定其他 FreeSwitch 服务器的 ip 地址 192.168.1.2 和 external profile 的端口 5080.
