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
// 如果b为空时，将变量赋值给b，否则，b的值保持不变。
b ??= a;
```

### ?. 条件成员访问

```
a?.proper
```

### .. 级联运算符

级联运算符 (..) 可以实现对同一个对像进行一系列的操作。 除了调用函数， 还可以访问同一对象上的字段属性。 这通常可以节省创建临时变量的步骤， 同时编写出更流畅的代码。

考虑一下代码：

```
querySelector('#confirm') // 获取对象。
  ..text = 'Confirm' // 调用成员变量。
  ..classes.add('important')
  ..onClick.listen((e) => window.alert('Confirmed!'));
```

第一句调用函数 querySelector() ， 返回获取到的对象。 获取的对象依次执行级联运算符后面的代码， 代码执行后的返回值会被忽略。

上面的代码等价于：

```
var button = querySelector('#confirm');
button.text = 'Confirm';
button.classes.add('important');
button.onClick.listen((e) => window.alert('Confirmed!'));
```

级联运算符可以嵌套，例如：

```
final addressBook = (AddressBookBuilder()
      ..name = 'jenny'
      ..email = 'jenny@example.com'
      ..phone = (PhoneNumberBuilder()
            ..number = '415-555-0100'
            ..label = 'home')
          .build())
    .build();
```

> 提示： 严格的来讲， “两个点” 的级联语法不是一个运算符。 它只是一个 Dart 的特殊语法。