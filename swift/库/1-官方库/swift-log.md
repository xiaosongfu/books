https://github.com/apple/swift-log

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
