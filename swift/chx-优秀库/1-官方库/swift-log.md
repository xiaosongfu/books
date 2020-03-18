https://github.com/apple/swift-log

---

该 package 只是一个 `logging API` 规范，需要配合 `logging backend` 实现一起来完成日志打印。

仅出于完整性考虑，该 package 实际上包含了一个过于简单且不可配置的日志后端实现，该实现仅将所有日志消息写入 stdout。

包括这种过于简单的日志后端实现的原因是为了改善首次使用体验。假设您开始一个项目并第一次尝试 SwiftLog，那么，看到您记录的内容以简单的格式出现在 stdout上 总比没有发生任何事情要好得多。对于任何实际应用程序，我们建议配置另一个以您喜欢的日志后端实现来完成日志的打印。

社区有很多日志后端实现：

* https://github.com/IBM-Swift/HeliumLogger

支持的日志级别：

* trace
* debug
* info
* notice
* warning
* error
* critical


---

### Adding the dependency

To depend on the logging API package, you need to declare your dependency in your Package.swift:

```
.package(url: "https://github.com/apple/swift-log.git", from: "1.0.0"),
```

and to your application/library target, add "Logging" to your dependencies, e.g. like this:

```
.target(name: "BestExampleApp", dependencies: ["Logging"]),
```

### Let's log

```
// 1) let's import the logging API package
import Logging

// 2) we need to create a logger, the label works similarly to a DispatchQueue label
let logger = Logger(label: "com.example.BestExampleApp.main")

// 3) we're now ready to use it
logger.info("Hello World!")
```

### Output

```
2019-03-13T15:46:38+0000 info: Hello World!
```
