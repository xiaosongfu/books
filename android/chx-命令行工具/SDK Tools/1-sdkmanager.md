官方文档：https://developer.android.google.cn/studio/command-line/sdkmanager.html

--

sdkmanager 是一个命令行工具，您可以用它来查看、安装、更新和卸载 Android SDK 的软件包。

sdkmanager 工具在 Android SDK Tools 软件包（25.2.3 及更高版本）中提供，并位于 `android_sdk/tools/bin/` 下。

> 命令格式：`sdkmanager [标记] [options]`，最常用的 option 有 `--verbose`，更多命令详情和选项请参考官方文档。

## 1. 列出已安装和可用的软件包

```
$ sdkmanager --list [options]
```

该命令第一部分列出本地已经安装的软件包，第二部分为所有可用的安装包。格式为：`Path | Version | Description`，如：

```
$ sdkmanager --list

Path | Version | Description

build-tools;29.0.3   | 29.0.3       | Android SDK Build-Tools 29.0.3
platform-tools       | 29.0.6       | Android SDK Platform-Tools
platforms;android-29 | 4            | Android SDK Platform 29
ndk;21.0.6113669     | 21.0.6113669 | NDK (Side by side) 21.0.6113669
tools                | 26.1.1       | Android SDK Tools
```

## 2. 安装软件包

```
$ sdkmanager packages [options]
```

packages 参数是 `sdkmanager --list` 命令列出的软件包的 Path 值，需要将这些 Path 值括包裹在引号中（如 "build-tools;29.0.3" 或 "platforms;android-29"）。您可以传递多个软件包的 Path 值（用空格分隔），但各个路径必须括在各自的一组引号中。如：

```
$sdkmanager "build-tools;29.0.3" "platform-tools" "platforms;android-29" "ndk;21.0.6113669"
```

## 3. 卸载软件包

卸载软件包使用 `sdkmanager --uninstall packages [options]` 命令，如：

```
$ sdkmanager --uninstall "build-tools;29.0.3" "platforms;android-29"
```

## 4. 更新所有已安装的软件包

更新所有已安装的软件包使用 `sdkmanager --update [options]` 命令，如：

```
$ sdkmanager --update
```
