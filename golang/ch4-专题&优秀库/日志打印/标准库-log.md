## 1. 简单使用


## 2. 将日志写到文件

```
package main

import (
    "log"
    "os"
)

func main() {
    f, err := os.OpenFile("filename", os.O_WRONLY|os.O_CREATE|os.O_APPEND, 0644)
    if err != nil {
            log.Fatal(err)
    }   
    
    defer f.Close()

    // 设置日志输出到 f
    log.SetOutput(f)

    // 测试用例
    log.Println("check to make sure it works")
}
```

```
package main

import(
    "fmt"
    "log"
    "os"
)

func main(){
    logfile,err:=os.OpenFile("/Users/cybercare/tmp/test.log",os.O_RDWR|os.O_CREATE,0666)
    if err!=nil{
        fmt.Printf("%s\r\n",err.Error())
        os.Exit(-1)
    }

    defer logfile.Close()

    logger:=log.New(logfile,"\r\n",log.Ldate|log.Ltime|log.Llongfile)
    
    logger.Println("hello")
    logger.Println("oh....")
    logger.Fatal("test")
}
```
