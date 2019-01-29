
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