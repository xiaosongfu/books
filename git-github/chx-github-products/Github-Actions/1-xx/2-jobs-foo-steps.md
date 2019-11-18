1. 使用一个脚本：run

```
- name: test
  run: echo hello
```

2. 使用一个仓库：uses

```
- name: test
  uses: actions/setup-java@v1
  with:
    java-vsersion: 1.8
```

actions/setup-java 是来源于一个仓库，完整的地址为：github.com/actions/setup-java。

既然它是一个仓库，那么就可以指定一个分支、tag 或者 commit id。如果不指定，默认为 master 分支。

* actions/setup-java@dev : 指定某一个分支
* actions/setup-java@v1 : 指定某一个 tag
* actions/setup-java@3eds342fs2fd : 指定某一个 commit id

通过使用 with 来给 actions 传递参数，具体可以传递哪些参数由 actions 来决定。
