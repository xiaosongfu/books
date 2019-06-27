创建 DTOs（POJOs/POCOs）

```
data class Customer(val name: String, val email: String)
```

会为 Customer 类提供以下功能：

* 所有属性的 getters （对于 var 定义的还有 setters）
* equals()
* hashCode()
* toString()
* copy()
* 所有属性的 component1()、 component2()……等等（参见数据类）