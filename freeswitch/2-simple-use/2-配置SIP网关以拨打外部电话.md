## 为 FreeSwitch 配置 SIP 网关

如果拥有某个运营商提供的 SIP 账号，就可以通过配置 SIP 网关来拨打外部电话了。

在 `conf/sip_profiles/external/` 中新建一个 xml 文件，名字任意，如 `vi conf/sip_profiles/external/gw-xiaoi.xml`，在文件中输入以下内容：

```
<gateway name="gw-xiaoi">
  <param name="realm" value="192.168.160.11"/>
  <param name="register" value="false"/>
</gateway>
```

可以重启 FreeSwitch 或使用以下命令使之生效：

```
freeswitch> sofia profile external rescan
```

查看网关的注册状态：

```
freeswitch> sofia status
```

如果显示 REGED，则表明已经正确注册到网关上了，我们可以直接使用网关呼电话出去测试一下，看网关是否正常工作：

```
freeswitch> originate sofia/gateway/gw-xiaoi/18512341234 &echo
```

这里是直接使用网关呼叫电话，所以是直接呼叫电话号码，如果是使用某一个软电话呼叫，是无法呼通的，还需要配置，接下来我们配置一下。

## 配置可以从分机上呼出

由于我们是把 FreeSwitch 当做 PBX 用，所以需要选一个出局字冠。常见的 PBX 一般是内部拨小号，打外部电话就需要加拨 0 或者 9。让我们配置一下，先在 `conf/dialplan/default/` 目录下创建一个一个 xml 文件，如 call_out.xml，输入如下内容：

```
<include>
  <extension name="call out">
    <condition field="destination_number" expression="^0(\d+)$">
      <action application="bridge" data="sofia/gateway/gw-xiaoi/$1/>
    </condition>
  </extension>
</include>
```

其中，"^0(\d+)$" 为正则表达式，"^(\d+)$" 匹配 0 后面的所有数字并存到变量 $1 中。然后通过 bridge 程序通过网关 gw-xiaoi 呼叫该号码。

## 处理网关来话呼入

在 `conf/dialplan/public/my_did.xml`

```
<include>
  <extension name="my did">
    <condition field="destination_number" expression="^(0851848488652)$">
      <action application="transfer" data="1000 XML default" />
    </condition>
  </extension>
</include>
```

执行 reloadxml 使新配置生效。

上述配置会将网关来话呼入直接转接到分机 1000 上。

还可以更灵活的处理网关来话呼入，比如转接到语音菜单或者语音信箱等。

如转接到 ivr：

```
<include>
  <extension name="my did">
    <condition field="destination_number" expression="^(0851848488652)$">
    <action application="answer"/>
    <action application="sleep" data="2000"/>
    <action application="ivr" data="demo_ivr"/>
  </extension>
</include>
```

---

> 配置之前：

```
freeswitch@localhost.localdomain> sofia status
                     Name	   Type	                                      Data	State
=================================================================================================
            external-ipv6	profile	                  sip:mod_sofia@[::1]:5080	RUNNING (0)
           192.168.160.46	  alias	                                  internal	ALIASED
                 external	profile	          sip:mod_sofia@222.85.230.14:5080	RUNNING (0)
    external::example.com	gateway	                   sip:joeuser@example.com	NOREG
            internal-ipv6	profile	                  sip:mod_sofia@[::1]:5060	RUNNING (0)
                 internal	profile	         sip:mod_sofia@192.168.160.46:5060	RUNNING (0)
=================================================================================================
4 profiles 1 alias
```

> 配置之后：

```
freeswitch@localhost.localdomain> sofia status
                     Name	   Type	                                      Data	State
=================================================================================================
            external-ipv6	profile	                  sip:mod_sofia@[::1]:5080	RUNNING (0)
           192.168.160.46	  alias	                                  internal	ALIASED
                 external	profile	          sip:mod_sofia@222.85.230.14:5080	RUNNING (0)
       external::gw-xiaoi	gateway	             sip:FreeSWITCH@192.168.160.11	REGED
    external::example.com	gateway	                   sip:joeuser@example.com	NOREG
            internal-ipv6	profile	                  sip:mod_sofia@[::1]:5060	RUNNING (0)
                 internal	profile	         sip:mod_sofia@192.168.160.46:5060	RUNNING (0)
=================================================================================================
4 profiles 1 alias
```
