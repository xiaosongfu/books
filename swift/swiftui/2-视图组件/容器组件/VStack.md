## 1. 源码

```
@available(iOS 13.0, OSX 10.15, tvOS 13.0, watchOS 6.0, *)
public struct VStack<Content> : View where Content : View {

    /// Creates an instance with the given `spacing` and Y axis `alignment`.
    ///
    /// - Parameters:
    ///     - alignment: the guide that will have the same horizontal screen
    ///       coordinate for all children.
    ///     - spacing: the distance between adjacent children, or nil if the
    ///       stack should choose a default distance for each pair of children.
    @inlinable public init(alignment: HorizontalAlignment = .center, spacing: CGFloat? = nil, @ViewBuilder content: () -> Content)

    /// The type of view representing the body of this view.
    ///
    /// When you create a custom view, Swift infers this type from your
    /// implementation of the required `body` property.
    public typealias Body = Never
}
```

## 2. 使用

