使用 throw 来抛出一个错误和使用 throws 来表示一个可以抛出错误的函数。

```
enum PrinterError: Error {
    case outOfPaper
    case noToner
    case onFire
}

func send(job: Int, toPrinter printerName: String) throws -> String {
    if printerName == "Never Has Toner" {
        throw PrinterError.noToner
    }
    return "Job sent"
}
```

## do-catch 处理错误

在 do 代码块中，使用 try 来标记可以抛出错误的代码。在 catch 代码块中，除非你另外命名，否则错误会自动命名为 error 。

```
do {
    let printerResponse = try send(job: 1040, toPrinter: "Bi Sheng")
    print(printerResponse)
} catch {
    print(error)
}
```

可以使用多个 catch 块来处理特定的错误。参照 switch 中的 case 风格来写 catch。

```
do {
    let printerResponse = try send(job: 1440, toPrinter: "Gutenberg")
    print(printerResponse)
} catch PrinterError.onFire {
    print("I'll just put this over here, with the rest of the fire.")
} catch let printerError as PrinterError {
    print("Printer error: \(printerError).")
} catch {
    print(error)
}
```

## try? 处理错误

使用 try? 将结果转换为可选的。如果函数抛出错误，该错误会被抛弃并且结果为 nil。否则，结果会是一个包含函数返回值的可选值。

```
let printerSuccess = try? send(job: 1884, toPrinter: "Mergenthaler")
let printerFailure = try? send(job: 1885, toPrinter: "Never Has Toner")
```



