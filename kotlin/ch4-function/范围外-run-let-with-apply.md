## run

```
val str = "a"
val result = str.run {
    // this = "a"
    // it = not available
    1 // Block return value
    // result = 1
}
```

## let

```
val str = "a"
val result = str.let {
    // this = this@MyClass
    // it = "a"
    2 // Block return value
    // result = 2
}
```

## with

```
val str = "a"
val result = with(str) {
    // this = "a"
    // it = not available
    2 // Block return value
    // result = 3
}
```

## apply

```
val str = "a"
val result = str.apply {
    // this = "a"
    // it = not available
    4 // Block return value unused
    // result = "a"
}
```
