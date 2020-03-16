## 用在 List 组件中

NavigationLink 用于包裹可以点击的 item。示例代码如下：

```
NavigationView {
    List(rooms){ item in
        NavigationLink(destination: RoomDetail(room: item)) {
            Image(systemName: "photo")
            VStack(alignment: .leading){
                Text(item.name)
                Text(item.desc)
                    .font(.subheadline)
                    .foregroundColor(.secondary)
            }
        }
    }
    .navigationBarTitle(Text("Rooms"))
}
```

## 任意地方

可以包裹任意的视图组件以实现点击跳转界面：

```
if order.includeEgg {
    NavigationLink(destination: EggLocationPicker($order.eggLockation)) {
        Text("Egg Location")
    }
}
```
