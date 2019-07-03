https://kubeless.io/docs/runtimes/

---

使用如下命令查看当前支持的 runtime：

```
$ kubeless get-server-config
INFO[0000] Current Server Config:
INFO[0000] Supported Runtimes are: python2.7, python3.4, python3.6, nodejs6, nodejs8, ruby2.3, ruby2.4, ruby2.5, php7.2, go1.10, dotnetcore2.0, java1.8, ballerina0.981.0
```

在部署函数的时候通过 `--runtime` 指定运行时，如：`--runtime python2.7`，controller 会自动下载对应的运行时。
