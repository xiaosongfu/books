用于编辑SharedPreferences的Kotlin代码：

```
sharedPreferences.edit()
           .putBoolean(key, value)
           .apply()
```

Android KTX代码：

```
sharedPreferences.edit { 
    putBoolean(key, value) 
}
```
