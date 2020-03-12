https://developer.android.google.cn/jetpack/androidx/releases/security

https://developer.android.google.cn/topic/security/data

---

作为 Android Jetpack 的一部分，Security 库提供了与读取和写入静态数据以及密钥创建和验证相关的安全最佳做法实现方法。

---

为了进一步保护特定于应用程序的文件，请使用 Android Jetpack 附带的 [Security 库](https://developer.android.google.cn/topic/security/data)对静态文件进行加密。加密密钥由您的应用程序指定。

---

## EncryptedFile 读取和写入文件

提供 FileInputStream 和 FileOutputStream 的自定义实现，为您的应用赋予更安全的流式读写操作。

## EncryptedSharedPreferences 读取和写入共享偏好设置

封装 SharedPreferences 类，并使用双重方案方法自动加密密钥和值：
* 密钥使用确定性加密算法进行加密，这样便可以正确查找和加密密钥。
* 值使用 AES-256 GCM 加密，并且具有不确定性。


