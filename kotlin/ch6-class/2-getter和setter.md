## 定义

```
class Demo {
    var b = 0
        get() {
            return field
        }
        set(newValue) {
            field = newValue
        }
}
```

`field` 只能在 getter、setter 中使用。


## 控制 getter 和 setter 的访问权限

只需使用访问权限修饰符修饰即可：

```
class Demo {
    var b = 0
        private get() {
            return field
        }
        protected set(newValue) {
            field = newValue
        }
}
```

如果只想控制访问权限，而不自己实现 getter、setter，则可以只只有 get set 关键字：

```
class Demo {
    var b = 0
        private get
        protected set
}
```

