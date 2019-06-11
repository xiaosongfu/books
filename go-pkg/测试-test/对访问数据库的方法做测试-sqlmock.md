使用 https://github.com/DATA-DOG/go-sqlmock

## 1. 概述

```
func New(options ...func(*sqlmock) error) (*sql.DB, Sqlmock, error)

func NewWithDSN(dsn string, options ...func(*sqlmock) error) (*sql.DB, Sqlmock, error)
```

```
func NewResult(lastInsertID int64, rowsAffected int64) driver.Result

func NewErrorResult(err error) driver.Result

func NewRows(columns []string) *Rows
```

```
func (e *ExpectedExec) WillDelayFor(duration time.Duration) *ExpectedExec

func (e *ExpectedExec) WithArgs(args ...driver.Value) *ExpectedExec

func (e *ExpectedExec) WillReturnResult(result driver.Result) *ExpectedExec

func (e *ExpectedExec) WillReturnError(err error) *ExpectedExec

func (e *ExpectedQuery) WillReturnRows(rows ...*Rows) *ExpectedQuery
// 已废弃!!
func (e *ExpectedQuery) WillReturnRows(rows *Rows) *ExpectedQuery
```

```
// 确保满足所有期望
ExpectationsWereMet()
```

```
type Sqlmock interface {
	ExpectClose() *ExpectedClose

	ExpectBegin() *ExpectedBegin
	ExpectCommit() *ExpectedCommit
	ExpectRollback() *ExpectedRollback

	ExpectPrepare(expectedSQL string) *ExpectedPrepare
	ExpectQuery(expectedSQL string) *ExpectedQuery
	ExpectExec(expectedSQL string) *ExpectedExec

	MatchExpectationsInOrder(bool)

	ExpectationsWereMet() error

	NewRows(columns []string) *Rows
}
```


```
type Argument interface {
	Match(driver.Value) bool
}
```

## 2. 示例


最后一定记得调用：

```
// we make sure that all expectations were met
if err := mock.ExpectationsWereMet(); err != nil {
	t.Errorf("there were unfulfilled expectations: %s", err)
}
```
