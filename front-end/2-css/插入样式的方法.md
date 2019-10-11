浏览器缺省设置
外部样式表
内部样式表
内联样式

---

## 1. 使用 <link> 标签引入外部样式文件

```
<link rel="stylesheet" href="style.css">
```

## 2. 使用 <style> 标签，直接包含样式规则

```
<style>
    img {
        border: 4px solid red;
    }
</style>
```

## 3. 使用内联样式

```
<img src="demo.jpg" style="border: 4px solid red;">
```

内联样式由于位于外部样式表和嵌入样式表之后，优先级高于其他所有样式，除非其他地方与之冲突的样式标记了 `!important`。
