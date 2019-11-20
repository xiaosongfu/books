从 Lua 5.1 开始，Lua 加入了标准的模块管理机制，可以把一些公用的代码放在一个文件里，以 API 接口的形式在其他地方调用，有利于代码的重用和降低代码耦合度。

## 1. 定义模块

Lua 的模块是由变量、函数等已知元素组成的 table，因此创建一个模块很简单，就是创建一个 table，然后把需要导出的常量、函数放入其中，最后返回这个 table 就行。以下为创建自定义模块 module.lua，文件代码格式如下：

```
-- 文件名为 module.lua
-- 定义一个名为 module 的模块
module = {}
 
-- 定义一个常量
module.constant = "这是一个常量"
 
-- 定义一个函数
function module.func1()
    io.write("这是一个公有函数！\n")
end
 
local function func2()
    print("这是一个私有函数！")
end
 
function module.func3()
    func2()
end
 
return module
```

由上可知，模块的结构就是一个 table 的结构，因此可以像操作调用 table 里的元素那样来操作调用模块里的常量或函数。

上面的 func2 声明为程序块的局部变量，即表示一个私有函数，因此是不能从外部访问模块里的这个私有函数，只能在内部调用，必须通过模块里的公有函数来调用.

## 2. 使用模块

Lua提供了一个名为require的函数用来加载模块。要加载一个模块，只需要简单地调用就可以了。例如：

```
require("<模块名>")
```

或者

```
require "<模块名>"
```

不需要添加 `.lua` 后缀。

执行 require 后会返回一个由模块常量或函数组成的 table，并且还会定义一个包含该 table 的全局变量。

```
-- test_module.lua 文件
-- module 模块为上文提到到 module.lua
require("module")
 
print(module.constant)
 
module.func3()
```

以上代码执行结果为：

```
这是一个常量
这是一个私有函数！
```

或者给加载的模块定义一个别名变量，方便调用：

```
-- test_module2.lua 文件
-- module 模块为上文提到到 module.lua
-- 别名变量 m
local m = require("module")
 
print(m.constant)
 
m.func3()
```

## 3.加载机制

对于自定义的模块，模块文件不是放在哪个文件目录都行，函数 require 有它自己的文件路径加载策略，它会尝试从 Lua 文件或 C 程序库中加载模块。

require 用于搜索 Lua 文件的路径是存放在全局变量 `package.path` 中，当 Lua 启动后，会以环境变量 LUA_PATH 的值来初始这个环境变量。如果没有找到该环境变量，则使用一个编译时定义的默认路径来初始化。

假设 `package.path` 的值是：

```
/usr/local/share/lua/5.3/?.lua
/usr/local/share/lua/5.3/?/init.lua
/usr/local/lib/lua/5.3/?.lua
/usr/local/lib/lua/5.3/?/init.lua
./?.lua
./?/init.lua

```

那么调用 require("module") 时就会尝试将所有的 ? 都替换为模块名去搜索目标，如：

```
/usr/local/share/lua/5.3/moduleFoo.lua
/usr/local/share/lua/5.3/moduleFoo/init.lua
/usr/local/lib/lua/5.3/moduleFoo.lua
/usr/local/lib/lua/5.3/moduleFoo/init.lua
./moduleFoo.lua
./moduleFoo/init.lua
```

如果找过目标文件，则会调用 `package.loadfile` 来加载模块。否则，就会去找 C 程序库。

查找 C 程序库时搜索的文件路径是从全局变量 `package.cpath` 获取，而这个变量则是通过环境变量 LUA_CPATH 来初始。

搜索的策略跟上面的一样，只不过现在换成搜索的是 so 或 dll 类型的文件。如果找得到，那么 require 就会通过 `package.loadlib` 来加载它。
