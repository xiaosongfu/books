### expr1 ? expr2 : expr3 条件运算符

haha

### ?? 空感知操作符

···
if (price == null) {
   print("FREE");
} else {
   print(price);
}
···

等同于：`print(price??"FREE")`  => NULL AWARE OPERATORS

### ??= 空感知赋值符

```
// 如果b为空时，将变量 a 赋值给b，否则，b 的值保持不变
b ??= a;
```

### ?. 条件成员访问

```
a?.proper
```
