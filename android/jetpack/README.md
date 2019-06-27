Jetpack 组件是 AndroidX 库的一部分。

[](../images/chx/jetpack-donut.png)

---

## Foundation
* AppCompat
* Android KTc

## Architecture
* Data Binding
* LiveData
* Room
* ViewModel
* WorkManager

## UI

## Behavior
* CameraX

---

使用支持库中的类时，请确保从相应的软件包中导入类。例如，应用 ActionBar 类时：
* 如果使用支持库，则从 `android.support.v7.app.ActionBar` 导入。
* 如果仅针对 API 级别 11 或更高版本进行开发，则从 `android.app.ActionBar` 导入。
