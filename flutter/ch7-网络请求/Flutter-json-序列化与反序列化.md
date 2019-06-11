1. 手动序列化
    1.1 方法一：Map<String, dynamic> model = jsonDecode(jsonString)
    1.2 方法二：为 model 类实现 fromJson 命名构造函数和 toJson 方法
2. 使用代码生成 

---

> Flutter 中是否有 GSON / Jackson / Moshi？   
答案是没有，因为这样的库需要使用运行时反射，这在 Flutter 中是禁用的。运行时反射会干扰 Dart 的 tree shaking。使用 tree shaking，我们可以在发版时“去除”未使用的代码。这可以显着优化应用程序的大小。

虽然我们不能在 Flutter 中使用运行时反射，但有些库为我们提供了类似易于使用的 API，但它们是基于代码生成的。这种方法就是：使用代码生成。

# 1. 手动序列化

> 使用 `dart:convert` 库实现手动序列化 JSON。

Flutter 中基本的 JSON 序列化非常简单。Flutter 有一个内置 `dart:convert` 库，其中包含一个简单的 JSON 编码器和解码器。

使用 `dart:convert` 库，我们有两种方法来序列化和反序列化：

##### 1.1 方法一：Map<String, dynamic> model = jsonDecode(jsonString)

使用 `jsonDecode` 或 `` 方法解析 json 字符串时，返回的是 Map<String, dynamic>  类型，需要访问 使用 model[key] 的方式来取值。这种方法很不方便，而且容易出错，如 key 拼写错误，此外，这也会让我们失去静态类型语言的类型安全、自动补全等，编译错误也没有了。

##### 1.2 方法二：为 model 类实现 fromJson 命名构造函数和 toJson 方法

我们可以通过为模型类实现 fromJson 命名构造函数和 toJson 方法来避免方法一中遇到的问题。

```
class User {
  final String name;
  final String email;

  User(this.name, this.email);

  User.fromJson(Map<String, dynamic> json)
      : name = json['name'],
        email = json['email'];

  Map<String, dynamic> toJson() =>
    {
      'name': name,
      'email': email,
    };
}
```

序列化：`var user = jsonDecode(json);`
反序列化：`var json=jsonEncod(user);`

反序列化的方法：

```
Map userMap = jsonDecode(jsonString);
var user = User.fromJson(userMap);
```

序列化的方法：

```
String json = jsonEncode(user);
```

这样是不是很方便啊 ^_^

在实践中，User.fromJson 和 User.toJson 方法都需要单元测试到位，以验证正确的行为。但是这也会带来另外一个问题：这两个方法需要我们手工维护，幸运的是我们可以借助开源工具，开源工具为我们完成了根据 json 字符串自动生成 model 类的功能，包括字段、fromJson、toJson 方法。具体的工具请参考文末的“参考”。

# 2. 使用代码生成 

以 json_serializable 包为例，它是一个自动化的源代码生成器，可以为我们生成 JSON 序列化模板。

添加3个依赖：

```
dependencies:
  json_annotation: ^2.0.0

dev_dependencies:
  build_runner: ^1.0.0
  json_serializable: ^2.0.0
```

使用 @JsonSerializable() @JsonKey() 注解。

使用 `flutter packages pub run build_runner build` 命令生成一次
使用 `flutter packages pub run build_runner watch` 命令持续生成

最后，反序列化的方法：

```
Map userMap = jsonDecode(jsonString);
var user = User.fromJson(userMap);
```

序列化的方法：

```
String json = jsonEncode(user);
```

---

> 参考

1. [JSON和序列化-flutter.io](https://flutterchina.club/json)
2. 根据 json 字符串生成 dart 类的在线工具：http://json2dart.com/
3. 根据 json 字符串生成 dart 类的在线工具：https://javiercbk.github.io/json_to_dart/