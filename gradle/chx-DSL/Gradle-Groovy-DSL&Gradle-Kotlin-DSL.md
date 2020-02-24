
```
dependencies {
    testImplementation 'org.codehaus.groovy:groovy-all:2.5.4'
}

dependencies {
    testImplementation("org.codehaus.groovy:groovy-all:2.5.4")
}
```

```
buildscript {
    repositories {
        jcenter()
    }
    dependencies {
        classpath 'com.jfrog.bintray.gradle:gradle-bintray-plugin:0.4.1'
    }
}

buildscript {
    repositories {
        jcenter()
    }
    dependencies {
        classpath("com.jfrog.bintray.gradle:gradle-bintray-plugin:0.4.1")
    }
}
```


```
apply plugin: 'java'

apply(plugin = "java")
```

```
rootProject.name = 'SmartGlasses'
include ':app', ':hst', ':hiai', ':tflite', ':im', ':example'

rootProject.name = "SmartGlasses"
include(":app", ":hst")
```

```

```

```

```


## Script plugins & Binary plugins

```
apply from: 'other.gradle'

apply(from = "other.gradle.kts")
```

```
plugins {
    id 'java'
}

plugins {
    java
}
```

```
plugins {
    id 'com.jfrog.bintray' version '0.4.1'
}

plugins {
    id("com.jfrog.bintray") version "0.4.1"
}
```


```

```