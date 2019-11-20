## `luarocks install` & `luarocks show`

```
$ sudo luarocks install dkjson
Installing https://luarocks.org/dkjson-2.5-2.src.rock

dkjson 2.5-2 is now installed in /usr/local (license: MIT/X11)
```

```
$ luarocks show dkjson

dkjson 2.5-2 - David Kolf's JSON module for Lua

dkjson is a module for encoding and decoding JSON data. It supports UTF-8.

JSON (JavaScript Object Notation) is a format for serializing data based on the
syntax for JavaScript data structures.

dkjson is written in Lua without any dependencies, but when LPeg is available
dkjson uses it to speed up decoding.

License:      	MIT/X11
Homepage:     	http://dkolf.de/src/dkjson-lua.fsl/
Installed in: 	/usr/local

Modules:
	dkjson (/usr/local/share/lua/5.3/dkjson.lua)

Depends on:
	lua >= 5.1, < 5.4 (using 5.3-1)
```

可以看到 dkjson 被安装到了 `/usr/local/share/lua/5.3/dkjson.lua` 位置。

---

这是在 `/Users/fuxiaosong/dev/sdk/lua/luarocks-3.2.0` 目录执行的结果：

```
$ luarocks install dkjson
Installing https://luarocks.org/dkjson-2.5-2.src.rock

No existing manifest. Attempting to rebuild...
dkjson 2.5-2 is now installed in /Users/fuxiaosong/dev/sdk/lua/luarocks-3.2.0/./lua_modules (license: MIT/X11)
```

```
$ tree ./lua_modules
./lua_modules
├── lib
│   └── luarocks
│       └── rocks-5.3
│           ├── dkjson
│           │   └── 2.5-2
│           │       ├── dkjson-2.5-2.rockspec
│           │       ├── doc
│           │       │   └── readme.txt
│           │       └── rock_manifest
│           └── manifest
└── share
    └── lua
        └── 5.3
            └── dkjson.lua

9 directories, 5 files
```
