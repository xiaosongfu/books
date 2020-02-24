> Android Studio 的构建系统基于 Gradle，为了使用 Gradle 构建 Android 应用，通过为 Android Gradle Plugin 添加一些特殊的功能来实现。

> Gradle 4.1 或更高版本通过 google() 方法支持 Google Maven 仓库；Android Gradle Plugin 3.0.0 及以上版本需要通过 google() 仓库下载。

> 如果使用 Android Gradle Plugin 3.0.0 及以上版本，项目会自动使用 Android Gradle Plugin 指定的默认的 SDK Build Tools 版本；如果要使用不同的版本，需要在 module 的 build.gradle 文件中指定 buildToolsVerion:  `android { ... buildToolsVerion ...}`

---

1. Gradle 版本历史：https://gradle.org/releases/
2. Android Gradle Plugin 版本历史：https://developer.android.google.cn/studio/releases/gradle-plugin
3. Gradle 和 Android Gradle Plugin 版本对应关系：https://developer.android.google.cn/studio/releases/gradle-plugin

---

SDK Build Tools：https://developer.android.google.cn/studio/releases/build-tools.html

===> SDK Build Tools 已改为使用 Android Gradle Plugin 默认指定！！

---

