Intellij IDEA 社区版和旗舰版，还有 Android Studio 3.0 都自带了 kotlin 插件，开箱即用。Eclipse 可以通过安装插件支持 kotlin 开发。

当然也可以使用任意的文本编辑器，配合 kotlin 编译器实现在命令行构建和运行。

## 安装编译器

下载编译器并解压，并将 bin 目录添加到环境变量。bin 目录包含编译和运行 kotlin 代码的脚步。

需要从 Github Release 页面下载，最新的是 1.3.0: [https://github.com/JetBrains/kotlin/releases/tag/v1.3.0](https://github.com/JetBrains/kotlin/releases/tag/v1.3.0)

除了这样手动下载安装外，还可以使用各个系统的包管理工具下载，如 homebrew、sdkman、snap 等。

## 运行 hello world

新建 hello.kt 文件，输入如下内容：

```
fun main(args: Array<String>) {
    println("hello world")
}
```

> 方式一

使用 kotlinc 编译并使用 kotlin 运行。

编译：`kotlinc hello.kt`

编译成功后会在当前目录下生成 helloKt.class 字节码文件。

运行：`kotlin helloKt`

> 方式二

为了⽅便运⾏和管理，往往会将 Kotlin 字节码文件和 Kotlin 运行时打包成⼀一个独⽴的 jar ⽂文件。

使用 kotlin 编译器编译：`kotlinc hello.kt -include-runtime -d hello.jar` 

`-include-runtime` 选项会将 kotlin 运行时包含进去，使得它可以直接运行。

运行应用：`java -jar hello.jar`

---

参考链接：[Working with the Command Line Compiler](https://www.kotlincn.net/docs/tutorials/command-line.html)
