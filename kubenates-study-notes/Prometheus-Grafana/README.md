OpenMetrics


---

metrics 指标
label 标签

如：`grpc_server_started_total{grpc_method="PingList",grpc_type="server_stream"} 1`


---

prometheus server 爬取并储存时序数据

client libraries 

push gateway

exporters 

alertmanager 处理警报

---

job 和 instance

* job：目标所属的已配置作业名称。
* instance：<host>:<port>已刮取的目标URL 的一部分。

---

https://github.com/prometheus/prometheus
https://github.com/prometheus/alertmanager

wget https://github.com/prometheus/prometheus/releases/download/v2.9.1/prometheus-2.9.1.linux-amd64.tar.gz

wget https://github.com/prometheus/alertmanager/releases/download/v0.16.2/alertmanager-0.16.2.linux-amd64.tar.gz



https://github.com/prometheus/pushgateway
https://github.com/prometheus/node_exporter

https://github.com/prometheus/blackbox_exporter
https://github.com/prometheus/consul_exporter
https://github.com/prometheus/graphite_exporter
https://github.com/prometheus/haproxy_exporter
https://github.com/prometheus/memcached_exporter
https://github.com/prometheus/mysqld_exporter
https://github.com/prometheus/statsd_exporter

https://github.com/prometheus/snmp_exporter


https://github.com/prometheus/client_golang
https://github.com/prometheus/client_java
https://github.com/pingcap/rust-prometheus

---

通过服务发现或静态配置发现目标

---

expression language documentation: https://prometheus.io/docs/prometheus/latest/querying/basics/