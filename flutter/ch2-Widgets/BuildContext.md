BuildContext 对象是应用程序窗口小部件树中窗口小部件位置的句柄。
每个小部件都有自己的 BuildContext，它是 StatelessWidget.build 或 State.build 

## State

`abstract class State<T extends StatefulWidget> extends Diagnosticable`

State 类有一个 context 计算属性：`BuildContext get context => _element;`