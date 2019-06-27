```
package main
 
import "fmt"
 
func main() {
    fmt.Println("Hello, World!")
}
```

```
GOOS=js GOARCH=wasm go build -o main.wasm
```

生成的 main.wasm 大概有2.6M