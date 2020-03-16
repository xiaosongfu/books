## 1. 源码

```
@available(iOS 13.0, OSX 10.15, tvOS 13.0, watchOS 6.0, *)
public struct List<SelectionValue, Content> : View where SelectionValue : Hashable, Content : View {

    /// Creates a List that supports multiple selection.
    ///
    /// - Parameter selection: A binding to a set that identifies the selected
    ///   rows.
    ///
    /// - See Also: `View.selectionValue` which gives an identifier to the rows.
    ///
    /// - Note: On iOS and tvOS, you must explicitly put the `List` into Edit
    ///   Mode for the selection to apply.
    @available(watchOS, unavailable)
    public init(selection: Binding<Set<SelectionValue>>?, @ViewBuilder content: () -> Content)

    /// Creates a List that supports optional single selection.
    ///
    /// - Parameter selection: A binding to the optionally selected row.
    ///
    /// - See Also: `View.selectionValue` which gives an identifier to the rows.
    ///
    /// - Note: On iOS and tvOS, you must explicitly put the `List` into Edit
    ///   Mode for the selection to apply.
    @available(watchOS, unavailable)
    public init(selection: Binding<SelectionValue?>?, @ViewBuilder content: () -> Content)

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

