## domain

`conf/vars.xml` :

```
<X-PRE-PROCESS cmd="set" data="domain=$${local_ip_v4}"/>
<X-PRE-PROCESS cmd="set" data="domain_name=$${domain}"/>
```


## context

conf/directory/default/1000.xml: `<variable name="user_context" value="default"/>`


## user/${dialed_extension}@${domain_name}

```
<extension name="Local_Extension">
  <condition field="destination_number" expression="^(10[01][0-9])$">
    <action application="bridge" data="user/${dialed_extension}@${domain_name}"/>
  </condition>
</extension>
```


---

## conf/vars.xml

local_ip_v4、local_ip_v6、hostname 都是由 FreeSwitch 动态计算并设置的全局变量。

```
<X-PRE-PROCESS cmd="set" data="domain=$${local_ip_v4}"/>
<X-PRE-PROCESS cmd="set" data="domain_name=$${domain}"/>
```

## conf/sip_profile/internal.xml

```
<X-PRE-PROCESS cmd="stun-set" data="external_rtp_ip=stun:stun.freeswitch.org"/>
<X-PRE-PROCESS cmd="stun-set" data="external_sip_ip=stun:stun.freeswitch.org"/>


<param name="ext-rtp-ip" value="$${external_rtp_ip}"/>
<param name="ext-sip-ip" value="$${external_rtp_ip}"/>
```


```
freeswitch@instance-iqwpq51e> global_getvar external_sip_ip
182.61.24.127


freeswitch@instance-iqwpq51e> global_getvar external_rtp_ip
-ERR no reply
```