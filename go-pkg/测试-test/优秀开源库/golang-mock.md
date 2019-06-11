https://github.com/golang/mock

!!! gomock 只支持对通过 interface 定义的 method 进行 mock。

---

仓库里面分为两部分：

* https://github.com/golang/mock/gomock --> 核心库
* https://github.com/golang/mock/mockgen --> 辅助代码生成工具。用来为要 mock 的 interface 生成实现。

---

## 1. 安装

需要安装 `mockgen` 命令行工具。

```
go get -u github.com/golang/mock/mockgen
```

`github.com/golang/mock/gomock` 库在代码中引入即可。

## 2. 简单使用

### 2.1 定义 interface：

```
// spider.go
package spider

type Spider interface {
    GetBody(string) (string, error)
}
```

### 2.2 生成 mock 实现

使用 mockgen 生成 mock 实现文件

```
mockgen -package spider -source spider.go -destination spider_mock.go
```

该命令执行成功后会生成 `spider_mock.go` 文件。

### 2.3 写测试方法

```
func TestXxx(t *testing.T) {
    c := gomock.NewController(t)

    defer c.Finish() // 记得关闭!!!

    mockSpider := spider.NewMockSpider(c)
    mockSpider.EXPECT().GetBody("xxx").Return("xxxx", nil)

    // 接下来就可以使用 mockSpider 代替 Spider 的其他实现了
}
```

## 3. 使用 go generate 生成 mock 文件

在需要 mock 的文件第一行添加如下配置：

```
//go:generate mockgen -package spider -source spider.go -destination spider_mock.go
```

然后执行 `go generate` 命令即可 mock 文件。

---

参考：
1. 使用Golang的官方mock工具--gomock https://www.jianshu.com/p/598a11bbdafb
2. 