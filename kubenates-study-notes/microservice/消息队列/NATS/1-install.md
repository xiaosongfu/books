## 1. 下载预编译的可执行文件

```
wget https://github.com/nats-io/gnatsd/releases/download/v1.4.1/gnatsd-v1.4.1-darwin-amd64.zip
```

## 2. 使用默认配置直接启动服务

使用默认配置没有认证，没有集群。

启动的时候不需要任何命令行参数或配置文件。

默认监听 4222 端口。

```
$ gnatsd-v1.4.1-darwin-amd64/gnatsd
[2080] 2019/04/17 10:31:59.851215 [INF] Starting nats-server version 1.4.1
[2080] 2019/04/17 10:31:59.851323 [INF] Git commit [not set]
[2080] 2019/04/17 10:31:59.852186 [INF] Listening for client connections on 0.0.0.0:4222
[2080] 2019/04/17 10:31:59.852198 [INF] Server is ready
```

使用 docker 运行：

```
$ docker run -d --name nats-main -p 4222:4222 -p 6222:6222 -p 8222:8222 nats
[INF] Starting nats-server version 1.4.1
[INF] Git commit [ce2df36]
[INF] Starting http monitor on 0.0.0.0:8222
[INF] Listening for client connections on 0.0.0.0:4222
[INF] Server is ready
[INF] Listening for route connections on 0.0.0.0:6222
```

Each server exposes multiple ports
* 4222 is for clients.
* 8222 is an HTTP management port for information reporting.
* 6222 is a routing port for clustering.

参考：https://hub.docker.com/_/nats/

## 3. 命令行参数

```
Server Options:
    -a, --addr <host>                Bind to host address (default: 0.0.0.0)
    -p, --port <port>                Use port for clients (default: 4222)
    -P, --pid <file>                 File to store PID
    -m, --http_port <port>           Use port for http monitoring
    -ms,--https_port <port>          Use port for https monitoring
    -c, --config <file>              Configuration file
    -sl,--signal <signal>[=<pid>]    Send signal to gnatsd process (stop, quit, reopen, reload)
                                     <pid> can be either a PID (e.g. 1) or the path to a PID file (e.g. /var/run/gnatsd.pid)
        --client_advertise <string>  Client URL to advertise to other servers
    -t                               Test configuration and exit

Logging Options:
    -l, --log <file>                 File to redirect log output
    -T, --logtime                    Timestamp log entries (default: true)
    -s, --syslog                     Log to syslog or windows event log
    -r, --remote_syslog <addr>       Syslog server addr (udp://localhost:514)
    -D, --debug                      Enable debugging output
    -V, --trace                      Trace the raw protocol
    -DV                              Debug and trace

Authorization Options:
        --user <user>                User required for connections
        --pass <password>            Password required for connections
        --auth <token>               Authorization token required for connections

TLS Options:
        --tls                        Enable TLS, do not verify clients (default: false)
        --tlscert <file>             Server certificate file
        --tlskey <file>              Private key for server certificate
        --tlsverify                  Enable TLS, verify client certificates
        --tlscacert <file>           Client certificate CA for verification

Cluster Options:
        --routes <rurl-1, rurl-2>    Routes to solicit and connect
        --cluster <cluster-url>      Cluster URL for solicited routes
        --no_advertise <bool>        Advertise known cluster IPs to clients
        --cluster_advertise <string> Cluster URL to advertise to other servers
        --connect_retries <number>   For implicit routes, number of connect retries


Common Options:
    -h, --help                       Show this message
    -v, --version                    Show version
        --help_tls                   TLS help
```

## 4. 配置文件
