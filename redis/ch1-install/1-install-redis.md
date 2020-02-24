整理自：https://github.com/antirez/redis/blob/unstable/README.md

---

* 1. 从源码编译
* 2. 启动服务器
* 3. 简单使用
* 4. 配置 Redis 作为后台守护程序

---

## 1. 从源码编译

从官网获取源码下载地址，然后下载并解压源码：

```
$ wget http://download.redis.io/releases/redis-5.0.4.tar.gz
$ tar xzf redis-5.0.4.tar.gz
$ cd redis-5.0.4
```

编译源码：

```
$ make
```

> 我的执行记录：需要安装 gcc `yum install -y gcc`，并且得使用 libc：`make MALLOC=libc`

内存分配器在 linux 上默认使用 jemalloc，因为 jemalloc 已证明比 libc 具有更少的碎片问题。如果要强制使用 libc，需要明确指定：

```
$ make MALLOC=libc
```

## 2. 启动服务器

编译的二进制文件在 src 目录中可用。要使用默认配置运行 Redis，只需执行以下命令：

```
$ src/redis-server
```

如果需要使用自己的 redis.conf 配置文件，只需要指定配置文件位置记录：

```
$ src/redis-server /path/to/redis.conf
```

也可以使用命令行参数指定配置项：

```
$ src/redis-server --port 9999
```

使用命令行参数的方式支持 redis.conf 中的所有选项作为命令行参数，名称也完全相同，如：

```
port 9999
```

## 3. 简单使用

可以使用内置客户端（redis-cli）与 Redis 进行交互：

```
$ src/redis-cli
redis> set foo bar
OK
redis> get foo
"bar"
```

## 4. 配置 Redis 作为后台守护程序

使用 `make install` 将 redis 安装到 `/usr/local/bin` 目录下：

```
$ make install
```

make install 只会在系统中安装二进制文件，但不会在适当的位置配置 init 脚本和配置文件。可以使用随源码一起提供的脚步来完成这些工作：

```
$ utils/install_server.sh
```

该脚本将向您提出几个问题，并将设置您正确运行Redis作为后台守护程序所需的一切，该守护程序将在系统重新启动时重新启动。

默认的 redis.conf 配置文件位于：`/etc/redis/redis.conf`。

---

* `make` 只是在 src 目录编译好 redis-server 和 redis-cli 可执行文件；
* `make install` 只是将 redis-server 可执行文件移动到 `/usr/local/bin` 目录下；
* `utils/install_server.sh` 才会将 redis-server 配置会后台守护进程，并且设置开机自启动。

---

启动服务：

```
$ src/redis-server
31358:C 14 Apr 2019 18:24:44.552 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
31358:C 14 Apr 2019 18:24:44.552 # Redis version=5.0.4, bits=64, commit=00000000, modified=0, pid=31358, just started
31358:C 14 Apr 2019 18:24:44.552 # Warning: no config file specified, using the default config. In order to specify a config file use src/redis-server /path/to/redis.conf
                _._                                                  
           _.-``__ ''-._                                             
      _.-``    `.  `_.  ''-._           Redis 5.0.4 (00000000/0) 64 bit
  .-`` .-```.  ```\/    _.,_ ''-._                                   
 (    '      ,       .-`  | `,    )     Running in standalone mode
 |`-._`-...-` __...-.``-._|'` _.-'|     Port: 6379
 |    `-._   `._    /     _.-'    |     PID: 31358
  `-._    `-._  `-./  _.-'    _.-'                                   
 |`-._`-._    `-.__.-'    _.-'_.-'|                                  
 |    `-._`-._        _.-'_.-'    |           http://redis.io        
  `-._    `-._`-.__.-'_.-'    _.-'                                   
 |`-._`-._    `-.__.-'    _.-'_.-'|                                  
 |    `-._`-._        _.-'_.-'    |                                  
  `-._    `-._`-.__.-'_.-'    _.-'                                   
      `-._    `-.__.-'    _.-'                                       
          `-._        _.-'                                           
              `-.__.-'                                               

31358:M 14 Apr 2019 18:24:44.554 # WARNING: The TCP backlog setting of 511 cannot be enforced because /proc/sys/net/core/somaxconn is set to the lower value of 128.
31358:M 14 Apr 2019 18:24:44.554 # Server initialized
31358:M 14 Apr 2019 18:24:44.554 # WARNING overcommit_memory is set to 0! Background save may fail under low memory condition. To fix this issue add 'vm.overcommit_memory = 1' to /etc/sysctl.conf and then reboot or run the command 'sysctl vm.overcommit_memory=1' for this to take effect.
31358:M 14 Apr 2019 18:24:44.554 # WARNING you have Transparent Huge Pages (THP) support enabled in your kernel. This will create latency and memory usage issues with Redis. To fix this issue run the command 'echo never > /sys/kernel/mm/transparent_hugepage/enabled' as root, and add it to your /etc/rc.local in order to retain the setting after a reboot. Redis must be restarted after THP is disabled.
31358:M 14 Apr 2019 18:24:44.554 * Ready to accept connections
```