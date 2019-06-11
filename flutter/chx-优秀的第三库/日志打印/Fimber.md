本文整理自：[Flutter and Dart logging](https://medium.com/@magillus/flutter-and-dart-logging-a823ca66b8fb)

* https://github.com/magillus/flutter-fimber
* https://pub.dartlang.org/packages/fimber
* https://pub.dartlang.org/packages/flutter_fimber

---

## 1. Fimber 介绍

> Flutter 版本的 Timber。

* `fimber` Dart package
* `flutter_fimber` Flutter plugin 

## 2. 安装

* for Dart project/package: `fimber: ^0.1.10`
* for Flutter project: `flutter_fimber: ^0.1.9`

## 3. 配置

dart 项目：

```
import 'package:fimber/fimber.dart';

...

Fimber.addTree(DebugTree());
```

Flutter 项目：

```
import 'package:flutter_fimber/flutter_fimber.dart';

...

Fimber.plantTree(DebugTree()); // 不推荐
// or
Fimber.plantTree(FimberTree());
// or
Fimber.plantTree(DebugBufferTree());
```

`DebugTree` 使用普通的 dart 方法来打印日志，这可能会导致丢失一些日志，`FimberTree` 和 `DebugBufferTree` 就不会，他们使用 `debugPrint` 方法，在日志量很大的是会使用缓冲。

> 注意：你可要自己继承 LogTree 抽象类并实现自己的处理逻辑。比如把感兴趣的 log 发送到 Sentry 等。

## 4. 使用

每个日志级别都有简单的静态方法：

```
Fimber.v(...) // Verbose level logging
Fimber.d(...) // Debug level logging
Fimber.i(...) // Info level logging
Fimber.w(...) // Warning level logging
Fimber.e(...) // Error level logging
```

```
var logger = FimberLog("MY_TAG");
logger.v();
logger.d();
logger.i();
logger.w();
logger.e();
```

每个方法都有字符串类型的参数和可选的参数：

```
Fimber.w("Error caught.", ex: e, stacktrace: stacktrace);
```

提供 `ex` 参数将记录该异常。实际上 `ex` 参数可以接受任何对象，因为Dart中的异常/错误是无关的。

如果没有提供 `stacktrace` 作为参数并且日志有异常，则将附加进行日志位置的堆栈信息。

使用 参数通常是很重要的，如：

```
try {
  throw Exception("Exception thrown");
} catch (e, stacktrace) {
  // providing stacktrace will better show where issue was thrown
  Fimber.i("Error caught.", ex: e, stacktrace: stacktrace);
}
```

使用 `Fimber.<anylevel>()` 方法的一个缺点是每次使用时都会生成 TAG 名称，有两种方法可以克服这个小缺点：

1. 使用类级别记录器-可以创建为静态变量：

```
var logger = FimberLog("MY_TAG");
logger.d("Test message", ex: Exception("test error"));
logger.w("Test message with parameter: $parameter");
```

2. 使用 logger

```
// save time without auto tag generation on each call in call block.
Fimber.withTag("TEST BLOCK", (log) {
  log.d("Started block");
  for (var i = 0; i >= 1; i++) {
    log.d("value: $i");
  }
  log.i("End of block");
});
```

## 5. 日志格式

默认的日志格式如下：

Default formatting: `"$level\t$logTag:\t $msg"`

Formatting with exception and stacktrace: `"$level\t$logTag:\t $msg \n${ex.toString()}\n$stackTraceMessage"`


开发人员可以创建自己的 LogTree（或继承 DebugTree）来覆盖 `log` 方法或 `printLog` 方法来改变格式：

```
@override
void log(String level, String msg, {String tag, dynamic ex, StackTrace stacktrace}){

}
```

此外，还有 `CustomFormatTree` 允许使用一些关键属性定义格式，而无需覆盖 `log` 方法。
