## 1. 源码

```
@available(iOS 13.0, OSX 10.15, tvOS 13.0, watchOS 6.0, *)
public struct Spacer {

    /// The minimum length this spacer can be shrunk to, along the axis or axes
    /// of expansion.
    ///
    /// If `nil`, the system default spacing between views is used.
    public var minLength: CGFloat?

    @inlinable public init(minLength: CGFloat? = nil)

    /// The type of view representing the body of this view.
    ///
    /// When you create a custom view, Swift infers this type from your
    /// implementation of the required `body` property.
    public typealias Body = Never
}
```

## 2. 使用

Spacer 会扩展以使其包含的视图占用其父视图的所有可用空间，而不是仅根据 Spacer 的内容大小来确定占用多少空间。
