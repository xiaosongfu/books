## 1. 使用字面量

```
// List 使用字面量
var list = [1, 2, 3];
var list = <String>["a", "b", "c"];

// Set 使用字面量
var set = {1, 2, 3};
var set = <String>{"a", "b", "c"};

// Map 使用字面量
var list = {
    "a":"b",
    "c":"d",
};
var list = <String, String>{
    "a":"b",
    "c":"d",
};
```

## 2. 使用构造方法

```
// List 使用构造方法
var names = List<String>();
var names = List();

// Map 使用构造方法
var gifts = Map<String, String>();
var gifts = Map();

// Set 使用构造方法
var set = Set<String>();
var set = Set();
```

## 3. 空值字面量

```
var list = [];
var list = <String>[];

var map = {};
var map = <String, String>{};

var set = <String>{};
Set<String> set = {};
```

Set 的字面量方式是在 v2.2.0 才引入的，所以为了向后兼容，'{}' 表示为空的 Map。
