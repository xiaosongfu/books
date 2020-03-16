## 1. 源码

```
@available(iOS 13.0, OSX 10.15, tvOS 13.0, watchOS 6.0, *)
public struct ZStack<Content> : View where Content : View {

    @inlinable public init(alignment: Alignment = .center, @ViewBuilder content: () -> Content)

    /// The type of view representing the body of this view.
    ///
    /// When you create a custom view, Swift infers this type from your
    /// implementation of the required `body` property.
    public typealias Body = Never
}
```

## 2. 使用

