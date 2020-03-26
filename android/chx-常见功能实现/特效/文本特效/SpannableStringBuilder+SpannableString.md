
```
SpannableString ss=new SpannableString("其实我是一个好人");
ForegroundColorSpan foregroundColorSpan = new ForegroundColorSpan(Color.parseColor("#FF0000"));
ss.setSpan(foregroundColorSpan,2,6, Spanned.SPAN_EXCLUSIVE_EXCLUSIVE); // 包含2但不包含6
myTv.setText(ss);
```

```
SpannableString ss=new SpannableString("其实我是一个好人");
StyleSpan styleSpan=new StyleSpan(Typeface.BOLD);
ss.setSpan(styleSpan,3,6, Spanned.SPAN_EXCLUSIVE_EXCLUSIVE);
myTv.setText(ss);
```

---

ForegroundColorSpan : 前景色
BackgroundColorSpan : 背景色
UnderlineSpan : 下划线
StrikethroughSpan : 删除线
AbsoluteSizeSpan : 
RelativeSizeSpan : 
StyleSpan : 
SuperscriptSpan : 上标
SubscriptSpan : 下标
ImageSpan : 图片
ClickableSpan : 可点击

---

参考：

* https://www.jianshu.com/p/e5bd1287aa4f

