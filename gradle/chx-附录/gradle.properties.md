
如果使用了过时 API，会给出更详细的调试信息
android.debug.obsoletApi=true

用 R8 替换 ProGuard，实现更快的代码精简
andriod.enableR8=true
android.enableR8.libraries=false
全模式运行 R8，可能不兼容 ProGuard 了
android.enableR8.fullMode=true