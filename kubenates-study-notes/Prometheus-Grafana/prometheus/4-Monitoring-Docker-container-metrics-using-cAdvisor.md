[MONITORING DOCKER CONTAINER METRICS USING CADVISOR](https://prometheus.io/docs/guides/cadvisor/)

---

先启动一个 redis 容器

然后启动 cAdvisor 容器，它监控主机和所有容器

最后配置 prometheus 从 cAdvisor 刮取 metrics

总结：cAdvisor 监控主机和所有容器，并遵循 prometheus 指标标准暴露指标，prometheus 从 cAdvisor 刮取 metrics

---

```
docker run -d redis
```

```
docker run \
  --volume=/:/rootfs:ro \
  --volume=/var/run:/var/run:rw \
  --volume=/sys:/sys:ro \
  --volume=/var/lib/docker/:/var/lib/docker:ro \
  --volume=/cgroup:/cgroup:ro \
  --privileged=true \
  --publish=8080:8080 \
  --detach=true \
  --name=cadvisor \
  google/cadvisor:latest
```
