原文链接：[https://golang.google.cn/doc/effective_go.html](https://golang.google.cn/doc/effective_go.html)

---

* 介绍
    * 例子
* 格式化
* 注释
* 名称
    * 包名称
    * Getters
    * 接口名称
    * MixedCaps
* 分号
* 控制结构
    * If
    * 重新声明和重新分配
    * For
    * Switch
    * Type Switch
* 函数
    * 多个返回值
    * 命名返回参数
    * Defer
    * 数据
    * 用新的分配
    * 构造函数和复合文字
    * 用make分配
    * Arrays
    * Slices
    * 二维 slices
    * Mapa
    * 打印
    * 追加
* 初始化
    * 常量
    * 变量
    * init函数
* 方法
    * 指针与价值观
* 接口和其他类型
    * 接口
    * 转换
    * 接口转换和类型断言
    * 概论
    * 接口和方法
* 空白标识符
    * 多个赋值中的空白标识符
    * 未使用的导入和变量
    * 导入副作用
    * 接口检查
* 嵌入
* 并发
    * 通过通信共享
    * Goroutines
    * Channels
    * Channels of channels
    * 并行
    * 泄漏的缓冲区
* 错误
    * Panic
    * Recover
* 一个Web服务器

---

## 1. 介绍

Go是一种新语言。虽然它借鉴了现有语言的思想，但它具有不同寻常的特性，使得Go程序的有效性与其亲属编写的程序不同。将C ++或Java程序直接转换为Go不太可能产生令人满意的结果 - Java程序是用Java编写的，而不是Go。另一方面，从Go角度思考问题可能会产生一个成功但完全不同的程序。换句话说，要写好 Go，了解它的属性和习语是很重要的。了解Go中编程的既定约定也很重要，例如命名，格式化，程序构造等，这样您编写的程序将很容易让其他Go程序员理解。

本文档提供了编写清晰，惯用Go代码的技巧。它增强了 [language specification]()，[Tour of Go]() 和 [How to Write Go Code]()，你应该先阅读这些文档。

#### 1.1 例子

[Go 源码](https://golang.google.cn/src/) 的目的不仅仅是作为核心库，而且也作为如何使用 go 语言的例子。此外，许多软件包包含可以直接从 golang.org 网站运行的工作，自包含的可执行示例 ，例如 [这个]()（如果需要，单击“示例”一词将其打开）。如果您对如何处理问题或如何实现某些问题有疑问，那么库中的文档，代码和示例可以提供答案，想法和背景。

## 2. 格式化

格式化问题是最具争议性但最不重要的问题。人们可以适应不同的格式样式，但如果他们需要适应就更好了，如果每个人都坚持相同的风格，那么专注于格式化的时间就会减少。问题是如何在没有长期规定风格指南的情况下接近这个乌托邦。

对于 Go，我们采取了一种不寻常的方法：让机器处理大多数格式问题。该gofmt程序（也可用go fmt，在包级别而不是源文件级别运行）读取Go程序并以标准样式的缩进和垂直对齐方式发出源，保留并在必要时重新格式化注释。如果你想知道如何处理一些新的布局情况，请运行gofmt; 如果答案似乎不正确，重新安排你的程序（或提出错误gofmt），不要解决它。

例如，没有必要花时间排列结构字段的注释。 Gofmt会为你做那件事。鉴于声明

## 3. 注释

Go提供C风格的 `/* */` 块注释和 C++ 风格的 `//` 行注释。行注释经常被使用; 块注释主要作为为包注释出现，但在表达式或禁用大量代码时很有用。

godoc(是一个程序，也是一个 Web 服务器)处理Go  源文件以提取有关包内容的文档。在顶级声明之前出现的注释（没有中间换行符）将与声明一起提取，以作为项目的解释性文本。这些注释的性质和风格决定了由 godoc 处理得到的文档的质量。

每个包都应该有一个包注释，在package子句之前有一个块注释。对于多文件包，包注释只需要存在于一个文件中，任何一个都可以。包注释应该介绍包，并提供与整个包相关的信息。它将首先出现在godoc页面上，一个像下面的示例这样设置详细的文档。

```
/*
Package regexp implements a simple library for regular expressions.

The syntax of the regular expressions accepted is:

    regexp:
        concatenation { '|' concatenation }
    concatenation:
        { closure }
    closure:
        term [ '*' | '+' | '?' ]
    term:
        '^'
        '$'
        '.'
        character
        '[' [ '^' ] character-ranges ']'
        '(' regexp ')'
*/
package regexp
```

如果包很简单，那么包评论可以是简短的。

```
// Package path implements utility routines for
// manipulating slash-separated filename paths.
```

## 4. 命名

命名在Go中与任何其他语言一样重要。它们甚至具有语义效果：一个命名在包外的可见性取决于其第一个字符是否为大写。因此，花一点时间讨论Go程序中的命名约定是值得的。

#### 4.1 包名称

导入包时，包名称将成为内容的访问者。

```
import "bytes"
```

导入 `bytes` 包以后就可以访问 `bytes.Buffer` 了。

#### 4.2 Getters

Go不为getter和setter提供自动支持。自己提供getter和setter并没有什么不妥，这通常是合适的，但这既不是惯用的，也不是必须放入GetXxx。如果您有一个名为owner（小写，未导出）的字段 ，则应调用getter方法Owner（大写，导出），而不是GetOwner。使用大写名称进行导出提供了将字段与方法区分开的钩子。如果需要，可能会调用setter函数SetOwner。这两个名字在实践中都很好读：

```
owner := obj.Owner()
if owner != user {
    obj.SetOwner(user)
}

```

#### 4.3 接口名称

按照惯例，只包含一个方法接口由该方法名称加上后缀-er或类似的修改来构成一个名词：Reader， Writer，Formatter， CloseNotifier 等。

#### 4.4 MixedCaps

最后，Go中的约定是使用 MixedCaps 或 mixedCaps，而使用下划线来分隔由多个单词组成的名称。

## 5. 分号

与C一样，Go的正式语法使用分号来终止语句，但与C语言不同，这些分号不会出现在源代码中。相反，词法分析器使用一个简单的规则在扫描时自动插入分号，因此输入文本大多没有分号。

## 6. 控制结构

Go的控制结构与C的控制结构有关，但在重要方面有所不同。没有do或while循环，只是略微概括 for; switch更灵活; if并switch接受类似于的可选初始化语句for; break和continue语句采用可选标签来标识要破坏或继续的内容; 并且存在新的控制结构，包括类型开关和多路通信多路复用器select。语法也略有不同：没有括号，并且主体必须始终以大括号分隔。

#### 6.1 If

#### 6.2 重新声明和重新分配

#### 6.3 For

#### 6.4 Switch

#### 6.5 Type Switch

## 7.1 函数
#### 7.2 多个返回值
#### 7.3 命名返回参数
#### 7.4 Defer

## 8. 数据
#### 用新的分配
#### 构造函数和复合文字
#### 用make分配
#### Arrays
#### Slices
#### 二维 slices
#### Mapa
#### 打印
#### 追加

## 初始化
#### 常量
#### 变量
#### init函数

## 方法
#### 指针与价值观

## 接口和其他类型
#### 接口
#### 转换
#### 接口转换和类型断言
#### 概论
#### 接口和方法

## 空白标识符
#### 多个赋值中的空白标识符
#### 未使用的导入和变量
#### 导入副作用
#### 接口检查

## 嵌入

## 并发
#### 通过通信共享
#### Goroutines
#### Channels
#### Channels of channels
#### 并行
#### 泄漏的缓冲区

## 错误
#### Panic
#### Recover

## 一个Web服务器