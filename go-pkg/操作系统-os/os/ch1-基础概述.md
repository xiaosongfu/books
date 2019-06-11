os 包提供平台独立的接口来访问操作系统的功能。

## 包级变量

打开文件时的读写权限：

```
const (
        // Exactly one of O_RDONLY, O_WRONLY, or O_RDWR must be specified.
        O_RDONLY int = syscall.O_RDONLY // open the file read-only.
        O_WRONLY int = syscall.O_WRONLY // open the file write-only.
        O_RDWR   int = syscall.O_RDWR   // open the file read-write.
        // The remaining values may be or'ed in to control behavior.
        O_APPEND int = syscall.O_APPEND // append data to the file when writing.
        O_CREATE int = syscall.O_CREAT  // create a new file if none exists.
        O_EXCL   int = syscall.O_EXCL   // used with O_CREATE, file must not exist.
        O_SYNC   int = syscall.O_SYNC   // open for synchronous I/O.
        O_TRUNC  int = syscall.O_TRUNC  // truncate regular writable file when opened.
)
```

`io.SeekStart, io.SeekCurrent, and io.SeekEnd`

路径分隔符：

```
const (
        PathSeparator     = '/' // OS-specific path separator
        PathListSeparator = ':' // OS-specific path list separator
)
```

DevNull 是操作系统的“空设备”的名称。在类 Unix 系统上，它是`/dev/null`;在Windows上，`NUL`。

```
const DevNull = "/dev/null"
```

## 包级变量

一些常见系统调用错误：

```
var (
        ErrInvalid    = errors.New("invalid argument")
        ErrPermission = errors.New("permission denied")
        ErrExist      = errors.New("file already exists")
        ErrNotExist   = errors.New("file does not exist")
        ErrClosed     = errors.New("file already closed")
        ErrNoDeadline = poll.ErrNoDeadline
)
```

标准输入、标准输出、错误输出：

```
var (
        Stdin  = NewFile(uintptr(syscall.Stdin), "/dev/stdin")
        Stdout = NewFile(uintptr(syscall.Stdout), "/dev/stdout")
        Stderr = NewFile(uintptr(syscall.Stderr), "/dev/stderr")
)
```

Args 保存命令行参数，第一个是程序名称：

```
var Args []string
```
