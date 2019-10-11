* absolute： 生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。
* fixed：生成绝对定位的元素，相对于浏览器窗口进行定位。元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。
* relative：生成相对定位的元素，相对于其正常位置进行定位。因此，"left:20" 会向元素的 LEFT 位置添加 20 像素。
* static： 默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right 或者 z-index 声明）。

## absolute

```
h2 {
  position:absolute;
  left:100px;
  top:150px;
}
```

元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。
* top
* right
* bottom
* left

## fixed

元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。
* top
* right
* bottom
* left