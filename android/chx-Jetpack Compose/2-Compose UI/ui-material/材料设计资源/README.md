
`androidx.ui.material.MaterialTheme`

---

## colors

```
val color = MaterialTheme.colors()

color.primary
color.secondary
color.error
......
```

## 字体

```
val typography = MaterialTheme.typography()

typography.h1
typography.h2
typography.h3
typography.h4
typography.h5
typography.h6
typography.subtitle1
typography.subtitle2
typography.body1
typography.body2
typography.button
typography.caption
typography.overline
```

## shapes

```
```

## emphasisLevels

```
```


---

h1 h2 等等这些都是 Typography 的属性，是一个 TextStyle 实例。

```
data class Typography(
    val h1: TextStyle = TextStyle(
        fontFamily = FontFamily.Default,
        fontWeight = FontWeight.W100,
        fontSize = 96.sp),
    val h2: TextStyle = TextStyle(
        fontFamily = FontFamily.Default,
        fontWeight = FontWeight.W100,
        fontSize = 60.sp),
    val h3: TextStyle = TextStyle(
        fontFamily = FontFamily.Default,
        fontWeight = FontWeight.Normal,
        fontSize = 48.sp),
    val h4: TextStyle = TextStyle(
        fontFamily = FontFamily.Default,
        fontWeight = FontWeight.Normal,
        fontSize = 34.sp),
    val h5: TextStyle = TextStyle(
        fontFamily = FontFamily.Default,
        fontWeight = FontWeight.Normal,
        fontSize = 24.sp),
    val h6: TextStyle = TextStyle(
        fontFamily = FontFamily.Default,
        fontWeight = FontWeight.W500,
        fontSize = 20.sp),
    ........
)
```
