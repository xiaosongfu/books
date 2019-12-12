该应用程序允许发出HTTP请求并接收响应。输出可以是纯文本（标题可选）或json对象。

## 

curl应用程序的语法为：

<action application="curl" data="url [headers|json] [get|head|post [url_encode_data]]"/>

## 

这显示了如何执行GET请求：

session:execute("curl", "http://www.myhost.com/?name1=value1&name2=value2")
curl_response_code = session:getVariable("curl_response_code")
curl_response      = session:getVariable("curl_response_data")
这显示了如何执行POST请求：

session:execute("curl", "http://www.myhost.com/ post name1=value1&name2=value2")
curl_response_code = session:getVariable("curl_response_code")
curl_response      = session:getVariable("curl_response_data")
这显示了如何配置超时（以秒为单位）：

session:setVariable("curl_timeout", "10")
session:execute("curl", "http://www.myhost.com/ post name1=value1&name2=value2")
您还可以使用API​​接口：

api = freeswitch.API();
get_response = api:execute("curl", "http://www.myhost.com/?name1=value1&name2=value2")
post_response = api:execute("curl", "http://www.myhost.com/ post name1=value1&name2=value2")


