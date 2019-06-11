## 

## 简单使用

```
var ip = flag.Int("flagname", 1234, "help message for flagname")

var flagvar int
flag.IntVar(&flagvar, "flagname", 1234, "help message for flagname")
```

所有的 flag 都定义好以后调用：

```

```

来解析命令行信息以填充对应的 flag。

```
fmt.Println("ip has value ", *ip)
fmt.Println("flagvar has value ", flagvar)
```