1. ThemeData 有5个构造方法
2. ThemeData 常用的属性
3. final Brightness brightness
4. final Color primaryColor

---

## ThemeData 有5个构造方法

```
factory ThemeData({...})

const ThemeData.raw({...})

factory ThemeData.light() => ThemeData(brightness: Brightness.light);

factory ThemeData.dark() => ThemeData(brightness: Brightness.dark);

factory ThemeData.fallback() => ThemeData.light();
```

## ThemeData 常用的属性

```
final Brightness brightness;

/// The background color for major parts of the app (toolbars, tab bars, etc)
final Color primaryColor;

/// The brightness of the [primaryColor]. Used to determine the color of text and
/// icons placed on top of the primary color (e.g. toolbar text).
final Brightness primaryColorBrightness;

/// A lighter version of the [primaryColor].
final Color primaryColorLight;

/// A darker version of the [primaryColor].
final Color primaryColorDark;
```

```
/// The foreground color for widgets (knobs, text, overscroll edge effect, etc).
final Color accentColor;

/// The brightness of the [accentColor]. Used to determine the color of text
/// and icons placed on top of the accent color (e.g. the icons on a floating
/// action button).
final Brightness accentColorBrightness;
```

## final Brightness brightness

该属性定制 App 的亮度主题。

Brightness 是一个枚举类型，有 dark 和 light 两个成员。

```
/// Describes the contrast of a theme or color palette.
enum Brightness {
  /// The color is dark and will require a light text color to achieve readable
  /// contrast.
  ///
  /// For example, the color might be dark grey, requiring white text.
  dark,

  /// The color is light and will require a dark text color to achieve readable
  /// contrast.
  ///
  /// For example, the color might be bright white, requiring black text.
  light,
}
```

使用 dark 主题需要一个亮色的文本颜色使得文本可读。

使用 light 主题需要一个暗色的文本颜色使得文本可读。

默认的主题 brightness 属性为 light：`brightness ??= Brightness.light;`

使用构造方法 或 可以直接使用暗色和亮色主题：

```
factory ThemeData.light() => ThemeData(brightness: Brightness.light);
factory ThemeData.dark() => ThemeData(brightness: Brightness.dark);
factory ThemeData.fallback() => ThemeData.light();
```

## final Color primaryColor

