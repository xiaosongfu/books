@Database(entities=[Foo::class], views=[Bar::class], version=1)

---

```
@Database(entities = [Flag::class, History::class], version = 1)
abstract class AppDatabase : RoomDatabase() {
    abstract fun flagDao(): FlagDao
    abstract fun historyDao(): HistoryDao
}
```
