按照官方文档说明 androidx 是对 android.support.xxx 包的整理后产物。由于之前的support包过于混乱，所以，google推出了 androidX。

由于在后续版本中，会逐步放弃对 support 的升级和维护(Support Library Revision 28.0.0 将会是最后一个版本，谷歌鼓励大家迁移到 AndroidX)，所以，我们必须迁移到 androidX.对此，官方描述如下：

> Existing packages, such as the Android Support Library, are being refactored into AndroidX.Although Support Library versions 27 and lower are still available on Google Maven all new development will be included in only AndroidX versions 1.0.0 and higher.

---

AndroidX fully replaces the Support Library by providing feature parity and new libraries. 
(AndroidX 通过提供相同的功能和新的库完全替代 Support Library)

In addition AndroidX includes the following features:

* All packages in AndroidX live in a consistent namespace starting with the string androidx. The Support Library packages have been mapped into corresponding androidx.* packages. For a full mapping of all the old classes and build artifacts to the new ones, see the Package Refactoring page.

* Unlike the Support Library, AndroidX packages are separately maintained and updated. The androidx packages use strict Semantic Versioning starting with version 1.0.0. You can update AndroidX libraries in your project independently.

* All new Support Library development will occur in the AndroidX library. This includes maintenance of the original Support Library artifacts and introduction of new Jetpack components.