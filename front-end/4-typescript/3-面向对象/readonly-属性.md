ts 支持只读属性，只读属性只能读取，不能赋值。

```
class Car {
    readonly wheel: number

    constructor(w: number) {
        this.wheel = w
    }
}

let car = new Car(4)
console.log(car.wheel)
```

只读属性只能被读取，不能被赋值，如果赋值会报错：

```
oop/readonly.ts:10:5 - error TS2540: Cannot assign to 'wheel' because it is a read-only property.
```
