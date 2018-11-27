# kotlin.math 包

为满足由来已久的需求，Kotlin 1.2 添加了 JVM 与 JS 公用的用于数学运算的 kotlin.math API， 包含以下内容：

- 常量：PI 与 E；
- 三角函数：cos、 sin、 tan 及其反函数：acos、 asin、 atan、 atan2；
- 双曲函数：cosh、 sinh、 tanh 及其反函数：acosh、 asinh、 atanh
- 指数函数：pow（扩展函数）、 sqrt、 hypot、 exp、 expm1；
- 对数函数：log、 log2、 log10、 ln、 ln1p；
- 取整:
    - ceil、 floor、 truncate、 round（奇进偶舍）函数；
    - roundToInt、 roundToLong（四舍五入）扩展函数；
- 符号与绝对值：
    - abs 与 sign 函数；
    - absoluteValue 与 sign 扩展属性；
    - withSign 扩展函数；
- 两个数的最值函数：max 与 min；
- 二进制表示：
    - ulp 扩展属性；
    - nextUp、 nextDown、 nextTowards 扩展函数；
    - toBits、 toRawBits、 Double.fromBits（这些在 kotlin 包中）。
这些函数同样也有 Float 参数版本（但不包括常量）。