和 Groovy DSL 一样，Kotlin DSL 也有两种方式来配置插件：

* 声明式，使用 `plugins {}` 块
* 命令式，使用 `apply(...)` 方法

在 Kotlin 中推荐使用声明式 `plugins {}` 块，如：

```
plugins {
    id("java")
    id("jacoco")
}
```

Kotlin DSL 为所有 **Gradle 核心插件** 提供了属性扩展，可简化声明，如：

```
plugins {
    java
    jacoco
}
```

具体都有哪些可以在这里找到：`BuiltinPluginIdExtensions.kt`，比如：

* java : org.gradle.java
* application : org.gradle.application
* java-gradle-plugin : org.gradle.java-gradle-plugin

```
inline val org.gradle.plugin.use.PluginDependenciesSpec.`application`: org.gradle.plugin.use.PluginDependencySpec
    get() = id("org.gradle.application")
```
