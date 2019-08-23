## 声明语法



## 原始值

使用 `rawValue` 属性来访问一个枚举成员的原始值：

```
enum Rank: Int {
    case ace = 1
    case two, three, four, five, six, seven, eight, nine, ten
}

let ace = Rank.ace
let aceRawValue = ace.rawValue
```

使用 `init?(rawValue:)` 初始化构造器来创建一个带有原始值的枚举成员。如果存在与原始值相应的枚举成员就返回该枚举成员，否则就返回 nil：

```
if let convertedRank = Rank(rawValue: 3) {
    let threeDescription = convertedRank.simpleDescription()
}
```

## 关联值

我们可以为枚举成员设定关联值，关联值是在创建实例时决定的。

```
enum ServerResponse {
    case result(String, String)
    case failure(String)
}

let success = ServerResponse.result("6:00 am", "8:09 pm")
let failure = ServerResponse.failure("Out of cheese")

switch success {
case let .result(sunrise, sunset):
    print("Sunrise is at \(sunrise) and sunset is at \(sunset)")
case let .failure(message):
    print("Failure...  \(message)")
}
```



