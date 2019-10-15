安装 husky:

```
npm install -D husky
```

配置 precommit:

```
"scripts": {
    "precommit": "npm run lint"
}
```

这样就可以实现在 commit 之前执行 `npm run lint` 命令，lint 不通过时不能 commit。
