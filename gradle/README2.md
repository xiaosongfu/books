使用 plugins {} 块来声明 Gradle 插件可以显着改善编辑体验，强烈建议使用。

就像使用 Groovy DSL 一样，有两种方法可以应用 Gradle 插件：
- 以声明的方式，使用 plugins {} 块，
- 使用遗留 apply(..) 功能。

Many plugins come with extensions to configure them.

```
plugins {
    jacoco
}

jacoco {
    toolVersion = "0.8.1"
}
```

