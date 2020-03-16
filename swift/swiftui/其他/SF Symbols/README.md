https://developer.apple.com/design/human-interface-guidelines/sf-symbols/overview/

---

SF Symbols 是 iOS13 中新增的东西，它是苹果官方提供的一大批图像，可以在 App 中直接使用。

他们是以矢量图形式提供，这意味着可以任意缩放。

有9种 weight：
* Ultralight
* Thin
* Light
* Regular
* Medium
* Semibold
* Bold
* Heavy
* Black

有3种 scale：
* Small
* Medium
* Large

---

* System Symbol
* Custom Symbol

`Image(systemName:)` : 使用系统内置的 SF Symbols
`Image(named:)` : 使用自定义的 SF Symbols

指定 scale：

```
let configuration = Image.SymbolConfiguration(scale: .large)
imageView.preferredSymbolConfiguration = configuration
```

```
let configuration = Image.SymbolConfiguration(pointSize: 34.0f, weight: .bold)
let largeImage = imageView.withConfiguration(configuration) // 将图标放大
```

let headlineConfig = Image.SymbolConfiguration(pointSize: 23.0f, weight: .medium)

let annotationConfig = Image.SymbolConfigration(pointSize: 17.0f, scale: .small)

```
let heartImage = Image(systemName: "heart.fill")
let redHeartImage = heartImage.withTintColor(.redcolor)
```

