<head>是<html>的第一个子元素。如果网页不包含 <head>，浏览器会自动创建一个。

<head>的子元素一般有下面七个：

* <meta>：设置网页的元数据。
* <title>：设置网页标题。

* <link>：连接外部样式表。
* <style>：放置内嵌的样式表。
* <script>：引入脚本。
* <noscript>：浏览器不支持脚本时，所要显示的内容。

* <base>：设置网页内部相对 URL 的计算基准。

## meta

<meta>标签用于设置或说明网页的元数据，必须放在<head>里面。一个<meta>标签就是一项元数据，网页可以有多个<meta>。

<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<meta name="description" content="HTML 语言入门">
<meta name="keywords" content="HTML,教程">
<meta name="author" content="张三">

> <meta>的name属性表示元数据的名字，content属性表示元数据的值。

## title

<title>标签用于指定网页的标题，会显示在浏览器窗口的标题栏。

```
<head>
  <title>网页标题</title>
</head>
```

<title>标签的内部，不能再放置其他标签，只能放置无格式的纯文本。

## base

<base>标签指定网页内部的所有相对 URL 的计算基准。整张网页只能有一个<base>标签，而且只能放在<head>里面。它是单独使用的标签，没有闭合标签，下面是一个例子。

```
<head>
<base href="https://www.example.com/files/" target="_blank">
</head>
```

<base>标签的href属性给出计算的基准网址，target属性给出如何打开链接的说明。已知计算基准是https://www.example.com/files/，那么相对 URL foo.html，就可以转成绝对 URL https://www.example.com/files/foo.html。

注意，<base>标签必须至少具有href属性或target属性之一。

```
<base href="http://foo.com/app/">
<base target="_blank">
```

一旦设置了<base>，就对整个网页都有效。如果要改变某个链接的行为，只能用绝对链接替代相对链接。尤其需要注意锚点，这时锚点也是针对<base>计算的，而不是针对当前网页的 URL。
