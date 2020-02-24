见 gradle

---

plugins {
    id "org.jetbrains.kotlin.jvm" version "1.3.41"
}


plugins {
    id 'kotlin2js' version '1.3.41'
}


plugins {
    id 'com.android.application'
    id 'kotlin-android'
}

---

implementation(kotlin("stdlib"))
implementation(kotlin("stdlib-jdk7"))
implementation(kotlin("stdlib-jdk8"))


plugins {
    kotlin("jvm") version "1.3.41"
}