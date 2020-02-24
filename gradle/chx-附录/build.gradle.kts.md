1. 根目录的 build.gradle.kts
2. module 下的 build.gradle.kts

---

# 1. 根目录的 build.gradle.kts

特别重要的是可以通过 allprojects 和 subprojects 来为所有子项目配置插件、maven 仓库、依赖等信息。

```
buildscript {
    repositories {}

    dependencies {
        classpath("com.android.tools.build:gradle:3.5.3")
    }
}

allprojects {
    repositories {}
}

subprojects {
    repositories {}
}
```

# 2. module 下的 build.gradle.kts

### 2.1 kotlin application 类型

```
plugins {
    // Apply the Kotlin JVM plugin to add support for Kotlin.
    id("org.jetbrains.kotlin.jvm") version "1.3.61"

    // Apply the application plugin to add support for building a CLI application.
    application
}

dependencies {
    // Align versions of all Kotlin components
    implementation(platform("org.jetbrains.kotlin:kotlin-bom"))

    // Use the Kotlin JDK 8 standard library.
    implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")

    // Use the Kotlin test library.
    testImplementation("org.jetbrains.kotlin:kotlin-test")

    // Use the Kotlin JUnit integration.
    testImplementation("org.jetbrains.kotlin:kotlin-test-junit")
}

application {
    // Define the main class for the application.
    mainClassName = "ltd.xsfu.test.AppKt"
}
```

### 2.2 kotlin library 类型

```
plugins {
    // Apply the Kotlin JVM plugin to add support for Kotlin.
    id("org.jetbrains.kotlin.jvm") version "1.3.41"

    // Apply the java-library plugin for API and implementation separation.
    `java-library`
}

repositories {
    // Use jcenter for resolving dependencies.
    // You can declare any Maven/Ivy/file repository here.
    jcenter()
}

dependencies {
    // Align versions of all Kotlin components
    implementation(platform("org.jetbrains.kotlin:kotlin-bom"))

    // Use the Kotlin JDK 8 standard library.
    implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")

    // Use the Kotlin test library.
    testImplementation("org.jetbrains.kotlin:kotlin-test")

    // Use the Kotlin JUnit integration.
    testImplementation("org.jetbrains.kotlin:kotlin-test-junit")
}
```
