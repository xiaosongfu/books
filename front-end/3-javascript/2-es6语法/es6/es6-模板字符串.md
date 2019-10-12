## 模板字符串

ES6支持模板字符串，使得字符串的拼接更加的简洁、直观。

不使用模板字符串：

```
var name = 'Your name is ' + first + ' ' + last + '.'
```

使用模板字符串：

```
var name = `Your name is ${first} ${last}.`
```

在ES6中通过${}就可以完成字符串的拼接，只需要将变量放在大括号之中。
