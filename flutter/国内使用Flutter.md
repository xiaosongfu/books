# 国内使用 Flutter

* https://flutter.dev/community/china !!! 很重要

* Flutter 社区维护了一个中文的 flutter.io 站点：https://flutter-io.cn/

## 从国内镜像站点下载 Flutter SDK

如果你想要通过下载压缩包的方式来安装 Flutter，你可以将原始的下载地址的域名部分用可信的镜像域名替换，来加速下载，如：

* 原始下载地址：https://storage.googleapis.com/flutter_infra/releases/stable/windows/flutter_windows_v1.0.0-stable.zip
* 镜像下载地址：https://storage.flutter-io.cn/flutter_infra/releases/stable/windows/flutter_windows_v1.0.0-stable.zip

## 配置国内镜像站点来更新 Flutter 和下载 dart package

为了在中国可以更新 Flutter 和使用 pub 包仓库，你需要设置两个环节变量：

> 使用 flutter-io.cn

```
PUB_HOSTED_URL=https://pub.flutter-io.cn
FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn
```

> 或者使用 Shanghai Jiaotong University Linux User Group

```
FLUTTER_STORAGE_BASE_URL: https://mirrors.sjtug.sjtu.edu.cn/
PUB_HOSTED_URL: https://dart-pub.mirrors.sjtug.sjtu.edu.cn/
```



