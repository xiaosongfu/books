## 1. 源码

```
@available(iOS 13.0, OSX 10.15, tvOS 13.0, watchOS 6.0, *)
public struct Text : Equatable {

    /// Creates an instance that displays `content` verbatim.
    @inlinable public init(verbatim content: String)

    /// Creates an instance that displays `content` verbatim.
    public init<S>(_ content: S) where S : StringProtocol

    /// Creates text that displays localized content identified by a key.
    ///
    /// - Parameters:
    ///     - key: The key for a string in the table identified by `tableName`.
    ///     - tableName: The name of the string table to search. If `nil`, uses
    ///       the table in `Localizable.strings`.
    ///     - bundle: The bundle containing the strings file. If `nil`, uses the
    ///       main `Bundle`.
    ///     - comment: Contextual information about this key-value pair.
    public init(_ key: LocalizedStringKey, tableName: String? = nil, bundle: Bundle? = nil, comment: StaticString? = nil)

    /// Returns a Boolean value indicating whether two values are equal.
    ///
    /// Equality is the inverse of inequality. For any values `a` and `b`,
    /// `a == b` implies that `a != b` is `false`.
    ///
    /// - Parameters:
    ///   - lhs: A value to compare.
    ///   - rhs: Another value to compare.
    public static func == (a: Text, b: Text) -> Bool
}
```

## 2. 使用

```
struct ContentView: View {
    var body: some View {
        Text("Hello, World!")
            .font(.title)
            .fontWeight(.light)
            .foregroundColor(Color.green)
            .multilineTextAlignment(.leading)
    }
}
```
