

Android NDK 是一个工具集，可让您使用 C 和 C++ 等语言以原生代码实现应用的各个部分。对于特定类型的应用，这可以帮助您重复使用以这些语言编写的代码库。

Android Studio 编译原生库的默认编译工具是 CMake。由于很多现有项目都使用 ndk-build 编译工具包，因此 Android Studio 也支持 ndk-build。不过，如果您要创建新的原生库，则应使用 CMake。

---


* CMake
* ndk-build



Android Studio CMake plugin




---

```
public native String stringFromJNI();

external fun stringFromJNI(): String
```
