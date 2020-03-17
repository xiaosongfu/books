@Dao
@Insert
@Delete
@Update
@Query

@Transaction

---

```
@Dao
interface FlagDao {
    @Insert
    fun insertFlag(flag: Flag): Long

    @Insert
    fun insertFlags(vararg flag: Flag)
    
    @Delete
    fun deleteFlag(flag: Flag)
}
```
