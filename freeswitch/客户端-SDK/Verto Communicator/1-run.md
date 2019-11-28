摘自：https://freeswitch.org/confluence/display/FREESWITCH/Verto+Communicator

---

We'll use NodeJS based tools to be able to quickly run tests, lint, build and serve Verto Communicator.

## 1. 安装工具

```
npm install -g grunt grunt-cli bower
```

## 2. 构建

```
cd verto_communicator
npm install
bower install

# 构建
grunt build
# 开发
grunt serve
```


