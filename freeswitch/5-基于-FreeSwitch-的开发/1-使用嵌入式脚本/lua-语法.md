
## 库函数和面向对象

lua 是面向过程的编程语言，但是从 5.1 开始，也支持类似面向对象的语法，如：

```
local mystr = "abcd"

-- 面向过程 - 使用库函数
print(string.len(mystr))

-- 面向对象
print(mystr:len())
```
