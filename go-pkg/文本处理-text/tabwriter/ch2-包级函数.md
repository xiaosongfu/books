通常的是流程是：

1. 使用 `func NewWriter(output io.Writer, minwidth, tabwidth, padding int, padchar byte, flags uint) *Writer` 创建一个 tabwriter.Writer
2. 通过 `func (b *Writer) Write(buf []byte) (n int, err error)` 方法写入文本，但这一步通常都不是直接调用这个方法，而是使用如 `fmt.Fprintln(tabwriter.Writer, "a\tb\tc")` 之类的方法
3. 使用 `func (b *Writer) Flush() error` 方法在全部文本都写入后一次写到 output 中

### func NewWriter(output io.Writer, minwidth, tabwidth, padding int, padchar byte, flags uint) *Writer

```
// NewWriter allocates and initializes a new tabwriter.Writer.
// The parameters are the same as for the Init function.
//
func NewWriter(output io.Writer, minwidth, tabwidth, padding int, padchar byte, flags uint) *Writer {
	return new(Writer).Init(output, minwidth, tabwidth, padding, padchar, flags)
}
```

实现方法是 new 一个 Writer 并调用它的 Init 方法。

示例：

```
w := tabwriter.NewWriter(os.Stdout, 0, 0, 1, '-', tabwriter.AlignRight|tabwriter.Debug)
	fmt.Fprintln(w, "a\tb\tc\t")
	fmt.Fprintln(w, "aa\tbb\tcc\t")
	fmt.Fprintln(w, "aaa\tcc\tccc\t")
	fmt.Fprintln(w, "aaaa\tdddd\teeee\t")
	w.Flush()
```

输出：

```
----a|----b|----c|
---aa|---bb|---cc|
--aaa|---cc|--ccc|
-aaaa|-dddd|-eeee|
```