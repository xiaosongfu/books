
https://caddyserver.com/


---

快速的本地文件服务器：

```
$ caddy file-server
```

使用 HTTPS 的地文件服务器：

```
$ caddy file-server --domain example.com
```

HTTPS 反向代理：

```
$ caddy reverse-proxy --from example.com --to localhost:9000
```

使用工作目录中的Caddyfile运行服务器（如果存在）：

```
$ caddy run
```
