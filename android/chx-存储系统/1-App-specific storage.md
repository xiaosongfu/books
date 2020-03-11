https://developer.android.google.cn/training/data-storage/app-specific

---

目录：

1. 访问特定于应用的内部存储
2. 访问特定于应用的外部存储

---

* context.filesDir : `/data/user/0/com.xiaoi.securityrecord/files`
* context.cacheDir : `/data/user/0/com.xiaoi.securityrecord/cache`

* context.getExternalFilesDir() : `/storage/emulated/0/Android/data/com.xiaoi.securityrecord/files`
* context.externalCacheDir      : `/storage/emulated/0/Android/data/com.xiaoi.securityrecord/cache`

---

特定于应用的存储分为特定于应用的内部存储和特定于应用的外部存储。他们都包含专用于存储**持久化数据**和存储**缓存数据**的位置。

特定于应用的内部存储不能被其他应用访问，并且在 Android 10 以上的系统里该位置的文件会被加密保存，这个特性使得该位置特别适合用于存储应用的敏感数据。

特定于应用的外部存储可以被其他应用访问。如果您打算创建其他应用也可以访问的文件，则您应该将这些文件存储在外部存储的共享存储中。

为了进一步保护特定于应用程序的文件，请使用 Android Jetpack 附带的 [Security 库](https://developer.android.google.cn/topic/security/data)对静态文件进行加密。加密密钥由您的应用程序指定。

## 1. 访问特定于应用的内部存储

特定于应用的内部存储目录包含一个用于存储应用持久化数据的目录和一个用于存储缓存数据的目录。访问这2个目录不需要任何的权限。

需要注意这些目录保存的数据应该尽可能的小，而且使用之前要查询一下系统的可用空间。

#### 操作持久化数据

使用 Context.filesDir 属性来访问持久化数据目录。

* 访问和创建文件：`val file = File(context.filesDir, fileName)`

* 使用流写文件：openFileOutput() 

```
val filename = "myfile"
val fileContents = "Hello world!"
context.openFileOutput(filename, Context.MODE_PRIVATE).use {
        it.write(fileContents.toByteArray())
}
```

* 使用流读文件：openFileInput()

```
context.openFileInput(filename).bufferedReader().useLines { lines ->
    lines.fold("") { some, text ->
        "$some\n$text"
    }
}
```

* 列出文件列表：`var files: Array<String> = context.fileList()`

* 访问和创建子目录（这些子目录的父目录都是 filesDir 目录）：

```
context.getDir(dirName, Context.MODE_PRIVATE)
```

#### 操作缓存数据

缓存目录旨在存储少量的敏感数据。要确定您的应用当前可使用多少缓存空间，请调用 `getCacheQuotaBytes()`。

当设备的内部存储空间不足时，Android 可能会删除这些缓存文件以恢复空间。因此，在读取缓存文件之前，请检查它们是否存在。

即使 Android 有时会自行删除缓存文件，您也不应依赖系统来为您清理这些文件。您应始终在内部存储中维护应用的缓存文件。

* 创建缓存文件：`File.createTempFile(filename, null, context.cacheDir)`
* 访问缓存文件：`val cacheFile = File(context.cacheDir, filename)`
* 删除缓存文件：`cacheFile.delete()` 或者 `context.deleteFile(cacheFileName)`

## 2. 访问特定于应用的外部存储

> 判断外部存储卷的可用状态

由于外部存储位于用户可能移除的物理卷上，因此在尝试从外部存储读取特定于应用的数据或将特定于应用的数据写入外部存储之前，请验证该卷是否可访问。

您可以通过调用 `Environment.getExternalStorageState()` 查询卷的状态。如果返回的状态为 `MEDIA_MOUNTED`，则可以在外部存储中读取和写入特定于应用程序的文件。如果是 `MEDIA_MOUNTED_READ_ONLY`，则只能读取这些文件。

使用下面的代码来检测卷是否可用：

```
// Checks if a volume containing external storage is available
// for read and write.
fun isExternalStorageWritable(): Boolean {
    return Environment.getExternalStorageState() == Environment.MEDIA_MOUNTED
}

// Checks if a volume containing external storage is available to at least read.
fun isExternalStorageReadable(): Boolean {
     return Environment.getExternalStorageState() in
        setOf(Environment.MEDIA_MOUNTED, Environment.MEDIA_MOUNTED_READ_ONLY)
}
```

!!! 现在的手机基本上都不支持内存卡了，那就是没有可移除的外部存储卷了，而变成了都是不可移除的外部存储卷了。

> 选择首要的外部存储卷

有些设备将内部存储器的一部分分配为外部存储器，同时还提供 SD 卡插槽。这意味着该设备具有多个物理卷，因此您需要选择要用于特定于应用程序的存储的物理卷。

若要访问不同的位置，请调用 `ContextCompat.getExternalFilesDirs()`。如代码片段所示，返回数组中的第一个元素被视为主要的外部存储卷。除非该卷已满或不可用，否则请使用它。

```
val externalStorageVolumes: Array<out File> = ContextCompat.getExternalFilesDirs(applicationContext, null)
val primaryExternalStorage = externalStorageVolumes[0]
```

> 查询可用空间

许多用户的设备上没有太多可用的存储空间，因此您的应用程序应谨慎使用空间。



#### 操作持久化数据

使用 `context.getExternalFilesDir()` 来访问持久化数据目录。

* 创建文件：`val appSpecificExternalFile = File(context.getExternalFilesDir(), filename)`
* 删除文件：`appSpecificExternalFile.delete()`
* ：``
* ：``

如果您的应用程序使用仅在应用程序内部为用户提供价值的媒体文件，则最好将它们存储在外部存储中特定于应用程序的目录中，如以下代码片段所示：

```
fun getAppSpecificAlbumStorageDir(context: Context, albumName: String): File? {
    // Get the pictures directory that's inside the app-specific directory on
    // external storage.
    val file = File(context.getExternalFilesDir(
            Environment.DIRECTORY_PICTURES), albumName)
    if (!file?.mkdirs()) {
        Log.e(LOG_TAG, "Directory not created")
    }
    return file
}
```

请务必使用常量（例如 DIRECTORY_PICTURES）提供的目录名称。这些目录名称可确保系统正确处理文件。如果没有一个预定义的子目录名称适合您的文件，则可以将 null 传递给 `getExternalFilesDir()`。这将在外部存储中返回特定于应用程序的根目录。

#### 操作缓存数据

使用 `context.externalCacheDir` 来访问缓存数据目录。

* 创建文件：`val externalCacheFile = File(context.externalCacheDir, filename)`
* 删除文件：`externalCacheFile.delete()`
* ：``
* ：``
