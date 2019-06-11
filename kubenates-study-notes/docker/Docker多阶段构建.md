## golang 的多阶段构建

```
FROM golang:1.12 as build
WORKDIR /go/src/app
COPY . .
ENV GO111MODULE on
RUN go build -v -o /app .

# Now copy it into our base image.
FROM gcr.io/distroless/base
COPY --from=build /app /app
CMD ["/app"]
```


## xxx

```
FROM node:8.12.0-alpine AS build
COPY . /build
WORKDIR /build
RUN npm i
RUN node clean.js
RUN ./node_modules/mustache/bin/mustache upcoming_events.json index.mustache > index.html
RUN ./node_modules/mustache/bin/mustache past_events.json past.mustache > past.html

FROM nginx:1.14-alpine
COPY --from=build /build/*.html /usr/share/nginx/html/
COPY events.json /usr/share/nginx/html/
COPY css /usr/share/nginx/html/css
COPY js /usr/share/nginx/html/js
COPY img /usr/share/nginx/html/img
```

参考：https://mp.weixin.qq.com/s/UWswp2RTMpQ6zxwFFc9Y3w