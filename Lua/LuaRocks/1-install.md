参考：https://luarocks.org/#quick-start

---

```
wget https://luarocks.org/releases/luarocks-3.2.0.tar.gz
tar -zxpf luarocks-3.2.0.tar.gz
cd luarocks-3.2.0

./configure
make & make install
```

```
$ ./configure

Configuring LuaRocks version 3.2.0...

Lua version detected: 5.3
Lua interpreter found: /usr/local/bin/lua
lua.h found: /usr/local/include/lua.h
unzip found in PATH: /usr/bin

Done configuring.

LuaRocks will be installed at......: /usr/local
LuaRocks will install rocks at.....: /usr/local
LuaRocks configuration directory...: /usr/local/etc/luarocks
Using Lua from.....................: /usr/local

* Type make and make install:
  to install to /usr/local as usual.
* Type make bootstrap:
  to install LuaRocks into /usr/local as a rock.
```
