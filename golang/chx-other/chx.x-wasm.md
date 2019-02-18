Go1.11开始支持WebAssembly，对应的操作系统名为js，对应的CPU类型为wasm。通过go build的方式生成wasm目标文件，然后通过Node环境执行：

```
$ GOARCH=wasm GOOS=js go build -o a.out.wasm hello.go
```

