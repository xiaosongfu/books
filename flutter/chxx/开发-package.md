> dart 包：纯的 dart 包

---

> flutter 包： dart package 和 plugin package
 * dart package：用Dart编写的常规包，例如路径包。其中一些可能包含Flutter的特定功能，因此对Flutter框架具有依赖性，仅将其用于Flutter，例如fluro包。

 * plugin package：一种专用的Dart包，其中包含用Dart代码编写的API，以及针对Android（使用Java或Kotlin）和/或针对iOS（使用ObjC或Swift）平台的特定实现。一个具体的例子是battery插件包。plugin package 是 dart package 的专用版本。

---

要创建Dart包，请使用--template=package 来执行 flutter create

---

要创建插件包，请使用--template=plugin参数执行flutter create

`flutter create --org com.example --template=plugin hello`

这将在hello/文件夹下创建一个具有以下专用内容的插件工程：

lib/hello.dart:插件包的Dart API.
android/src/main/java/com/yourcompany/​hello/HelloPlugin.java:插件包API的Android实现.
ios/Classes/HelloPlugin.m:插件包API的ios实现.
example/:一个依赖于该插件的Flutter应用程序，来说明如何使用它


---


发布 packages
一旦你实现了一个包，你可以在Pub上发布它 ，这样其他开发人员就可以轻松使用它

在发布之前，检查pubspec.yaml、README.md以及CHANGELOG.md文件，以确保其内容的完整性和正确性。

然后, 运行 dry-run 命令以查看是否都准备OK了:

`flutter packages pub publish --dry-run`

最后, 运行发布命令:

`flutter packages pub publish`
