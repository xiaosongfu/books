## main & init 函数

* 一个包里面可以有很多个 init 函数，一个 go 文件里面也可以有很多个 init 函数，他们的调用顺序是不确定的。
 
* 一个 main 包里面可以有很多个 main 函数，但是一个 go 文件里面只能有一个 main 函数，当一个 main 包里面有多个 main 函数的时候，执行 go build 和 go install 的时候会报错，提示 main 函数重复定义。 
