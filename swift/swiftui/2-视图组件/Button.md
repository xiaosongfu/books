## 1. 源码

```
@available(iOS 13.0, OSX 10.15, tvOS 13.0, watchOS 6.0, *)
public struct Button<Label> : View where Label : View {

    /// Creates an instance for triggering `action`.
    ///
    /// - Parameters:
    ///     - action: The action to perform when `self` is triggered.
    ///     - label: A view that describes the effect of calling `action`.
    public init(action: @escaping () -> Void, @ViewBuilder label: () -> Label)

    /// Declares the content and behavior of this view.
    public var body: some View { get }

    /// The type of view representing the body of this view.
    ///
    /// When you create a custom view, Swift infers this type from your
    /// implementation of the required `body` property.
    public typealias Body = some View
}
```

## 2. 使用

```
Button(action: submitOrder) {
    VStack {
        Image("Toast")
        Text("Order")
    }
}
```

.disabled(order.count == 0)