exec 包用来执行外部命令。

它包装 os.StartProcess，以便更容易重新映射 stdin 和 stdout，使用 pipes 连接 I/O，并进行其他调整。

## 包级变量

ErrNotFound 是路径搜索未能找到可执行文件时导致的错误：

```
var ErrNotFound = errors.New("executable file not found in $PATH")
```