
Dialog 类是对话框的基类，但您应避免直接实例化 Dialog，而是使用下列子类之一：

* `AlertDialog` : 此对话框可显示标题、最多三个按钮、可选择项列表或自定义布局。
* `DatePickerDialog` 或 `TimePickerDialog` : 此对话框带有允许用户选择日期或时间的预定义界面。

---

* androidx.appcompat.app.AppCompatDialog
* android.app.Dialog

AppCompatDialog 继承自 android.app.Dialog : `public class AppCompatDialog extends Dialog implements AppCompatCallback`

---

* androidx.appcompat.app.AlertDialog
* android.app.AlertDialog

推荐使用：`androidx.appcompat.app.AlertDialog`

---

* Android系统原生对话框使用  https://www.jianshu.com/p/4712652fb313
* Android之AlertDialog的基本使用 https://segmentfault.com/a/1190000009523107
