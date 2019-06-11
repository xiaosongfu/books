```
func NewDecoder(enc *Encoding, r io.Reader) io.Reader

func NewEncoder(enc *Encoding, w io.Writer) io.WriteCloser
```

```
func NewEncoding(encoder string) *Encoding
```