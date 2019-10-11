HTML 链接是通过 <a> 标签进行定义的。

## href 属性

可以是 url 或锚点名称。

## target 属性

```
<a href="http://www.w3school.com.cn/" target="_blank">Visit W3School!</a>
```

支持：

* _blank
* _parent
* _self
* _top

## 锚点

```
<a href="#C4">查看 Chapter 4。</a>

<a name="C4">Chapter 4</a>
或
<p id="C4">Chapter 4</p>
```

## 邮件链接

```
简单的：
<a href="mailto:someone@microsoft.com?subject=Hello%20again">发送邮件</a>

复杂的：
<a href="mailto:someone@microsoft.com?cc=someoneelse@microsoft.com&bcc=andsomeoneelse2@microsoft.com&subject=Summer%20Party&body=You%20are%20invited%20to%20a%20big%20summer%20party!">发送邮件！</a>
```
