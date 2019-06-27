https://github.com/wasmerio/go-ext-wasm

---

```
package main

import (
	"fmt"
	wasm "github.com/wasmerio/go-ext-wasm/wasmer"
)

func main() {
	bytes, _ := wasm.ReadBytes("simple.wasm")
	instance, _ := wasm.NewInstance(bytes)
	defer instance.Close()

	sum := instance.Exports["sum"]

	result, _ := sum(5, 37)

	fmt.Println(result)
}
```
