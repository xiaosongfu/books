JSON API Commands 支持以下命令：

Listing agents

```
json {"command": "callcenter_config", "format": "pretty", "data": {"arguments":"agent list"}}
```

Listing queues

```
json {"command": "callcenter_config", "format": "pretty", "data": {"arguments":"queue list"}}
```

Listing agents for a queue

```
json {"command": "callcenter_config", "data": {"arguments":"queue list agents", "queue_name":"support@default"}}
```

Listing members(callers) for a queue

```
json {"command": "callcenter_config", "data": {"arguments":"queue list members", "queue_name":"support@default"}}
```

Listing tiers for a queue

```
json {"command": "callcenter_config","data": {"arguments":"queue list tiers", "queue_name":"support@default"}}
```

Listing members

```
json {"command": "callcenter_config","data": {"arguments":"member list"}}
```

Listing tiers

```
json {"command": "callcenter_config","data": {"arguments":"tier list"}}
```
