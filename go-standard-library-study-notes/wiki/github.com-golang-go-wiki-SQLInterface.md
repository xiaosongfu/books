### 介绍
database/sql 包为 SQL(或类 SQL) 数据库提供了通用的接口。  

### 数据库驱动
database/sql 包必须和一个数据库驱动结合使用。

### 链接到数据库
使用 Open() 方法来创建一个数据库 handle：
```
db, err := sql.Open(driver, dataSourceName)
```
其中 driver 指定了使用什么数据库驱动，dataSourceName 指定了特定的数据库链接信息，比如数据库名称和认证信息。  

注意：Open() 方法不会直接创建一个数据库连接，只有到一个查询发生的时候才会创建。为了在执行一个查询之前验证连接是否可以正常创建，可以使用 Ping() 方法：
```
if err := db.Ping(); err != nil {
  log.Fatal(err)
}
```
使用完后使用 Close() 方法关闭数据库连接。  

### 执行查询
##### Exec()
Exec() 方法执行没有行结果返回的查询，比如 insert ，update 等操作。  
```
result, err := db.Exec(
	"INSERT INTO users (name, age) VALUES ($1, $2)",
	"gopher",
	27,
)
```
result 包含了最新插入的 id 或受影响的行数，但该 result 是否可用取决于数据库驱动的实现。  

##### Query()
Query() 方法用来查询行结果。
```
rows, err := db.Query("SELECT name FROM users WHERE age = $1", age)
if err != nil {
	log.Fatal(err)
}
for rows.Next() {
	var name string
	if err := rows.Scan(&name); err != nil {
		log.Fatal(err)
	}
	fmt.Printf("%s is %d\n", name, age)
}
if err := rows.Err(); err != nil {
	log.Fatal(err)
}
```

##### QueryRow()
QueryRow() 方法用来执行那些只希望返回一行结果的查询
```
var age int64
row := db.QueryRow("SELECT age FROM users WHERE name = $1", name)
err := row.Scan(&age)
```

##### Prepared()
使用 Prepared() 来创建 Prepared statements
```
age := 27
stmt, err := db.Prepare("SELECT name FROM users WHERE age = $1")
if err != nil {
	log.Fatal(err)
}
rows, err := stmt.Query(age)
// process rows
```
Prepared statements 可用调用 Exec() Query() QueryRow()，Prepared statements 使用完成之后需要调用 Close() 方法关闭。

### 事务
使用 Begin() 方法来开启一个事务
```
tx, err := db.Begin()
if err != nil {
	log.Fatal(err)
}
```
在一个事物里面可以使用 Exec() Query() QueryRow() Prepared() 。  
一个事物必须调用 Commit() 或 Rollback() 来结束。

### 处理 NULL
如果数据库的某一列允许为 null，所有支持 null 值得类型都可以传递给 Scan() 方法。  
例如，names 表的 name 列可以为 null ：
```
var name NullString
err := db.QueryRow("SELECT name FROM names WHERE id = $1", id).Scan(&name)
...
if name.Valid {
	// use name.String
} else {
	// value is NULL
}
```
database/sql 包只实现了 NullBool, NullFloat64, NullInt64, NullString。具体实现了那些 null 类型还依赖于数据库驱动。 
