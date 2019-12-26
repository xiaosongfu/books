

```
<!-- agent 1000 will be in both the sales and support queues -->
<tier agent="1000@default" queue="sales@default" level="1" position="1"/>
<tier agent="1000@default" queue="support@default" level="1" position="1"/>

<!-- agent 1001 will only be in the support queue -->
<tier agent="1001@default" queue="support@default" level="1" position="1"/>
```
