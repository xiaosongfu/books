## 安装

```
$ go get github.com/grafana/loki/cmd/logcli
```

## 使用

```
$ export GRAFANA_ADDR=https://logs-us-west1.grafana.net
$ export GRAFANA_USERNAME=<username>
$ export GRAFANA_PASSWORD=<password>
```

```
$ logcli labels job
https://logs-dev-ops-tools1.grafana.net/api/prom/label/job/values
cortex-ops/consul
cortex-ops/cortex-gw
...
```

```
$ logcli query '{job="cortex-ops/consul"}'
https://logs-dev-ops-tools1.grafana.net/api/prom/query?query=%7Bjob%3D%22cortex-ops%2Fconsul%22%7D&limit=30&start=1529928228&end=1529931828&direction=backward&regexp=
Common labels: {job="cortex-ops/consul", namespace="cortex-ops"}
2018-06-25T12:52:09Z {instance="consul-8576459955-pl75w"} 2018/06/25 12:52:09 [INFO] raft: Snapshot to 475409 complete
2018-06-25T12:52:09Z {instance="consul-8576459955-pl75w"} 2018/06/25 12:52:09 [INFO] raft: Compacting logs from 456973 to 465169
```
