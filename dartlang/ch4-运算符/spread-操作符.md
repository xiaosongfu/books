## Spread 操作符 (...) 和 null-aware Spread 操作符

Dart 在 2.3 引入了 Spread 操作符 (...) 和 null-aware Spread 操作符 (...?)，它提供了一种将多个元素插入集合的简洁方法。

例如，你可以使用 Spread 操作符 (...) 将一个 List 中的所有元素插入到另一个 List 中：

```
var list = [1, 2, 3];
var list2 = [0, ...list];
assert(list2.length == 4);
```

如果 Spread 操作符右边可能为 null ，你可以使用 null-aware Spread 操作符 (...?) 来避免产生异常：

```
var list;
var list2 = [0, ...?list];
assert(list2.length == 1);
```
