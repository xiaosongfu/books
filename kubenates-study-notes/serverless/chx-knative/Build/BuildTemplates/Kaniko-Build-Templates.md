## 1. 

它基于谷歌的Kaniko, Kaniko是在容器中构建容器镜像的工具，不依赖于正在运行的Docker守护进程。

但是需要提供 Dockerfile 文件。

```
kubectl apply -f https://raw.githubusercontent.com/knative/build-templates/master/kaniko/kaniko.yaml
```

## 2. 

使用 build template 构建容器镜像就更简单了，只需要提供代码的地址和镜像名字即可，比如下面是使用 Google kaniko 模板构建 github 源码的 yaml 文件（需要在代码根目录存在 Dockerfile 文件）：

来自：[Google 开源的 Serverless 平台 knative 简介](https://mp.weixin.qq.com/s/-gW2IeOJDdEUXjiaZ1gafw)