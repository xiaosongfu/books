ts 支持 get 和 set 语法。

```
class Person {
    n: string

    constructor(name: string) {
        this.n = name
    }

    get name(): string {
        return `my name is ${this.n}`
    }
    set name(n: string) {
        this.n = n.toUpperCase()
    }
}

let me = new Person('smei')
console.log(me.name)
me.name = 'xiasongfu'
console.log(me.name)
```

如果只有 get 而没有 set，则不可以给它赋值，否则会报错：

```
oop/get.ts:15:4 - error TS2540: Cannot assign to 'name' because it is a read-only property.
```
