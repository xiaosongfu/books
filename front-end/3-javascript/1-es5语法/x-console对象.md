## console.log()

log(message?: any, ...optionalParams: any[]): void;

格式化输出：`console.log("打印 %s", text)`
* %s：字符串
* %o：对象
* %d：数字或小数

一次打印多个对象：`console.log({foo, bar});`


## console.debug() console.info() console.warn() console.error()

```
debug(message?: any, ...optionalParams: any[]): void;
info(message?: any, ...optionalParams: any[]): void;
warn(message?: any, ...optionalParams: any[]): void;
error(message?: any, ...optionalParams: any[]): void;
```

## console.assert()

``
assert(condition?: boolean, message?: string, ...data: any[]): void;
当你需要在特定条件判断时打印日志，这将非常有用：
* 如果断言为false，则将一个错误消息写入控制台。
* 如果断言是true，没有任何反应。

```
const value = 1001
console.assert(value===1000,"value is not 1000")
```

## console.time() console.timeEnd()

```
time(label?: string): void;
timeEnd(label?: string): void;
timeStamp(label?: string): void;
timeline(label?: string): void;
timelineEnd(label?: string): void;
```

记录耗时：

```
let i = 0;
console.time("While loop");
while (i < 1000000) {
  i++;
}
console.timeEnd("While loop");
```

## console.group() console.groupEnd()

```
group(groupTitle?: string, ...optionalParams: any[]): void;
groupCollapsed(groupTitle?: string, ...optionalParams: any[]): void;
groupEnd(): void;
```

当你需要将详细信息分组或嵌套在一起以便能够轻松阅读日志时，可以使用此功能。

```
console.group('用户列表');
console.log('name: 张三');
console.log('job: 🐶前端');
// 内层
console.group('地址');
console.log('Street: 123 街');
console.log('City: 北京');
console.log('State: 在职');
console.groupEnd(); // 结束内层
console.groupEnd(); // 结束外层
```

## console.table()

`table(...tabularData: any[]): void;`

适用于打印对象数组。

```呼叫
let languages = [
    { name: "JavaScript", fileExtension: ".js" },
    { name: "TypeScript", fileExtension: ".ts" },
    { name: "CoffeeScript", fileExtension: ".coffee" }
];
console.table(languages);
```

## console.clear()

`clear(): void;`

清空控制台输出：

```
console.clear()
```
