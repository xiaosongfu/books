### 1. 添加依赖

````
<dependency>
    <groupId>org.tensorflow</groupId>
    <artifactId>tensorflow</artifactId>
    <version>1.12.0</version>
</dependency>
```

如果系统支持 GPU，请将以下 TensorFlow 依赖项添加到项目的 pom.xml 文件中：

```
<dependency>
    <groupId>org.tensorflow</groupId>
    <artifactId>libtensorflow</artifactId>
    <version>1.12.0</version>
</dependency>
<dependency>
    <groupId>org.tensorflow</groupId>
    <artifactId>libtensorflow_jni_gpu</artifactId>
    <version>1.12.0</version>
</dependency>
```


