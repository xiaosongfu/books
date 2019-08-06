```
type T struct {
	common
	isParallel bool
	context    *testContext
}
```

## 方法

func (c *common) Fail()
func (c *common) Failed() bool 
func (c *common) FailNow()

func (c *common) Log(args ...interface{})
func (c *common) Logf(format string, args ...interface{})

func (c *common) Error(args ...interface{})
func (c *common) Errorf(format string, args ...interface{})

func (c *common) Fatal(args ...interface{})
func (c *common) Fatalf(format string, args ...interface{})

func (c *common) Skip(args ...interface{})
func (c *common) Skipf(format string, args ...interface{})
func (c *common) SkipNow()
func (c *common) Skipped() bool

func (c *common) Helper()

func (t *T) Run(name string, f func(t *T)) bool
