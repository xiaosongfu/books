https://developer.android.google.cn/training/data-storage/room/defining-data

---

@Entity(tableName="", primaryKeys=["",""], ignoredColumns=["",""])
@PrimaryKey(autoGenerate=flase)
@ColumnInfo(name="", defaultValue="", index=false)
@Ignore

---

```
@Entity(tableName = "flags")
data class Flag(
    @PrimaryKey(autoGenerate = true) val id: Int,
    @ColumnInfo(name = "flag_name") val flagName: String,
    @ColumnInfo(name = "flag_icon_id") val flagIconId: Int,
    @Ignore val foo: String
)
```
