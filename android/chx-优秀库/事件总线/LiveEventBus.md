
https://github.com/JeremyLiao/LiveEventBus

Android消息总线的演进之路：用LiveDataBus替代RxBus、EventBus：https://tech.meituan.com/2018/07/26/android-livedatabus.html

---

LiveDataBus 比 RxBus、EventBus 都要更简单易用，和 Activity 的生命周期绑定，不需要手动反注册。

而且仅仅依赖 Jetpack 的 LiveData，还支持跨进程和跨 APP。
