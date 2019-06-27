
```
buildscript {
    repositories {
        google()
        jcenter()
        
    }
    dependencies {
        classpath 'com.android.tools.build:gradle:3.4.1'
        classpath "org.jetbrains.kotlin:kotlin-gradle-plugin:1.3.31"
    }
}
```

```
apply plugin: 'kotlin-android'
apply plugin: 'kotlin-android-extensions'

implementation "org.jetbrains.kotlin:kotlin-stdlib-jdk7:1.3.31"
```
