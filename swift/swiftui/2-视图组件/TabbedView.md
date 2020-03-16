## 1. 源码

```

```

## 2. 使用


```
struct ContentView : View {
    var body: some View {
        NavigationView {
            TabbedView {
                OrderForm()
                    .tabItemLabel {
                        Image(systemName: "square.and.pencil")
                        Text("New Order")
                    }
                OrderHistory()
                    .tabItemLabel {
                        Image(systemName: "clock.fill")
                        Text("History")
                    }
            }
        }
    }
}
```
