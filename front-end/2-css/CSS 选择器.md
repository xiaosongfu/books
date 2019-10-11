## 1

类选择器
id 选择器
标签选择器

.class
#id
*
element 如：p

element.class
element#id
element[attribute]

## 2

选择器的分组
派生选择器

element,element 如：div,p -> 选择所有 <div> 元素和所有 <p> 元素
element element 如：div p -> 选择 <div> 元素内部的所有 <p> 元素
element>element 如：div>p -> 选择父元素为 <div> 元素的所有 <p> 元素
element+element 如：div+p -> 选择紧接在 <div> 元素之后的所有 <p> 元素

## 3 属性选择器

属性选择器

[attribute] 如：[target] -> 选择带有 target 属性所有元素
[attribute=value] 如：[target=_blank] -> 选择 target="_blank" 的所有元素
[attribute~=value] 如：[title~=flower] -> 选择 title 属性包含单词 "flower" 的所有元素
[attribute|=value] 如：[lang|=en] -> 选择 lang 属性值以 "en" 开头的所有元素

[attribute^=value] 如：a[src^="https"] -> 选择其 src 属性值以 "https" 开头的每个 <a> 元素
[attribute$=value] 如：a[src$=".pdf"] -> 选择其 src 属性以 ".pdf" 结尾的所有 <a> 元素
[attribute*=value] 如：a[src*="abc"] -> 选择其 src 属性中包含 "abc" 子串的每个 <a> 元素

## 4 css 伪类

:link 如：a:link -> 选择所有未被访问的链接
:visited 如：a:visited -> 选择所有已被访问的链接
:active 如：a:active -> 选择活动链接
:hover 如：a:hover -> 选择鼠标指针位于其上的链接
:focus 如：input:focus -> 选择获得焦点的 input 元素

:first-letter 如：p:first-letter -> 选择每个 <p> 元素的首字母
:first-line 如：p:first-line -> 选择每个 <p> 元素的首行
:first-child 如：p:first-child -> 选择属于父元素的第一个子元素的每个 <p> 元素

:before 如：p:before -> 在每个 <p> 元素的内容之前插入内容
:after 如：p:after -> 在每个 <p> 元素的内容之后插入内容
