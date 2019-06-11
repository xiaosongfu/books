

## 读写文件

#### func (f *File) Write(b []byte) (n int, err error)

#### func (f *File) WriteAt(b []byte, off int64) (n int, err error)

#### func (f *File) WriteString(s string) (n int, err error)

```
func (f *File) WriteString(s string) (n int, err error) {
	return f.Write([]byte(s))
}
```

#### func (f *File) Read(b []byte) (n int, err error)

读到文件末尾，Read返回 0 和 io.EOF。

#### func (f *File) ReadAt(b []byte, off int64) (n int, err error)

#### func (f *File) Readdirnames(n int) (names []string, err error)

#### func (f *File) Seek(offset int64, whence int) (ret int64, err error)


#### 
#### 