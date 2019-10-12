## 对象属性简写

在ES6中允许我们在设置一个对象的属性的时候不指定属性名。

> 不使用ES6：

```
const name='Ming',age='18',city='Shanghai';

const student = {
    name:name,
    age:age,
    city:city
};
console.log(student);//{name: "Ming", age: "18", city: "Shanghai"}
```

对象中必须包含属性和值，显得非常冗余。

> 使用ES6：

```
const name='Ming',age='18',city='Shanghai';

const student = {
    name,
    age,
    city
};
console.log(student);//{name: "Ming", age: "18", city: "Shanghai"}
```

对象中直接写变量，非常简洁。