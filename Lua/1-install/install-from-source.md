> 参考：https://www.lua.org/download.html

## 1. 下载源码并编译

```
curl -R -O http://www.lua.org/ftp/lua-5.3.5.tar.gz
tar zxf lua-5.3.5.tar.gz
cd lua-5.3.5

// macOS
make macosx test
// linux
make linux test
```

```
$ make macosx test
cd src && /Applications/Xcode.app/Contents/Developer/usr/bin/make macosx
/Applications/Xcode.app/Contents/Developer/usr/bin/make all SYSCFLAGS="-DLUA_USE_MACOSX" SYSLIBS="-lreadline"
gcc -std=gnu99 -O2 -Wall -Wextra -DLUA_COMPAT_5_2 -DLUA_USE_MACOSX    -c -o lapi.o lapi.c
gcc -std=gnu99 -O2 -Wall -Wextra -DLUA_COMPAT_5_2 -DLUA_USE_MACOSX    -c -o lcode.o lcode.c
gcc -std=gnu99 -O2 -Wall -Wextra -DLUA_COMPAT_5_2 -DLUA_USE_MACOSX    -c -o lctype.o lctype.c

...

src/lua -v
Lua 5.3.5  Copyright (C) 1994-2018 Lua.org, PUC-Rio
```

编译成功后会在 src 目录下生成 `lua` 解释器和 `luac` 编译器。现在已经可以使用 `lua` 或 `luac` 解释执行或编译 lua 程序了，但是如果要进行项目开发，我们还需要将 lua、luac、头文件、库文件等放到正确的位置，只需要执行 `make install` 命令即可：

```
$ make install
cd src && mkdir -p /usr/local/bin /usr/local/include /usr/local/lib /usr/local/man/man1 /usr/local/share/lua/5.3 /usr/local/lib/lua/5.3
cd src && install -p -m 0755 lua luac /usr/local/bin
cd src && install -p -m 0644 lua.h luaconf.h lualib.h lauxlib.h lua.hpp /usr/local/include
cd src && install -p -m 0644 liblua.a /usr/local/lib
cd doc && install -p -m 0644 lua.1 luac.1 /usr/local/man/man1
```

通过命令输出我们可以看到 `make install` 命令完成如下工作：

1. 将 `lua、luac` 复制到 `/usr/local/bin` 目录中
2. 将 `lua.h luaconf.h lualib.h lauxlib.h lua.hpp` 文件复制到 `/usr/local/include` 目录中
3. 将 `liblua.a` 库文件复制到 `/usr/local/lib` 目录中
4. 将 `lua.1 luac.1` 手册文件复制到 `/usr/local/man/man1` 目录中

## 2. 使用 lua 和 luac

test.lua 文件：

```
print('abc')
```

使用 `lua` 解释器解释运行 lua 程序：

```
$ lua test.lua
abc
```

使用 `luac` 编译器编译 lua 程序：

```
$ luac test.lua
```

会在当前目录生成 `test.out` 文件。
