## 全局引入

main.js 中 :

```
import './plugins/element.js'
```

src/plugins/element.js 中 :

```
import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element)
```

## 按需导入

main.js 中 :

```
import './plugins/element.js'
```

src/plugins/element.js 中 :

```
import Vue from 'vue'
import { Button } from 'element-ui'

Vue.use(Button)
```
