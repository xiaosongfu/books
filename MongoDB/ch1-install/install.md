```
docker run --name mymongo -d -v /mymongo/data:/data/db -p 27017:27017 mongo:4
```

默认使用 27017 端口