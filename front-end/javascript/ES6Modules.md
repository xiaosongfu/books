## 1. 导出 export

```
var App = {}
export default App // default 导出

export var num1 =12 // 声明并导出

var num2 = 12
export { num2 } // 先声明再导出

export function add(x, y) {
    retur x + y
}
```

## 2. 导入 import

```
import App from './App.js'

import {num1, num2, add} from './App.js'
```

使用别名导入：

```
import * as app from './App.js'

app.add(1,2)

new Vue({
    components: {
        App: app.default // 导出语句：export default App
    }
})
```
