https://github.com/google/go-cmp

This package is intended to be a more powerful and safer alternative to reflect.DeepEqual for comparing whether two values are semantically equal.


```
diff := cmp.Diff(tc.want, got)
if diff != "" {
    t.Fatalf(diff)
}
```

