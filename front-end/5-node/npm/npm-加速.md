1. 查看使用的仓库：

```
$ npm config get registry
https://registry.npmjs.org/
```

2. 使用淘宝镜像源、华为云镜像源

```
npm config set registry https://registry.npm.taobao.org

npm config set registry https://repo.huaweicloud.com/repository/npm/

然后： npm cache clean -f
```



---

华为开源镜像站同时也提供了工具类加速镜像，可以通过如下的命令设置加速地址：

- 设置nodejs工具的镜像地址
npm config set disturl https://repo.huaweicloud.com/nodejs

- 设置Node-Sass的镜像地址
npm config set sass_binary_site https://repo.huaweicloud.com/node-sass

- 设置浏览器引擎驱动镜像地址，如果需要安装Selenium，请 点击此处
npm config set phantomjs_cdnurl https://repo.huaweicloud.com/phantomjs
npm config set chromedriver_cdnurl https://repo.huaweicloud.com/chromedriver
npm config set operadriver_cdnurl https://repo.huaweicloud.com/operadriver

- 设置Electron和Python的镜像地址
npm config set electron_mirror https://repo.huaweicloud.com/electron/
npm config set python_mirror https://repo.huaweicloud.com/python

---
