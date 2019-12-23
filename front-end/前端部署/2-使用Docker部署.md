## 方式一：node 镜像 + http-server

Dockerfile 配置如下：


```
FROM node:alpine

# 代表生产环境
ENV PROJECT_ENV production

# 许多 package 会根据此环境变量，做出不同的行为
# 另外，在 webpack 中打包也会根据此环境变量做出优化，但是 create-react-app 在打包时会写死该环境变量
ENV NODE_ENV production

WORKDIR /code

ADD . /code

RUN npm install && npm run build && npm install -g http-server

EXPOSE 8080

CMD http-server ./public -p 80
```

前端不再提供静态资源，而是提供 docker 镜像，里面运行一个 http 服务。

跨越问题任然使用 nginx 服务来解决，ningx 配置如下：

```
server {
  listen 80;
  server_name foo.bar;

  location / {
    proxy_pass http://localhost:8080;
  }

  location /api {
    proxy_pass http://api.foo.bar;
  }
}
```

## 方式二：将构建好的静态资源放到 nignx 镜像内


跨越问题和方式一一样，任然使用 nginx 服务来解决，ningx 配置如下：

```
server {
  listen 80;
  server_name foo.bar;

  location / {
    proxy_pass http://localhost:8080;
  }

  location /api {
    proxy_pass http://api.foo.bar;
  }
}
```
