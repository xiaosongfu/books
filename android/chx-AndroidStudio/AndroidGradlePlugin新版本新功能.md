## 4.0.0

Android Gradle 插件 4.0.0-alpha05 引入了一种新方法来控制您要启用和停用的构建功能，如视图绑定、数据绑定和 Jetpack Compose。添加新功能后，默认情况下，这些功能处于停用状态。您随后可以使用 `buildFeatures` 块来仅启用所需的功能，它可以帮助您优化项目的构建性能。您可以在模块级 `build.gradle` 文件中为每个模块设置相应的选项，如下所示：

```
android {
    // The default value for each feature is shown below. You can change the value to
    // override the default behavior.
    buildFeatures {
        // Determines whether to enable support for Jetpack Compose.
        compose = false
        // Determines whether to generate a BuildConfig class.
        buildConfig = true
        // Determines whether to support View Binding.
        // Note that the viewBinding.enabled property is now deprecated.
        viewBinding = false
        // Determines whether to support Data Binding.
        // Note that the dataBinding.enabled property is now deprecated.
        dataBinding = false
        // Determines whether to generate binder classes for your AIDL files.
        aidl = true
        // Determines whether to support RenderScript.
        renderScript = true
        // Determines whether to support injecting custom variables into the module’s R class.
        resValues = true
        // Determines whether to support shader AOT compilation.
        shaders = true
    }
}
```

摘自：https://developer.android.google.cn/studio/preview/features/#agp-4-0-0
