#### func Getwd() (dir string, err error)

获取当前所在的目录，从 / 根目录开始。

#### func Hostname() (name string, err error)

返回内核报告的主机名。

#### func Mkdir(name string, perm FileMode) error

创建目录。

#### func MkdirAll(path string, perm FileMode) error

递归创建目录。

如果目录已经存在，MkdirAll 会什么也不做，直接返回nil。

#### func Rename(oldpath, newpath string) error

重命名文件，类似 linux 的 mv 命令。

如果 newpath 已经存在，且不是一个目录，则会覆盖它。

#### func Setenv(key, value string) error

设置环境变量。

#### func Getenv(key string) string

获取环境变量。

#### func TempDir() string

创建一个临时目录。

#### func UserCacheDir() (string, error)

返回用于特定于用户的缓存数据的默认根目录。用户应该在这个子目录中创建自己的特定于应用程序的子目录并使用它。

在 Unix 系统上，如果非空，则返回 https://standards.freedesktop.org/basedir-spec/basedir-spec-latest.html 指定的 `$XDG_CACHE_HOME`，否则为 `$HOME/.cache`。在 macOS 上，它返回 `$HOME/Library/Caches`。在 Windows 上，它返回 `％LocalAppData％`。在Plan 9 上，它返回 `$ home/lib/cache`。

如果无法确定位置（例如，未定义 $HOME），则会返回错误。

#### func UserHomeDir() (string, error)

返回当前用户的主目录。

在 Unix 系统上，包括 macOS，它返回 `$HOME` 环境变量的值，在 Windows 系统上，它返回 `%USERPROFILE%`，在 Plan 9 系统上，它返回 `$home` 环境变量的值。

#### func Exit(code int)

以给定的状态代码退出当前程序。通常，0 表示成功，非零表示错误。

程序会立即终止;但 defer 函数不会被执行。
