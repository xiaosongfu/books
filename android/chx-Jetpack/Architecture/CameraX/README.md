CameraX 是对 Jetpack 的补充，可让您更轻松地利用 Camera2 API 的功能。

## CameraX 结构

开发者使用 CameraX，借助名为“用例”的抽象概念与设备的相机进行交互。目前提供的用例如下：

* 预览：准备一个预览 SurfaceTexture
* 图片分析：提供 CPU 可访问的缓冲区以进行分析（例如进行机器学习）
* 图片拍摄：拍摄并保存照片

不同用例可以相互组合使用，也可以同时处于活动状态。例如，用户可以在应用中使用预览用例查看进入相机视野的画面、加入图片分析用例来确定照片里的人物是否在微笑，以及包含一个图片拍摄用例以便在人物微笑时拍摄照片。


---

* 官方文档

CameraX 官方文档：https://developer.android.google.cn/training/camerax

* codelab

Getting Started with CameraX：https://codelabs.developers.google.com/codelabs/camerax-getting-started/index.html

* Samples

Camera Samples Repository：https://github.com/android/camera/tree/master/CameraXBasic
