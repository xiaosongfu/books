参考：https://cli.vuejs.org/zh/guide/deployment.html#docker-nginx

---

在 Docker 容器中使用 Nginx 部署你的应用。

1. 安装 Docker

2. 在项目根目录创建 Dockerfile 文件

```
FROM node:10
COPY ./ /app
WORKDIR /app
RUN npm install && npm run build

FROM nginx
RUN mkdir /app
COPY --from=0 /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf
```

3. 在项目根目录创建 .dockerignore 文件

设置 .dockerignore 文件能防止 node_modules 和其他中间构建产物被复制到镜像中导致构建问题。

```
**/node_modules
**/dist
```

4. 在项目根目录创建 nginx.conf 文件

Nginx 是一个能在 Docker 容器中运行的 HTTP(s) 服务器。它使用配置文件决定如何提供内容、要监听的端口等。参阅 Nginx 设置文档 以了解所有可能的设置选项。

下面是一个简单的 Nginx 设置文件，它会在 80 端口上提供你的 Vue 项目。页面未找到 / 404 错误使用的是 index.html，这让我们可以使用基于 pushState() 的路由。

```
user  nginx;
worker_processes  1;
error_log  /var/log/nginx/error.log warn;
pid        /var/run/nginx.pid;
events {
  worker_connections  1024;
}
http {
  include       /etc/nginx/mime.types;
  default_type  application/octet-stream;
  log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                    '$status $body_bytes_sent "$http_referer" '
                    '"$http_user_agent" "$http_x_forwarded_for"';
  access_log  /var/log/nginx/access.log  main;
  sendfile        on;
  keepalive_timeout  65;
  server {
    listen       80;
    server_name  localhost;
    location / {
      root   /app;
      index  index.html;
      try_files $uri $uri/ /index.html;
    }
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
      root   /usr/share/nginx/html;
    }
  }
}
```

5. 构建你的 Docker 镜像

```
docker build . -t my-app
# Sending build context to Docker daemon  884.7kB
# ...
# Successfully built 4b00e5ee82ae
# Successfully tagged my-app:latest
```

6. 运行你的 Docker 镜像

这个例子基于官方 Nginx 镜像，因此已经设置了日志重定向并关闭了自我守护进程。它也提供了其他有利于 Nginx 在 Docker 容器中运行的默认设置。更多信息参阅 Nginx Docker 仓库。

```
docker run -d -p 8080:80 my-app
curl localhost:8080
# <!DOCTYPE html><html lang=en>...</html>
```
