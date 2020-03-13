## 源码

```
@available(iOS 13.0, OSX 10.15, tvOS 13.0, watchOS 6.0, *)
public protocol PreviewProvider : _PreviewProvider {

    /// The type of the previews variable.
    associatedtype Previews : View

    /// Generates a collection of previews.
    ///
    /// Example:
    ///
    ///     struct MyPreviews : PreviewProvider {
    ///         static var previews: some View {
    ///             return Group {
    ///                 GreetingView("Hello"),
    ///                 GreetingView("Guten Tag"),
    ///
    ///                 ForEach(otherGreetings, id: \.self) {
    ///                     GreetingView($0)
    ///                 }
    ///             }
    ///             .previewDevice("iPhone X")
    ///         }
    ///     }
    static var previews: Self.Previews { get }

    /// Returns which platform to run the provider on.
    ///
    /// When `nil`, Xcode infers the platform based on the file the
    /// `PreviewProvider` is defined in. This should only be provided when the
    /// file is in targets that support multiple platforms.
    static var platform: PreviewPlatform? { get }
}
```

还有有多扩展属性和方法!!

## 概述

A type that produces view previews in Xcode.

Xcode statically discovers types that conform to the `PreviewProvider` protocol in your app, and generates previews for each provider it discovers.

* `static var previews: Self.Previews { get }`
* `static var platform: PreviewPlatform? { get }`

---

## PreviewPlatform

```
/// OS platform for running a preview on.
@available(iOS 13.0, OSX 10.15, tvOS 13.0, watchOS 6.0, *)
public enum PreviewPlatform {

    case iOS

    case macOS

    case tvOS

    case watchOS

    /// Returns a Boolean value indicating whether two values are equal.
    ///
    /// Equality is the inverse of inequality. For any values `a` and `b`,
    /// `a == b` implies that `a != b` is `false`.
    ///
    /// - Parameters:
    ///   - lhs: A value to compare.
    ///   - rhs: Another value to compare.
    public static func == (a: PreviewPlatform, b: PreviewPlatform) -> Bool

    /// The hash value.
    ///
    /// Hash values are not guaranteed to be equal across different executions of
    /// your program. Do not save hash values to use during a future execution.
    ///
    /// - Important: `hashValue` is deprecated as a `Hashable` requirement. To
    ///   conform to `Hashable`, implement the `hash(into:)` requirement instead.
    public var hashValue: Int { get }

    /// Hashes the essential components of this value by feeding them into the
    /// given hasher.
    ///
    /// Implement this method to conform to the `Hashable` protocol. The
    /// components used for hashing must be the same as the components compared
    /// in your type's `==` operator implementation. Call `hasher.combine(_:)`
    /// with each of these components.
    ///
    /// - Important: Never call `finalize()` on `hasher`. Doing so may become a
    ///   compile-time error in the future.
    ///
    /// - Parameter hasher: The hasher to use when combining the components
    ///   of this instance.
    public func hash(into hasher: inout Hasher)
}
```
