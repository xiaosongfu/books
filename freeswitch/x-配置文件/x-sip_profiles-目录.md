```
<configuration name="sofia.conf" description="sofia Endpoint">

  <global_settings>
    <param name="log-level" value="0"/>
    <!-- <param name="auto-restart" value="false"/> -->
    <param name="debug-presence" value="0"/>
    <!-- <param name="capture-server" value="udp:homer.domain.com:5060"/> -->

    <!--
        the new format for HEPv2/v3 and capture ID

        protocol:host:port;hep=2;capture_id=200;

    -->

    <!-- <param name="capture-server" value="udp:homer.domain.com:5060;hep=3;capture_id=100"/> -->
  </global_settings>

  <!--
      The rabbit hole goes deep.  This includes all the
      profiles in the sip_profiles directory that is up
      one level from this directory.
  -->
  <profiles>
    <X-PRE-PROCESS cmd="include" data="../sip_profiles/*.xml"/>
  </profiles>

</configuration>
```

---

conf/auto_load_configs/sofia.conf.xml 中仅有少数的配置参数，大部分的配置参数都是使用预处理指令装入 conf/sip_profile/ 目录下的 xml 文件中的配置：

```
<X-PRE-PROCESS cmd="include" data="../sip_profiles/*.xml">
```

FreeSwitch 默认配置了3个 Profile。

## internal 和 external

他们只是监听的端口不同，interal 监听 5060 端口，而 external 监听 5080 端口。





---


```
<profile name="internal">
  <!--
      This is a sofia sip profile/user agent.  This will service exactly one ip and port.
      In FreeSWITCH you can run multiple sip user agents on their own ip and port.

      When you hear someone say "sofia profile" this is what they are talking about.
  -->

  <!-- http://wiki.freeswitch.org/wiki/Sofia_Configuration_Files -->
  <!--aliases are other names that will work as a valid profile name for this profile-->
  <aliases>
    <!--
        <alias name="default"/>
    -->
  </aliases>
  <!-- Outbound Registrations -->
  <gateways>
  </gateways>

  <domains>
    <!-- indicator to parse the directory for domains with parse="true" to get gateways-->
    <!--<domain name="$${domain}" parse="true"/>-->
    <!-- indicator to parse the directory for domains with parse="true" to get gateways and alias every domain to this profile -->
    <!--<domain name="all" alias="true" parse="true"/>-->
    <domain name="all" alias="true" parse="false"/>
  </domains>

  <settings>

```
