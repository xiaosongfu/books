# A Tour of the Dart Language

> [原文链接](https://www.dartlang.org/guides/language/language-tour)

```
A basic Dart program
Important concepts
Keywords
Variables
Built-in types
Functions
Operators
Control flow statements
Exceptions
Classes
Generics
Libraries and visibility
Asynchrony support
```

---

该文档演示了如何使用每一个重要的 Dart 语言功能，从变量到操作符再到类和库，该文档假设你已经拥有其他语言的编程经验。

阅读[A Tour of the Dart Libraries](https://www.dartlang.org/guides/libraries/library-tour)了解更多关于 Dart Core Library 的知识。无论何时想更详细的了解语言特性，请翻阅[Dart Language Specification](https://www.dartlang.org/guides/language/spec)。

> 提示：你可以使用 DartPad 试验大多数 Dart 语法特性。[打开 DartPad](https://dartpad.dartlang.org/)

## 一个基本的 Dart 程序(A basic Dart program)
下面的代码用到了很多的 Dart 基础特性：

```
// 定义一个函数
printInteger(int aNumber) {
    print('The number is $aNumber');  // 打印到控制台
}

// 该函数是应用执行的起点
main() {
    var number = 42; // 定义并初始化一个变量
    printInteger(number); // 调用函数
}
```

以下这些是几乎所有的 Dart 程序都会用到的：

> // 注释  

单行注释。Dart 也支持多行注释和文档注释，详见[Comments](https://www.dartlang.org/guides/language/language-tour#comments)。  

> int  

一种类型。其他的内建类型如 String、List 和 bool。

> 42  

一个数字字面量。数字字面量是一种编译时常量。

> print()  

打印到控制台的便利方式。

> '...'(或 "...")
字符串字面量。

> $variableName (或 ${expression})
字符串插值： 包裹在字符串字面量里面。详见[Strings](https://www.dartlang.org/guides/language/language-tour#strings)。



## 重要概念(Important concepts)

学习 Dart 的过程中，请牢记下面这些事实和概念:

* 所有可用赋值给一个变量的都是 object，并且所有的 object 都是一个 class 的实例。甚至 numbers，方法，还有 null 都是对象。所有的对象都继承自 Object 类。

* 虽然 Dart 是强类型语言，但类型是可选的，因为 Dart 可以推断类型。当你想明确告知什么类型都不需要，可以使用特殊的类型 `dynamic`

* Dart 支持泛型，如 `List<int>` (一个整型 list) 或 `List<dynamic>` (一个任意类型对象的 list) 

* Dart supports top-level functions (such as main()), as well as functions tied to a class or object (static and instance methods, respectively). You can also create functions within functions (nested or local functions)
Dart 支持顶级函数（如 main() 函数），函数也可以属于某个类或某个对象(如静态函数和实例函数)。你也可以在函数里面创建函数（嵌套函数或者局部函数）

* 同样的，Dart 也支持顶级变量，变量也可以属于某个类或某个对象(静态变量和实例变量)。实例变量就是熟知的域和属性。

* 不像 Java ，Dart 没有 `public` `protected` `private` 等关键字。如果一个标识符使用 `_` 开头，则它是当前库私有的。更多的细节请阅读 [库和可见性](https://www.dartlang.org/guides/language/language-tour#libraries-and-visibility)

* 标识符可以使用字母和 _ 开头，后面跟字母和数字。

* Dart 有表达式(有运行时值)和语句(没有运行时值)。例如条件表达式 `condition ? expr1 : expr2` 有一个值，expr1 或 expr2。相反的，if 语句就没有值。一个语句通常包含一个或多个表达式，但是一个表达式不能直接包含一个语句。 

* Dart 工具可以报告两种类型的问题：警告和错误。警告仅仅表明你的代码可能不能很好的工作，但它不会阻止你的代码执行。错误可能是编译期错误或运行时错误。编译期错误会阻止代码运行；运行时错误会报告一个异常，当代码运行的时候。


---

## 参考链接

[A Tour of the Dart Libraries](https://www.dartlang.org/guides/libraries/library-tour)  
[Dart style guide](https://www.dartlang.org/guides/language/effective-dart/style)  
[Dart Language Specification](https://www.dartlang.org/guides/language/spec)

---
## 参考词汇

* assumption  
英 [əˈsʌmpʃn]   美 [əˈsʌmpʃən]  
n.  
承担;假定，假设;想当然;采取  

* whenever  
英 [wenˈevə(r)]   美 [hwɛnˈɛvɚ]  
adv.  
究竟什么时候;不论何时  
conj.  
每当;无论何时;随时;无论什么时候

* equivalent  
英 [ɪˈkwɪvələnt]   美 [ɪˈkwɪvələnt]   
adj.  
相等的，相当的，等效的;等价的，等积的;[化学]当量的  
n.  
对等物;[化学]当量

* consult  
英 [kənˈsʌlt]   美 [kənˈsʌlt]  
vi.  
咨询;商议，商量;[医]会诊;充当顾问  
vt.  
请教;翻阅;求教于;顾及  

* literal  
英 [ˈlɪtərəl]   美 [ˈlɪtərəl]  
adj.  
照字面的;原义的;逐字的;平实的，避免夸张  
n.  
[印]错排，文字上的错误  

* handy  
英 [ˈhændi]   美 [ˈhændi]  
adj.  
方便的;手巧的;手边的，附近的;便于使用的  

* interpolation  
英 [ɪnˌtɜ:pə'leɪʃn]   美 [ɪnˌtɚpəˈleʃən]  
n.  
插值;窜改;添写，插补

* equivalent  
英 [ɪˈkwɪvələnt]   美 [ɪˈkwɪvələnt]  
adj.  
相等的，相当的，等效的;等价的，等积的;[化学]当量的  
n.  
对等物;[化学]当量  

* conventions  
英 [kən'venʃnz]   美 [kən'venʃnz]  
n.  
习俗;（某一职业、政党等的人士召开的）大会( convention的名词复数 );协议;（美国）全国代表大会  

* concepts  
英 ['kɒnsepts]   美 ['kɒnsepts]   
n.  
观念;概念( concept的名词复数 );想法;总的印象  

* fact  
英 [fækt]   美 [fækt]  
n.  
实际;事实，实情;真相，证据;犯罪行为  

* inherit  
英 [ɪnˈherɪt]   美 [ɪnˈhɛrɪt]  
vt.& vi.  
继承  
vt.  
经遗传获得（品质、身体特征等），继任  

* infer  
英 [ɪnˈfɜ:(r)]   美 [ɪnˈfɚ]  
vt.  
推断;猜想，推理;暗示;意指  
vi.  
作出推论  

* annotation  
英 [ˌænə'teɪʃn]   美 [ˌænə'teɪʃn]  
n.  
注释  

* explicitly  
英 [ɪk'splɪsɪtlɪ]   美 [ɪk'splɪsɪtlɪ]  
adv.  
明白地，明确地  

* tie  
英 [taɪ]   美 [taɪ]  
n.  
关系;领带，绳子;平局;束缚，限制  
vt.  
（用线、绳等）系;（在线、绳上）打结;连接;与…成平局  
vi.  
打结，系上;平局;被用带（或绳子等）系住  

* respectively  
英 [rɪˈspektɪvli]   美 [rɪˈspɛktɪvli]  
adv.  
各自地;各个地;分别地  

* underscore  
英 [ˌʌndəˈskɔ:(r)]   美 [ˌʌndərˈskɔ:(r)]  
vt.  
划线于…下，强调  
n.  
底线;（表示强调的）下方划线;（影片等的）伴音  

* combination  
英 [ˌkɒmbɪˈneɪʃn]   美 [ˌkɑ:mbɪˈneɪʃn]  
n.  
结合;联合体;密码组合;连裤内衣  

* matter  
英 [ˈmætə(r)]   美 [ˈmætɚ]  
n.  
物质;事件;（讨论、考虑等的）问题;重要性  
vi.  
要紧，重要;化脓;有重大影响;有重要性  

* precise  
英 [prɪˈsaɪs]   美 [prɪˈsaɪs]   
adj.  
精密;精确的;清晰的;正规的   

* indication  
英 [ˌɪndɪˈkeɪʃn]   美 [ˌɪndɪˈkeʃən]    
n.  
指示;表明;标示;象征  

* raise  
英 [reɪz]   美 [rez]  
v.  
筹集;提升;增加;养育  
n.  
提升;增加;举起;高处  

* treat  
英 [tri:t]   美 [trit]  
n.  
招待;款待;乐事;乐趣  
v.  
治疗;对待;处理;款待  

* covariant  
英 [kəʊˈveəriənt]   美 [koʊˈveriənt]  
adj.  
协变式的，协变的  

* reserved  
英 [rɪˈzɜ:vd]   美 [rɪˈzɜ:rvd]  
adj.  
预订的;矜持的;储藏着的  
v.  
保留[储备]某物( reserve的过去式)

* asynchrony  
英 [eɪ'sɪŋkrənɪ]   美 [eɪ'sɪŋkrənɪ]  
n.  
不同时性，异步（性）  

* 

* 

* 

* 

* 

* 

* 

* 

* 

* 

* 

* 

* 











* lexical  
英 [ˈleksɪkl]   美 [ˈlɛksɪkəl]  
adj.  
词汇的;具词典性质的，词典的  




