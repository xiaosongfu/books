
原文地址：[DevStack](https://docs.openstack.org/devstack/latest/)

## Add Stack User

add user

```
$ sudo useradd -s /bin/bash -d /opt/stack -m stack
```

let it has sudo privileges

```
$ echo "stack ALL=(ALL) NOPASSWD: ALL" | sudo tee /etc/sudoers.d/stack
$ sudo su - stack
```

## Download DevStack

```
$ git clone https://git.openstack.org/openstack-dev/devstack
$ cd devstack
```

## Create a local.conf

Create a `local.conf` file with 4 passwords preset at the root of the devstack git repo.

```
vi local.conf
```

```
[[local|localrc]]
ADMIN_PASSWORD=secret
DATABASE_PASSWORD=$ADMIN_PASSWORD
RABBIT_PASSWORD=$ADMIN_PASSWORD
SERVICE_PASSWORD=$ADMIN_PASSWORD
```

## Start the install

```
./stack.sh
```

This will take a 15 - 20 minutes, largely depending on the speed of your internet connection. Many git trees and packages will be installed during this process.
这将需要15-20分钟，主要取决于您的互联网连接速度。在此过程中将安装许多git树和包。

Your devstack will have installed `keystone`, `glance`, `nova`, `cinder`, `neutron`, and `horizon`. Floating IPs will be available, guests have access to the external world.
你的 devstack 将安装 `keystone`，`glance`，`nova`，`cinder`，`neutron` 和 `horizo​​n`。浮动 IP 将可用，客人可以访问外部世界。

You can access horizon to experience the web interface to OpenStack, and manage vms, networks, volumes, and images from there.
您可以访问horizo​​n来体验OpenStack的Web界面，并从那里管理vms，网络，卷和图像。

You can source openrc in your shell, and then use the openstack command line tool to manage your devstack.
您可以在shell中执行 `source openrc`，然后使用 `openstack` 命令行工具来管理您的devstack。

---

命令执行记录：

```

.......

=========================
DevStack Component Timing
 (times are in seconds)
=========================
run_process           22
test_with_retry        2
apt-get-update        16
pip_install          699
osc                  126
wait_for_service      38
dbsync                30
apt-get                9
-------------------------
Unaccounted time     504
=========================
Total runtime        1446



This is your host IP address: 192.168.153.191
This is your host IPv6 address: ::1
Horizon is now available at http://192.168.153.191/dashboard
Keystone is serving at http://192.168.153.191/identity/
The default users are: admin and demo
The password: secret

WARNING:
Using lib/neutron-legacy is deprecated, and it will be removed in the future


Services are running under systemd unit files.
For more information see:
https://docs.openstack.org/devstack/latest/systemd.html

DevStack Version: stein
Change: 7a52311d803ab76703956969760d63c5d82cffae Merge "Add option to place etcd data dir on RAM disk" 2019-01-29 03:49:08 +0000
OS Version: Ubuntu 16.04 xenial

2019-01-30 01:59:44.200 | stack.sh completed in 1446 seconds.
stack@xiaosongfu-ThinkPad:~/devstack$
```

查看 image：

```
stack@xiaosongfu-ThinkPad:~/devstack$ glance image-list
+--------------------------------------+--------------------------+
| ID                                   | Name                     |
+--------------------------------------+--------------------------+
| 7877f052-d75b-4143-9196-f5691cb08bf1 | cirros-0.4.0-x86_64-disk |
+--------------------------------------+--------------------------+
stack@xiaosongfu-ThinkPad:~/devstack$ ls /opt/stack/data/glance/images/
7877f052-d75b-4143-9196-f5691cb08bf1
stack@xiaosongfu-ThinkPad:~/devstack$
```