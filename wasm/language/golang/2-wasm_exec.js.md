$GOROOT/misc/wasm/wasm_exec.js
$GOROOT/misc/wasm/wasm_exec.html

---

## html 源代码

```
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <script src="wasm_exec.js"></script>
        <script>
             
            if (WebAssembly) {
                 // WebAssembly.instantiateStreaming is not currently available in Safari
                 if (WebAssembly && !WebAssembly.instantiateStreaming) { // polyfill
                     WebAssembly.instantiateStreaming = async (resp, importObject) => {
                        const source = await (await resp).arrayBuffer();
                         return await WebAssembly.instantiate(source, importObject);
                     };
                 }  
 
                 const go = new Go();
                 WebAssembly.instantiateStreaming(fetch("main.wasm"), go.importObject).then((result) => {
                    go.run(result.instance);
                 });
            } else {
               console.log("WebAssembly is not supported in your browser")
            }
 
        </script>
    </head>
    <body>
        <main id="wasm"></main>
    </body>
</html>
```

* <script src="wasm_exec.js"></script>
* WebAssembly.instantiateStreaming(fetch("main.wasm"), go.importObject).then

同级目录下有一个 main.wasm 文件，由以下 go 源代码使用 `GOOS=js GOARCH=wasm go build -o main.wasm` 编译而成：

```
package main
 
import "fmt"
 
func main() {
    fmt.Println("Hello, World!")
}
```

访问该网页，会在浏览器控制台打印 Hello, World!

