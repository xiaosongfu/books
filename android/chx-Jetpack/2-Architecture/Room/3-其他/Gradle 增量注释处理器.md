Room 现在是 Gradle 隔离注释处理器，您可通过处理器选项 room.incremental 启用增量功能。我们计划在将来的稳定版中默认启用增量功能。

```
android {
    ...
    defaultConfig {
        ...
        javaCompileOptions {
            annotationProcessorOptions {
                arguments = [
                    "room.schemaLocation":"$projectDir/schemas".toString(),
                    "room.incremental":"true",
                    "room.expandProjection":"true"]
            }
        }
    }
}
```
