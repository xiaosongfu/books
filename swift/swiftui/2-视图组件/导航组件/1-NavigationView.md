## 概述

NavigationView 用来实现导航功能，一种用法是在他里面包裹 List，在 List 的 item 用 NavigationLink 包裹，这样就可以实现点击 List 的 item 跳转界面。

通过导航栏的标题设置为 List 的修饰器。

示例代码如下：

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

---

RoomDetail 代码：

```
import SwiftUI

struct RoomDetail: View {
    let room: Room
    
    var body: some View {
        Image(room.imageName)
            .navigationBarTitle(Text(room.name), displayMode: .inline)
    }
}

struct RoomDetail_Previews: PreviewProvider {
    static var previews: some View {
        NavigationView {
            RoomDetail(room: testData[0])
        }
    }
}
```

## 在预览时候使用 NavigationView

RoomDetail 在预览的时候，如果没有显示标题栏，则可以在预览里面用 NavigationView 包裹。
