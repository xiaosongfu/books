> 目录：

1. 配置 FreeSwitch 启用 Https
2. 申请 https 证书
3. 配置 https 证书
4. 查看 ws 和 wss 是否起作用

---

## 1. 配置 FreeSwitch 启用 Https

修改 `conf/vars.xml` 配置文件，将 `internal_ssl_enable` 和 `external_ssl_enable` 设置为 `true`：

```
<!-- Internal SIP Profile -->
<X-PRE-PROCESS cmd="set" data="internal_auth_calls=true"/>
<X-PRE-PROCESS cmd="set" data="internal_sip_port=5060"/>
<X-PRE-PROCESS cmd="set" data="internal_tls_port=5061"/>
<X-PRE-PROCESS cmd="set" data="internal_ssl_enable=true"/>

<!-- External SIP Profile -->
<X-PRE-PROCESS cmd="set" data="external_auth_calls=false"/>
<X-PRE-PROCESS cmd="set" data="external_sip_port=5080"/>
<X-PRE-PROCESS cmd="set" data="external_tls_port=5081"/>
<X-PRE-PROCESS cmd="set" data="external_ssl_enable=true"/>
```

修改 `conf/sip_profiles/internal.xml` 配置文件，确保 wss 端口绑定设置已经打开（默认就是已经打开了的）：

```
<!-- for sip over websocket support -->
<param name="ws-binding"  value=":5066"/>

<!-- for sip over secure websocket support -->
<!-- You need wss.pem in $${certs_dir} for wss or one will be created for you -->
<param name="wss-binding" value=":7443"/>
```

## 2. 申请 https 证书

这里我们使用 [certbot](https://certbot.eff.org/lets-encrypt/centosrhel7-nginx) 自动从 let's encrypt 申请证书，需要先准备域名，并配置好 DNS 解析。

使用 `certbot certonly` 申请证书：

```
# certbot certonly
Saving debug log to /var/log/letsencrypt/letsencrypt.log

How would you like to authenticate with the ACME CA?
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
1: Spin up a temporary webserver (standalone)
2: Place files in webroot directory (webroot)
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Select the appropriate number [1-2] then [enter] (press 'c' to cancel): 1
Plugins selected: Authenticator standalone, Installer None
Starting new HTTPS connection (1): acme-v02.api.letsencrypt.org
Please enter in your domain name(s) (comma and/or space separated)  (Enter 'c'
to cancel): sip.xiaosongfu.com
Obtaining a new certificate
Performing the following challenges:
http-01 challenge for sip.xiaosongfu.com
Waiting for verification...
Cleaning up challenges

IMPORTANT NOTES:
 - Congratulations! Your certificate and chain have been saved at:
   /etc/letsencrypt/live/sip.xiaosongfu.com/fullchain.pem
   Your key file has been saved at:
   /etc/letsencrypt/live/sip.xiaosongfu.com/privkey.pem
   Your cert will expire on 2020-03-01. To obtain a new or tweaked
   version of this certificate in the future, simply run certbot
   again. To non-interactively renew *all* of your certificates, run
   "certbot renew"
 - If you like Certbot, please consider supporting our work by:

   Donating to ISRG / Let's Encrypt:   https://letsencrypt.org/donate
   Donating to EFF:                    https://eff.org/donate-le
```

证书申请成功后会保存在 `/etc/letsencrypt/live/sip.xiaosongfu.com/` 目录：

```
# tree
.
└── sip.xiaosongfu.com
    ├── cert.pem
    ├── chain.pem
    ├── fullchain.pem
    └── privkey.pem

1 directory, 4 files
```

## 3. 配置 https 证书

https 证书的位置由全局变量 certs_dir 来指定，先查询一下证书的位置：

```
freeswitch@instance-iqwpq51e> global_getvar certs_dir
/usr/local/freeswitch/certs
```

通常都是在 `/usr/local/freeswitch/certs` 目录。看一下该目录下都有哪些文件：

```
$ ls certs/
dtls-srtp.pem  wss.pem
```

我们需要修改的就是 wss.pem 文件。

我们刚刚已经申请好了证书，现在开始配置，先切换到证书所在目录：

```
$ cd /etc/letsencrypt/live/sip.xiaosongfu.com/

$ echo '' >> /usr/local/freeswitch/certs/wss.pem && cat cert.pem >> /usr/local/freeswitch/certs/wss.pem && cat privkey.pem >> /usr/local/freeswitch/certs/wss.pem && cat chain.pem >> /usr/local/freeswitch/certs/wss.pem
```

执行完成后需要确认 wss.pem 文件的内容布局是否大概如下：

```
-----BEGIN CERTIFICATE-----
<cert>
-----END CERTIFICATE-----
-----BEGIN RSA PRIVATE KEY-----
<key>
-----END RSA PRIVATE KEY-----
-----BEGIN CERTIFICATE-----
<chain>
-----END CERTIFICATE-----
```

## 4. 查看 ws 和 wss 是否起作用

使用以下命令查看 ws 和 wss 是否起作用：

```
sofia status profile internal
```

如果有输出 `WSS-BIND-URL`，则表示配置成功，如：

```
RTP-IP           	172.16.0.4
Ext-RTP-IP       	182.61.24.127
SIP-IP           	172.16.0.4
Ext-SIP-IP       	182.61.24.127
URL              	sip:mod_sofia@182.61.24.127:5060
BIND-URL         	sip:mod_sofia@182.61.24.127:5060;maddr=172.16.0.4;transport=udp,tcp
TLS-URL          	sip:mod_sofia@182.61.24.127:5061
TLS-BIND-URL     	sips:mod_sofia@182.61.24.127:5061;maddr=172.16.0.4;transport=tls
WS-BIND-URL     	sip:mod_sofia@172.16.0.4:5066;transport=ws
WSS-BIND-URL     	sips:mod_sofia@172.16.0.4:7443;transport=wss
```

## 5. 使用 sip.js 连接测试

使用 sip.js 连接的时候，`wsServers` 需要配置为 `wss://sip.xiaosongfu.com:7443` ：

```
let config = {
  uri: '1001@$182.61.24.129`,
  transportOptions: {
    wsServers: "wss://sip.xiaosongfu.com:7443",
    traceSip: true,
  },
  authorizationUser: this.loginInfo.account,
  password: 1234,
  register: false,
}
this.ua = new UA(config)
```

## mod_verto

`conf/autoload_config/verto.conf.xml` 配置文件：

```
<param name="bind-local" value="$${local_ip_v4}:8081"/>
<param name="bind-local" value="$${local_ip_v4}:8082" secure="true"/>
<param name="force-register-domain" value="$${domain}"/>
<param name="secure-combined" value="$${certs_dir}/wss.pem"/>
<param name="secure-chain" value="$${certs_dir}/wss.pem"/>
<param name="userauth" value="true"/>
```

nginx 配置文件：

```
map $http_upgrade $connection_upgrade {
    default upgrade;
    ''      close;
}

server {
    listen 443;
    listen [::]:443 ssl;
    server_name sip.xiaosongfu.com;
    
    ssl_certificate      /etc/letsencrypt/archive/sip.xiaosongfu.com/fullchain1.pem;
    ssl_certificate_key  /etc/letsencrypt/archive/sip.xiaosongfu.com/privkey1.pem;
    ssl_protocols       TLSv1 TLSv1.1 TLSv1.2;
    ssl_ciphers         HIGH:!aNULL:!MD5;

    location / {
      proxy_pass http://127.0.0.1:5066;
      proxy_http_version 1.1;
      proxy_set_header Upgrade $http_upgrade;
      proxy_set_header Connection $connection_upgrade;
      proxy_read_timeout 86400s;
    }
}

server {
    listen 6443 ssl;
    listen [::]:6443 ssl;
    server_name sip.xiaosongfu.com;
    keepalive_timeout 70;

    ssl_certificate     /etc/letsencrypt/archive/sip.xiaosongfu.com/fullchain1.pem;
    ssl_certificate_key /etc/letsencrypt/archive/sip.xiaosongfu.com/privkey1.pem;
    ssl_protocols       TLSv1 TLSv1.1 TLSv1.2;
    ssl_ciphers         HIGH:!aNULL:!MD5;

    location / {
        root   /root/dev/project/xiaoi/bpo/sipjs-demo/dist;
        index  index.html;
    }
}
```

---


* https://freeswitch.org/confluence/display/FREESWITCH/WebRTC
