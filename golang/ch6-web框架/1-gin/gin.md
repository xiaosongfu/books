## 内置中间件

```
func Recovery() HandlerFunc

func Logger() HandlerFunc
```

## 应用运行模式

```
const EnvGinMode = "GIN_MODE"

func init() {
	mode := os.Getenv(EnvGinMode)
	SetMode(mode)
}

const (
	// DebugMode indicates gin mode is debug.
	DebugMode = "debug"
	// ReleaseMode indicates gin mode is release.
	ReleaseMode = "release"
	// TestMode indicates gin mode is test.
	TestMode = "test"
)

func SetMode(value string)

func Mode() string
```

应用运行提示：

```
[GIN-debug] [WARNING] Running in "debug" mode. Switch to "release" mode in production.
 - using env:	export GIN_MODE=release
 - using code:	gin.SetMode(gin.ReleaseMode)
```

## gin.H

```
// H is a shortcut for map[string]interface{}
type H map[string]interface{}
```

## mime 类型

```
const (
	MIMEJSON              = binding.MIMEJSON
	MIMEHTML              = binding.MIMEHTML
	MIMEXML               = binding.MIMEXML
	MIMEXML2              = binding.MIMEXML2
	MIMEPlain             = binding.MIMEPlain
	MIMEPOSTForm          = binding.MIMEPOSTForm
	MIMEMultipartPOSTForm = binding.MIMEMultipartPOSTForm
	MIMEYAML              = binding.MIMEYAML
	BodyBytesKey          = "_gin-gonic/gin/bodybyteskey"
)
```

