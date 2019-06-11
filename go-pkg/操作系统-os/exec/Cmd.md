```
type Cmd
    func Command(name string, arg ...string) *Cmd
    func CommandContext(ctx context.Context, name string, arg ...string) *Cmd
    func (c *Cmd) CombinedOutput() ([]byte, error)
    func (c *Cmd) Output() ([]byte, error)
    func (c *Cmd) Run() error
    func (c *Cmd) Start() error
    func (c *Cmd) StderrPipe() (io.ReadCloser, error)
    func (c *Cmd) StdinPipe() (io.WriteCloser, error)
    func (c *Cmd) StdoutPipe() (io.ReadCloser, error)
    func (c *Cmd) Wait() error
```

---

```
type Cmd struct {
	Path string

	Args []string

	Env []string

	Dir string

	Stdin io.Reader
	Stdout io.Writer
	Stderr io.Writer

	ExtraFiles []*os.File

	SysProcAttr *syscall.SysProcAttr

	Process *os.Process
    ProcessState *os.ProcessState

	ctx             context.Context // nil means none
	lookPathErr     error           // LookPath error, if any.
	finished        bool            // when Wait was called
	childFiles      []*os.File
	closeAfterStart []io.Closer
	closeAfterWait  []io.Closer
	goroutine       []func() error
	errch           chan error // one send per goroutine
	waitDone        chan struct{}
}
```

---

## 1. 创建 Cmd

#### func Command(name string, arg ...string) *Cmd

通过可执行程序和参数创建一个 *Cmd，创建的 Cmd 对象只设置了 Path 和 Args 参数。

#### func CommandContext(ctx context.Context, name string, arg ...string) *Cmd

和 `func Command(name string, arg ...string) *Cmd` 一样，只是多了 Context。

## 2. 运行 Cmd

#### func (c *Cmd) CombinedOutput() ([]byte, error)

CombinedOutput 运行命令并返回将标准输出和标准错误组合而成的结果返回。

#### func (c *Cmd) Output() ([]byte, error)

运行命令并返回其标准输出。

任何返回的错误通常都是 *ExitError 类型。

如果 c.Stderr 为 nil，则 Output 填充 ExitError.Stderr。

#### func (c *Cmd) Run() error

Run 启动指定的命令并等待它完成。

#### func (c *Cmd) Start() error

Start 启动指定的命令，但不等待它完成。

## 3. 绑定管道

#### func (c *Cmd) StderrPipe() (io.ReadCloser, error)

StderrPipe 返回一个管道，在命令启动时该命令将连接到命令的标准错误输出。

#### func (c *Cmd) StdinPipe() (io.WriteCloser, error)

StderrPipe 返回一个管道，在命令启动时该命令将连接到命令的标准输入。

#### func (c *Cmd) StdoutPipe() (io.ReadCloser, error)

StderrPipe 返回一个管道，在命令启动时该命令将连接到命令的标准输出。

## 4. 等待

#### func (c *Cmd) Wait() error