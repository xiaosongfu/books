## 源码

```
@available(iOS 13.0, OSX 10.15, tvOS 13.0, watchOS 6.0, *)
public protocol View {

    /// The type of view representing the body of this view.
    ///
    /// When you create a custom view, Swift infers this type from your
    /// implementation of the required `body` property.
    associatedtype Body : View

    /// Declares the content and behavior of this view.
    var body: Self.Body { get }
}

@available(iOS 13.0, OSX 10.15, *)
@available(tvOS, unavailable)
@available(watchOS, unavailable)
extension View {

    /// Sets the style for `DatePicker` within the environment of `self`
    @available(tvOS, unavailable)
    @available(watchOS, unavailable)
    public func datePickerStyle<S>(_ style: S) -> some View where S : DatePickerStyle

}
```

还有有多扩展属性和方法!!

## 概述

A type that represents a SwiftUI view.

You create custom views by declaring types that conform to the `View` protocol. Implement the required `body` computed property to provide the content and behavior for your custom view.

