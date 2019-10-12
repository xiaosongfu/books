## 导出(export)

导出变量变量：

```
//test.js
export var name = 'Rainbow'
export const sqrt = Math.sqrt
```

导出多个变量常量：

```
//test.js
var name = 'Rainbow';
var age = '24';
export {name, age};
```

导出函数：

```
// myModule.js
export function myModule(someArg) {
  return someArg;
}
```

## 导入(import)

```
import {myModule} from 'myModule';// main.js
import {name,age} from 'test';// test.js
```

一条 import 语句可以同时导入默认函数和其它变量：

```
import defaultMethod, { otherMethod } from 'xxx.js';
```
