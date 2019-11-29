



uri
authorizationUser
password String


register  Boolean 是否自动注册，默认值为 true



```
var config = {
  // 替换 IP 地址为自己的 FreeSWITCH IP 地址
  uri: '1000@127.0.0.1',

  // 替换 IP 地址和 port 为自己的 FreeSWITCH 的 IP 地址和 port
  ws_servers: 'ws://127.0.0.1:5066',

  // 登录用户名
  authorizationUser: '1000',

  // 密码
  password: '1234'
};

var ua = new SIP.UA(config);
```

