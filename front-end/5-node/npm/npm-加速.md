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

- 设置 Node-Sass 的镜像地址
npm config set sass_binary_site https://repo.huaweicloud.com/node-sass

- 设置浏览器引擎驱动镜像地址
npm config set phantomjs_cdnurl https://repo.huaweicloud.com/phantomjs
npm config set chromedriver_cdnurl https://repo.huaweicloud.com/chromedriver
npm config set operadriver_cdnurl https://repo.huaweicloud.com/operadriver

- 设置 Electron 的镜像地址
npm config set electron_mirror https://repo.huaweicloud.com/electron/

- 设置 Python 的镜像地址
npm config set python_mirror https://repo.huaweicloud.com/python

---

```
npm config set registry https://registry.npm.taobao.org
npm config set disturl https://npm.taobao.org/dist
npm config set puppeteer_download_host https://npm.taobao.org/mirrors
```

---

> 安装 node-sass 失败

解决方法：先设置 node-sass 的镜像地址，然后执行 `npm rebuild node-sass`
