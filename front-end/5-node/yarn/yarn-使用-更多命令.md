来源：https://www.yarnpkg.com/zh-Hans/docs/cli/

---

## yarn <script> [<args>]

执行 `yarn <script> [<args>]` 将会执行用户自定义脚本

## yarn list

`yarn list` 命令列出当前项目的所有依赖

`yarn list --depth=0` 命令限制依赖的深度

```
$ yarn list --depth=0
yarn list v1.17.3
├─ @babel/code-frame@7.5.5
├─ @babel/core@7.5.5
├─ yargs@12.0.5
└─ yorkie@2.0.0
✨  Done in 0.88s.
```

## yarn global add [package]

同 `npm install [package] --global`
