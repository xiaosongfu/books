## 1. 源码

```
@available(iOS 13.0, OSX 10.15, tvOS 13.0, watchOS 6.0, *)
public struct Image : Equatable {

    /// Returns a Boolean value indicating whether two values are equal.
    ///
    /// Equality is the inverse of inequality. For any values `a` and `b`,
    /// `a == b` implies that `a != b` is `false`.
    ///
    /// - Parameters:
    ///   - lhs: A value to compare.
    ///   - rhs: Another value to compare.
    public static func == (lhs: Image, rhs: Image) -> Bool
}

@available(iOS 13.0, OSX 10.15, tvOS 13.0, watchOS 6.0, *)
extension Image {

    /// Creates a labeled image usable as content for controls.
    ///
    /// - Parameters:
    ///     - name: the name of the image resource to lookup, as well as
    ///       the localization key with which to label the image.
    ///     - bundle: the bundle to search for the image resource and
    ///       localization content. If `nil`, uses the main `Bundle`.
    ///       Defaults to `nil`.
    public init(_ name: String, bundle: Bundle? = nil)

    /// Creates a labeled image usable as content for controls, with an custom
    /// specified label.
    ///
    /// - Parameters:
    ///     - name: the name of the image resource to lookup
    ///     - bundle: the bundle to search for the image resource.
    ///       If `nil`, uses the main `Bundle`. Defaults to `nil`.
    ///     - label: The label associated with the image. The label is used for
    ///       things like accessibility.
    public init(_ name: String, bundle: Bundle? = nil, label: Text)

    /// Creates an unlabeled, decorative image.
    ///
    /// - Parameters:
    ///   - name: the name of the image resource to lookup
    ///   - bundle: the bundle to search for the image resource. If `nil`, uses
    ///     the main `Bundle`. Defaults to `nil`.
    ///
    /// This image will be specifically ignored for accessibility purposes.
    public init(decorative name: String, bundle: Bundle? = nil)

    @available(OSX, unavailable)
    public init(systemName: String)
}
```

## 2. 使用

