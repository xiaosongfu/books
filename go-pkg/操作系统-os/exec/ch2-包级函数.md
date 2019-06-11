#### func LookPath(file string) (string, error)

LookPath 在 PATH 环境变量命名的目录中搜索可执行文件。

如果file 包含斜杠，则直接尝试并且不查询 PATH。

结果是绝对路径或相对路径。