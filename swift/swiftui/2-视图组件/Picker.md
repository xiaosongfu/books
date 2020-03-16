## 1. 源码

```

```

## 2. 使用

```
Picker(selections: $order.avocadoStyle, label: Text("Avocade")) {
    Text("Sliced").tag(AvocadoStyle.sliced)
    Text("Mashed").tag(AvocadoStyle.mashed)
}
```

假设有很多的选项的话，可以使用 ForeEach 组件：

```
Picker(selection: $order.spread, label: Text("Spread")) {
    ForEach(Spread.allCases) { spread in
        Text(spread.name).tag(spread)
    }
}
```



.pickerStyle(.radioGroup)

