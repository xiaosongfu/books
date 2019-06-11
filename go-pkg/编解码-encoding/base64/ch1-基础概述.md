

```
msg := "Hello, 世界"
encoded := base64.StdEncoding.EncodeToString([]byte(msg))
fmt.Println(encoded)
decoded, err := base64.StdEncoding.DecodeString(encoded)
if err != nil {
    fmt.Println("decode error:", err)
    return
}
fmt.Println(string(decoded))
```


```
input := []byte("foo\x00bar")
encoder := base64.NewEncoder(base64.StdEncoding, os.Stdout)
encoder.Write(input)
// Must close the encoder when finished to flush any partial blocks.
// If you comment out the following line, the last partial block "r"
// won't be encoded.
encoder.Close()
```