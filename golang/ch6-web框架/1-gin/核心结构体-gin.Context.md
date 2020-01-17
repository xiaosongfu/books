## 请求参数


func (c *Context) Query(key string) string
func (c *Context) DefaultQuery(key, defaultValue string) string

func (c *Context) QueryArray(key string) []string
func (c *Context) QueryMap(key string) map[string]string


func (c *Context) PostForm(key string) string
func (c *Context) DefaultPostForm(key, defaultValue string) string

func (c *Context) PostFormArray(key string) []string
func (c *Context) PostFormMap(key string) map[string]string


func (c *Context) Param(key string) string


func (c *Context) FormFile(name string) (*multipart.FileHeader, error)
func (c *Context) MultipartForm() (*multipart.Form, error)

## 请求参数验证

func (c *Context) Bind(obj interface{}) error

func (c *Context) BindHeader(obj interface{}) error

func (c *Context) BindUri(obj interface{}) error

func (c *Context) BindQuery(obj interface{}) error

func (c *Context) BindYAML(obj interface{}) error
func (c *Context) BindXML(obj interface{}) error
func (c *Context) BindJSON(obj interface{}) error


func (c *Context) MustBindWith(obj interface{}, b binding.Binding) error

func (c *Context) ShouldBind(obj interface{}) error
func (c *Context) ShouldBindJSON(obj interface{}) error
func (c *Context) ShouldBindXML(obj interface{}) error
func (c *Context) ShouldBindQuery(obj interface{}) error
func (c *Context) ShouldBindYAML(obj interface{}) error
func (c *Context) ShouldBindHeader(obj interface{}) error
func (c *Context) ShouldBindUri(obj interface{}) error

func (c *Context) ShouldBindWith(obj interface{}, b binding.Binding) error
func (c *Context) ShouldBindBodyWith(obj interface{}, bb binding.BindingBody) (err error)

## 响应结果渲染

func (c *Context) XML(code int, obj interface{})

func (c *Context) YAML(code int, obj interface{})

func (c *Context) ProtoBuf(code int, obj interface{})

func (c *Context) String(code int, format string, values ...interface{})

func (c *Context) JSON(code int, obj interface{})
func (c *Context) AsciiJSON(code int, obj interface{})
func (c *Context) PureJSON(code int, obj interface{})
func (c *Context) IndentedJSON(code int, obj interface{})
func (c *Context) SecureJSON(code int, obj interface{})
func (c *Context) JSONP(code int, obj interface{})

func (c *Context) HTML(code int, name string, obj interface{})

func (c *Context) Redirect(code int, location string)

## 

