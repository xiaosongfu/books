
* largeTitle
* title
* headline
* subheadline
* body
* callout
* footnote
* caption

```
available(iOS 13.0, OSX 10.15, tvOS 13.0, watchOS 6.0, *)
extension Font {

    /// Create a font with the large title text style.
    public static let largeTitle: Font

    /// Create a font with the title text style.
    public static let title: Font

    /// Create a font with the headline text style.
    public static var headline: Font

    /// Create a font with the subheadline text style.
    public static var subheadline: Font

    /// Create a font with the body text style.
    public static var body: Font

    /// Create a font with the callout text style.
    public static var callout: Font

    /// Create a font with the footnote text style.
    public static var footnote: Font

    /// Create a font with the caption text style.
    public static var caption: Font

    /// Create a system font with the given `style`.
    public static func system(_ style: Font.TextStyle, design: Font.Design = .default) -> Font

    /// Create a system font with the given `size`, `weight` and `design`.
    public static func system(size: CGFloat, weight: Font.Weight = .regular, design: Font.Design = .default) -> Font

    /// Create a custom font with the given `name` and `size`.
    public static func custom(_ name: String, size: CGFloat) -> Font
}
```
