

mod_xml_curl 模块实现将 **静态配置的  xml 配置文件** 换为 **使用 http 请求服务器返回动态 xml 配置文件** 功能。

可以动态获取的配置文件包括：
* configuration   配置
* directory       用户目录
* dialplan        拨号计划



```
<configuration name="xml_curl.conf" description="cURL XML Gateway">
  <bindings>
    <binding name="example">
      <!-- Allow to bind on a particular IP for requests sent -->
      <!--<param name="bind-local" value="$${local_ip_v4}" />-->
      <!-- The url to a gateway cgi that can generate xml similar to
	   what's in this file only on-the-fly (leave it commented if you dont
	   need it) -->
      <!-- one or more |-delim of configuration|directory|dialplan -->
      <!-- <param name="gateway-url" value="http://www.freeswitch.org/gateway.xml" bindings="dialplan"/> -->
    </binding>
  </bindings>
</configuration>
```
