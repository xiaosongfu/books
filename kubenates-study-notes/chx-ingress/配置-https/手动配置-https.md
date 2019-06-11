* 1. 生成 https 私钥和证书
* 2. 使用私钥和证书配置 Secret
* 3. 配置 Ingress

---

# 1. 生成 https 私钥和证书

参考 “附1”

# 2. 使用私钥和证书配置 Secret

```
kubectl create secret tls tls-api-test --cert=api.test.com.cert --key=api.test.com.key
```

# 3. 配置 Ingress

```
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  name: api-test-ingress
spec:
  tls:
    - hosts:
        - api-test.com
      secretName: tls-api-test
  rules:
    - host: api.test.com
      http:
        paths:
          - path: /
            backend:
              serviceName: api-test-service
              servicePort: 80
```

---

# 附1. 生成 https 私钥和证书

https://github.com/Neilpang/acme.sh/wiki/dns-manual-mode

```
$ curl  https://get.acme.sh | sh
[Wed Mar 27 13:53:03 CST 2019] Installing from online archive.
[Wed Mar 27 13:53:03 CST 2019] Downloading https://github.com/Neilpang/acme.sh/archive/master.tar.gz
[Wed Mar 27 13:53:06 CST 2019] Extracting master.tar.gz
[Wed Mar 27 13:53:06 CST 2019] Installing to /root/.acme.sh
[Wed Mar 27 13:53:06 CST 2019] Installed to /root/.acme.sh/acme.sh
[Wed Mar 27 13:53:06 CST 2019] Installing alias to '/root/.bashrc'
[Wed Mar 27 13:53:06 CST 2019] OK, Close and reopen your terminal to start using acme.sh
[Wed Mar 27 13:53:06 CST 2019] Installing alias to '/root/.cshrc'
[Wed Mar 27 13:53:06 CST 2019] Installing alias to '/root/.tcshrc'
[Wed Mar 27 13:53:06 CST 2019] Installing cron job
```

```
$ acme.sh --issue -d api.releasebus.xiaosongfu.com --dns --yes-I-know-dns-manual-mode-enough-go-ahead-please
[Wed Mar 27 23:54:14 CST 2019] Registering account
[Wed Mar 27 23:54:17 CST 2019] Registered
[Wed Mar 27 23:54:17 CST 2019] ACCOUNT_THUMBPRINT='nghf7YVEnKF7oXJUaRnEPTYaMSKTjDY7l0-IqGI9iso'
[Wed Mar 27 23:54:17 CST 2019] Creating domain key
[Wed Mar 27 23:54:17 CST 2019] The domain key is here: /root/.acme.sh/api.releasebus.xiaosongfu.com/api.releasebus.xiaosongfu.com.key
[Wed Mar 27 23:54:17 CST 2019] Single domain='api.releasebus.xiaosongfu.com'
[Wed Mar 27 23:54:17 CST 2019] Getting domain auth token for each domain
[Wed Mar 27 23:54:19 CST 2019] Getting webroot for domain='api.releasebus.xiaosongfu.com'
[Wed Mar 27 23:54:19 CST 2019] Add the following TXT record:
[Wed Mar 27 23:54:19 CST 2019] Domain: '_acme-challenge.api.releasebus.xiaosongfu.com'
[Wed Mar 27 23:54:19 CST 2019] TXT value: '-nkUG7XW8I7KylOTCXA9iBnYr4aEisyZSg7Y109lUH4'
[Wed Mar 27 23:54:19 CST 2019] Please be aware that you prepend _acme-challenge. before your domain
[Wed Mar 27 23:54:19 CST 2019] so the resulting subdomain will be: _acme-challenge.api.releasebus.xiaosongfu.com
[Wed Mar 27 23:54:19 CST 2019] Please add the TXT records to the domains, and re-run with --renew.
[Wed Mar 27 23:54:19 CST 2019] Please add '--debug' or '--log' to check more details.
[Wed Mar 27 23:54:19 CST 2019] See: https://github.com/Neilpang/acme.sh/wiki/How-to-debug-acme.sh
```

```
$ acme.sh --renew -d api.releasebus.xiaosongfu.com --yes-I-know-dns-manual-mode-enough-go-ahead-please
[Thu Mar 28 11:10:12 CST 2019] Renew: 'api.releasebus.xiaosongfu.com'
[Thu Mar 28 11:10:13 CST 2019] Single domain='api.releasebus.xiaosongfu.com'
[Thu Mar 28 11:10:13 CST 2019] Getting domain auth token for each domain
[Thu Mar 28 11:10:13 CST 2019] Verifying: api.releasebus.xiaosongfu.com
[Thu Mar 28 11:10:19 CST 2019] Success
[Thu Mar 28 11:10:19 CST 2019] Verify finished, start to sign.
[Thu Mar 28 11:10:19 CST 2019] Lets finalize the order, Le_OrderFinalize: https://acme-v02.api.letsencrypt.org/acme/finalize/54101772/374242015
[Thu Mar 28 11:10:21 CST 2019] Download cert, Le_LinkCert: https://acme-v02.api.letsencrypt.org/acme/cert/037f96a81720636c6a30b71682ee07dfdef8
[Thu Mar 28 11:10:22 CST 2019] Cert success.
-----BEGIN CERTIFICATE-----
MIIFbjUWrdtYsONYhN/YWwjJlh2AwzD+e+yyPMKithV1Ed5
l58=
-----END CERTIFICATE-----
[Thu Mar 28 11:10:22 CST 2019] Your cert is in  /root/.acme.sh/api.releasebus.xiaosongfu.com/api.releasebus.xiaosongfu.com.cer 
[Thu Mar 28 11:10:22 CST 2019] Your cert key is in  /root/.acme.sh/api.releasebus.xiaosongfu.com/api.releasebus.xiaosongfu.com.key 
[Thu Mar 28 11:10:22 CST 2019] The intermediate CA cert is in  /root/.acme.sh/api.releasebus.xiaosongfu.com/ca.cer 
[Thu Mar 28 11:10:22 CST 2019] And the full chain certs is there:  /root/.acme.sh/api.releasebus.xiaosongfu.com/fullchain.cer 
[Thu Mar 28 11:10:22 CST 2019] It seems that you are using dns manual mode. please take care: The dns manual mode can not renew automatically, you must issue it again manually. You'd better use the other modes instead.
[Thu Mar 28 11:10:22 CST 2019] Call hook error.
```

```
$ pwd
/root/.acme.sh/api.releasebus.xiaosongfu.com

$ ls -ls
total 28
4 -rw-r--r-- 1 root root 1944 Mar 28 11:10 api.releasebus.xiaosongfu.com.cer
4 -rw-r--r-- 1 root root  563 Mar 28 11:10 api.releasebus.xiaosongfu.com.conf
4 -rw-r--r-- 1 root root 1009 Mar 28 11:10 api.releasebus.xiaosongfu.com.csr
4 -rw-r--r-- 1 root root  221 Mar 28 11:10 api.releasebus.xiaosongfu.com.csr.conf
4 -rw-r--r-- 1 root root 1679 Mar 27 23:54 api.releasebus.xiaosongfu.com.key
4 -rw-r--r-- 1 root root 1648 Mar 28 11:10 ca.cer
4 -rw-r--r-- 1 root root 3592 Mar 28 11:10 fullchain.cer
```
