Android Studio 支持通过 CMake 和 ndk-build 来构建 C/C++，在这两种情况下，Gradle 都被配置为指向**外部构建系统**。它询问外部构建系统，以确定项目中正在构建的所有 C/C++ 源列表，并使用此列表填充 Studio 项目，在 Studio 内部进行编辑和调试，同时仍使用外部构建系统进行编译和链接 C/C++ 源码。

配置**外部构建系统**：

> 使用 CMake：

```
externalNativeBuild {
    cmake {
        version '3.10.2'
        path "src/main/cpp/CMakeLists.txt"
    }
}
```

> 使用 ndk：

```
externalNativeBuild{
   ndkBuild{
        path "Android.mk"
    }
}
```



