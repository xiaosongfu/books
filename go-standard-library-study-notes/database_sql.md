```
import "database/sql"
```

> 包文件
[convert.go](https://golang.google.cn/src/database/sql/convert.go)
[ctxutil.go](https://golang.google.cn/src/database/sql/ctxutil.go)
[sql.go](https://golang.google.cn/src/database/sql/sql.go)


sql 包为 SQL(或类 SQL) 数据库提供了通用的接口。  

sql 包包含所有的 db 访问和操作方法，driver 包提供所有数据库驱动都需要实现的接口方法。  

如果驱动不支持上下文取消，则需要等到查询完成才会返回结果。  

sql 包必须和一个数据库驱动结合使用，在[https://golang.org/s/sqldrivers](https://golang.org/s/sqldrivers) 或 [https://github.com/golang/go/wiki/SQLDrivers](https://github.com/golang/go/wiki/SQLDrivers) 查看所有可用的数据库驱动列表。  
> 比如
DB2: https://bitbucket.org/phiggins/db2cli  
MySQL: https://github.com/ziutek/mymysql  
MySQL: https://github.com/go-sql-driver/mysql/  
Postgres (pure Go): https://github.com/lib/pq  
SQLite (uses cgo): https://github.com/mattn/go-sqlite3  

在[https://golang.org/s/sqlwiki](https://golang.org/s/sqlwiki.) 或 [https://github.com/golang/go/wiki/SQLInterface](https://github.com/golang/go/wiki/SQLInterface) 查看 sql 包使用示例。[中文翻译](wiki/github.com-golang-go-wiki-SQLInterface.md)  


## 变量
ErrConnDone  
ErrNoRows  
ErrTxDone  

## 函数
### func Drivers() []string
把所有已经注册的驱动的名字按字母表顺序排好序后返回

### func Register(name string, driver driver.Driver)
提供一个 name 来调用该函数使得一个数据库驱动可以使用。  
如果使用相同的 name 参数调用了两次该函数，或者 driver 是 nil，都会导致 panic。  
比如 github.com/go-sql-driver/mysql/driver.go 文件中有这样一段代码就是用来注册该驱动的：
```
func init() {
	sql.Register("mysql", &MySQLDriver{})
}
```

## struct
> type ColumnType struct
ColumnType 包含了数据库表列的名称和类型。  
### func (ci *ColumnType) DatabaseTypeName() string
### func (ci *ColumnType) DecimalSize() (precision, scale int64, ok bool)
### func (ci *ColumnType) Length() (length int64, ok bool)
### func (ci *ColumnType) Name() string
### func (ci *ColumnType) Nullable() (nullable, ok bool)
### func (ci *ColumnType) ScanType() reflect.Type

> type Conn struct
### func (c *Conn) BeginTx(ctx context.Context, opts *TxOptions) (*Tx, error)
### func (c *Conn) Close() error
### func (c *Conn) ExecContext(ctx context.Context, query string, args ...interface{}) (Result, error)
### func (c *Conn) PingContext(ctx context.Context) error
### func (c *Conn) PrepareContext(ctx context.Context, query string) (*Stmt, error)
### func (c *Conn) QueryContext(ctx context.Context, query string, args ...interface{}) (*Rows, error)
### func (c *Conn) QueryRowContext(ctx context.Context, query string, args ...interface{}) *Row

> type DB struct
### func Open(driverName, dataSourceName string) (*DB, error)
### func OpenDB(c driver.Connector) *DB
### func (db *DB) Begin() (*Tx, error)
### func (db *DB) BeginTx(ctx context.Context, opts *TxOptions) (*Tx, error)
### func (db *DB) Close() error
### func (db *DB) Conn(ctx context.Context) (*Conn, error)
### func (db *DB) Driver() driver.Driver
### func (db *DB) Exec(query string, args ...interface{}) (Result, error)
### func (db *DB) ExecContext(ctx context.Context, query string, args ...interface{}) (Result, error)
### func (db *DB) Ping() error
### func (db *DB) PingContext(ctx context.Context) error
### func (db *DB) Prepare(query string) (*Stmt, error)
### func (db *DB) PrepareContext(ctx context.Context, query string) (*Stmt, error)
### func (db *DB) Query(query string, args ...interface{}) (*Rows, error)
### func (db *DB) QueryContext(ctx context.Context, query string, args ...interface{}) (*Rows, error)
### func (db *DB) QueryRow(query string, args ...interface{}) *Row
### func (db *DB) QueryRowContext(ctx context.Context, query string, args ...interface{}) *Row
### func (db *DB) SetConnMaxLifetime(d time.Duration)
### func (db *DB) SetMaxIdleConns(n int)
### func (db *DB) SetMaxOpenConns(n int)
### func func (db *DB) Stats() DBStats

> type DBStats struct

> type IsolationLevel struct

> type NamedArg struct
### func Named(name string, value interface{}) NamedArg

> type NullBool struct
### func (n *NullBool) Scan(value interface{}) error
### func (n NullBool) Value() (driver.Value, error)

> type NullFloat64 struct
### func (n *NullFloat64) Scan(value interface{}) error
### func (n NullFloat64) Value() (driver.Value, error)

> type NullInt64 struct
### func (n *NullInt64) Scan(value interface{}) error
### func (n NullInt64) Value() (driver.Value, error)

> type NullString struct
### func (ns *NullString) Scan(value interface{}) error
### func (ns NullString) Value() (driver.Value, error)

> type x struct
### func 
### func 
### func 
### func 


> type x struct
### func 
### func 
### func 
### func 