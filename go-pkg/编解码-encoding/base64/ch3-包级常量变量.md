```
const (
	StdPadding rune = '=' // Standard padding character
	NoPadding  rune = -1  // No padding
)
```

```
var StdEncoding = NewEncoding(encodeStd)
var URLEncoding = NewEncoding(encodeURL)

var RawStdEncoding = StdEncoding.WithPadding(NoPadding)
var RawURLEncoding = URLEncoding.WithPadding(NoPadding)
```

RawStdEncoding 相比 StdEncoding 只是忽略了填充符。

URLEncoding 通常用在 url 和文件名。

```
const encodeStd = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
const encodeURL = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
```

