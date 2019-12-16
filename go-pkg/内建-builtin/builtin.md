```  
import "builtin"
```  

builtin 包展示了 golang 预定义的标识符(predeclared identifiers)，把他们定义在这仅仅是为了 godoc 去展示这些特殊的标识符，而不是说这些标识符真正是定义在 builtin 包里面。  
包含 [builtin.go](https://golang.google.cn/src/builtin/builtin.go) 文件。

## 常量
```  
const (
        true  = 0 == 0 // Untyped bool.
        false = 0 != 0 // Untyped bool.
)
```  
true 和 false 是两个隐式的 boolean 类型值。  

```  
const iota = 0 // Untyped int.
``` 

它从 0 开始索引。   

## 变量
```  
var nil Type // Type must be a pointer, channel, func, interface, map, or slice type
```  
nil 是预定义的标识符，用来表示指针(pointer)，通道(channel)，函数(func)，接口(interface)，map，slice 类型的零值。

## 函数
> func append(slice []Type, elems ...Type) []Type  

内建函数 append 实现添加元素到 slice 的末尾。如果 slice 的容量充足则重新切片来容纳新的元素，如果容量不足则会重新分配一个新的底层数组。 append 函数返回更新的 slice，所以存储 append 函数的结果是很有必要的，通常使用 slice 自己来接收返回值，如：
```  
slice = append(slice, elem1, elem2)
slice = append(slice, anotherSlice...)
```  
有一种特殊情况，追加 string 到 byte slice 是合法的，如：
```  
slice = append([]byte("hello "), "world"...)
```  
* TODO ... 的概念、意义和用法


#### func cap(v Type) int  
内建函数 cap 返回 v 的容量，根据它的类型：
```  
数组 array：数组的元素个数，和 len(v) 一样
指向数组的指针：指向的数组的元素个数，和 len(v) 一样
切片 slice：当重新切片的时候可以分配的最大长度，如果 v 是 nil 则容量为 0
通道 channel：通道缓冲区的容量，以元素为单位，如果 v 是 nil 则容量为 0
```  


#### func close(c chan<- Type)  

应该在往 channel 里放值的地方关闭，而不能是从 channel 里取值的地方。

#### func complex(r, i FloatType) ComplexType  


#### func copy(dst, src []Type) int  


#### func delete(m map[Type]Type1, key Type)  


#### func imag(c ComplexType) FloatType  


#### func len(v Type) int  


#### func make(t Type, size ...IntegerType) Type  


#### func new(Type) *Type  


#### func panic(v interface{})  


#### func print(args ...Type)  


#### func println(args ...Type)  


#### func real(c ComplexType) FloatType  


#### func recover() interface{}  
