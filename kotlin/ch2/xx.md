# 基本数据类型

与 Java 基本类型相对应，Kotlin 也有8种基本数据类型:

- 整数类型:Byte、Short、Int 和 Long，Int 是默认类型。 
- 浮点类型:Float 和 Double，Double 是默认类型。 
- 字符类型:Char。
- 布尔类型:Boolean。

Kotlin 的8个基本数据类型没有对应的包装类，Kotlin 编译器会根据不同的场景将其编译成为 Java 中的基本类型数据还是包装类对象。

# 基本数据类型之间的转换

在基本数据类型中，数值类型之间可以互相转换，字符类型和布尔类型不能与他们之间进行转换。

数值类型之间的转换分为：数值在进行赋值是采用显示转换，在数学计算是采用隐式转换。

#### 显示转换

```
val byteNum: Byte = 16
val shortNum: Short = byteNum // 编译错误
```

Kotlin 中要想实现这种赋值转换，需要使⽤用转换函数显式转换。Kotlin 的 6 种数值类型(Byte、Short、Int、 Long、Float 和 Double)，以及 Char 类型都有如下7个转换函数:
- toByte(): Byte 
- toShort(): Short 
- toInt(): Int 
- toLong(): Long 
- toFloat(): Float 
- toDouble(): Double 
- toChar(): Char

```
val byteNum: Byte = 16
val shortNum: Short = byteNum.toShort()
```

#### 隐式转换

多个数值类型数据可以数学计算，由于参与进⾏行数学计算的数值类型可能不同，编译器会根据上下⽂文环境进行隐式转换。计算过程中隐式转换类型转换规则: 

Int 急 Int 以下为 Int
有一个 Long 即为 Long
有一个 Float 即为 Float
有一个 Double 即为 Double

# 可空数据类型

Kotlin 提供了如下运算符:
- 安全调⽤运算符:?. 
- 安全转换运算符:as? 
- Elvis运算符(空值合并运算符):?: 
- ⾮空断言运算符:!!
