## GET

func (c *Context) Query(key string) string
func (c *Context) DefaultQuery(key, defaultValue string) string

func (c *Context) QueryArray(key string) []string
func (c *Context) QueryMap(key string) map[string]string

## POST

func (c *Context) PostForm(key string) string
func (c *Context) DefaultPostForm(key, defaultValue string) string

func (c *Context) PostFormArray(key string) []string
func (c *Context) PostFormMap(key string) map[string]string

## Path Variable

func (c *Context) Param(key string) string

## 文件上传

func (c *Context) FormFile(name string) (*multipart.FileHeader, error)
func (c *Context) MultipartForm() (*multipart.Form, error)
