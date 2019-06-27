## when 表达式

随着 if 条件语句的复杂性增加，您可以考虑使用when表达式替换 if-else 表达式，如以下示例所示：

```
val answerString = when {
    count == 42 -> "I have the answer."
    count > 35 -> "The answer is close."
    else -> "The answer eludes me."
}

println(answerString)
```

when表达式中的每个分支由条件，箭头（->）和结果表示。如果箭头左侧的条件评估为true，则返回右侧表达式的结果。请注意，执行不会从一个分支落到下一个分支。

