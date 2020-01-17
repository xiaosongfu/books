func (group *RouterGroup) Group(relativePath string, handlers ...HandlerFunc) *RouterGroup

func (group *RouterGroup) Handle(httpMethod, relativePath string, handlers ...HandlerFunc) IRoutes {
func (group *RouterGroup) GET(relativePath string, handlers ...HandlerFunc) IRoutes
func (group *RouterGroup) POST(relativePath string, handlers ...HandlerFunc) IRoutes
func (group *RouterGroup) DELETE(relativePath string, handlers ...HandlerFunc) IRoutes
func (group *RouterGroup) PATCH(relativePath string, handlers ...HandlerFunc) IRoutes
func (group *RouterGroup) PUT(relativePath string, handlers ...HandlerFunc) IRoutes
func (group *RouterGroup) OPTIONS(relativePath string, handlers ...HandlerFunc) IRoutes
func (group *RouterGroup) HEAD(relativePath string, handlers ...HandlerFunc) IRoutes
func (group *RouterGroup) Any(relativePath string, handlers ...HandlerFunc) IRoutes

func (group *RouterGroup) Static(relativePath, root string) IRoutes
func (group *RouterGroup) StaticFile(relativePath, filepath string) IRoutes
func (group *RouterGroup) StaticFS(relativePath string, fs http.FileSystem) IRoutes