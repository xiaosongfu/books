https://github.com/actions/checkout

----

```
- name: chekcout
  uses: actions/checkout@v1
  with:
    ref: dev
    submodules: recursive
```

ref 可以是一个 ref，如：`ref: refs/heads/release`，或者是某一个分支，如：`ref: dev`

submodules 表示检查 sub modules。
