默认配置：

```
<configuration name="event_socket.conf" description="Socket Client">
  <settings>
    <param name="nat-map" value="false"/>
    <!-- ::1 is the IPv6 version of 127.0.0.0/8 in IPv4 -->
    <param name="listen-ip" value="::1"/>
    <param name="listen-port" value="8021"/>
    <param name="password" value="ClueCon"/>
    <!--<param name="apply-inbound-acl" value="loopback.auto"/>-->
    <!--<param name="stop-on-bind-error" value="true"/>-->
  </settings>
</configuration>
```

需要修改 listen-ip 为 :: 或者 0.0.0.0，还要配置 acl 为 any_v4.auto：

```
<param name="listen-ip" value="::"/>

<param name="apply-inbound-acl" value="any_v4.auto"/>
```

修改完成后需要重新加载 event socket 模块：

```
reload mod_event_socket
```
