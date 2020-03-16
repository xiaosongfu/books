
* leading
* trailing
* center
* top
* bottom
* topLeading
* topTrailing
* bottomLeading
* bottomTrailing

```
@available(iOS 13.0, OSX 10.15, tvOS 13.0, watchOS 6.0, *)
public struct Alignment : Equatable {

    public var horizontal: HorizontalAlignment

    public var vertical: VerticalAlignment

    @inlinable public init(horizontal: HorizontalAlignment, vertical: VerticalAlignment)

    public static let center: Alignment

    public static let leading: Alignment

    public static let trailing: Alignment

    public static let top: Alignment

    public static let bottom: Alignment

    public static let topLeading: Alignment

    public static let topTrailing: Alignment

    public static let bottomLeading: Alignment

    public static let bottomTrailing: Alignment

    /// Returns a Boolean value indicating whether two values are equal.
    ///
    /// Equality is the inverse of inequality. For any values `a` and `b`,
    /// `a == b` implies that `a != b` is `false`.
    ///
    /// - Parameters:
    ///   - lhs: A value to compare.
    ///   - rhs: Another value to compare.
    public static func == (a: Alignment, b: Alignment) -> Bool
}
```
