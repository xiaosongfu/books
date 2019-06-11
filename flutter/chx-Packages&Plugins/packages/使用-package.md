# 依赖版本

当 `pubspec.yaml` 使用速记形式添加包时，`plugin1:` 这被解释为 `plugin1:any`，即可以使用任何版本的包。为了确保某个包在更新后还可以正常使用，我们建议使用以下格式之一指定版本范围：

范围限制: 指定一个最小和最大的版本号,如:

```
dependencies:
  url_launcher: '>=0.1.2 <0.2.0'
```

范围限制使用 caret 语法: 与常规的范围约束类似

```
dependencies:
  collection: '^0.1.2'
```