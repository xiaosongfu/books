@Database(entities=[Foo::class], views=[Bar::class], version=1)

---

```
@Database(entities = [Flag::class, History::class], version = 1)
abstract class AppDatabase : RoomDatabase() {
    abstract fun flagDao(): FlagDao
    abstract fun historyDao(): HistoryDao

    companion object {
        private var instance: AppDatabase? = null

        fun getInstance(context: Context): AppDatabase {
            if (instance == null) {
                instance = Room.databaseBuilder(
                    context.applicationContext,
                    AppDatabase::class.java,
                    "create_flag.db"
                ).build()
            }
            return instance!!
        }
    }
}
```

注意：如果您的应用在单个进程中运行，则在实例化 AppDatabase 对象时应遵循单例设计模式。每个 RoomDatabase 实例的成本相当高，而您几乎不需要在单个进程中访问多个实例。

如果您的应用在多个进程中运行，请在数据库构建器调用中包含 enableMultiInstanceInvalidation()。这样，如果您在每个进程中都有一个 AppDatabase 实例，就可以在一个进程中使共享数据库文件失效，并且这种失效会自动传播到其他进程中的 AppDatabase 实例。

