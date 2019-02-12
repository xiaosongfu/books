# 搭建自己的 Helm Chart Repository

https://github.com/helm/chartmuseum

ChartMuseum is an open-source **Helm Chart Repository** server written in Go (Golang), with support for cloud storage backends, including Google Cloud Storage, Amazon S3, Microsoft Azure Blob Storage, Alibaba Cloud OSS Storage, Openstack Object Storage, Oracle Cloud Infrastructure Object Storage, and Baidu Cloud BOS Storage.

---

### 1. API

##### Helm Chart Repository
* `GET /index.yaml` - retrieved when you run helm repo add chartmuseum http://localhost:8080/
* `GET /charts/mychart-0.1.0.tgz` - retrieved when you run helm install chartmuseum/mychart
* `GET /charts/mychart-0.1.0.tgz.prov` - retrieved when you run helm install with the --verify flag
##### Chart Manipulation
* `POST /api/charts` - upload a new chart version
* `POST /api/prov` - upload a new provenance file
* `DELETE /api/charts/<name>/<version>` - delete a chart version (and corresponding provenance file)
* `GET /api/charts` - list all charts
* `GET /api/charts/<name>` - list all versions of a chart
* `GET /api/charts/<name>/<version>` - describe a chart version
##### Server Info
* `GET /` - HTML welcome page
* `GET /health` - returns 200 OK


### 2. 然后安装

参考 https://github.com/helm/chartmuseum/README.md

##### 2.1 通过命令行

Using with local filesystem storage

> Make sure you have read-write access to `./chartstorage` (will create if doesn't exist on first upload)

```
chartmuseum --debug --port=8080 \
  --storage="local" \
  --storage-local-rootdir="./chartstorage"
```

##### 2.2 通过 docker

Example usage (local storage):

```
docker run --rm -it \
  -p 8080:8080 \
  -e DEBUG=1 \
  -e STORAGE=local \
  -e STORAGE_LOCAL_ROOTDIR=/charts \
  -v $(pwd)/charts:/charts \
  chartmuseum/chartmuseum:latest
```

Example usage (S3):

```
docker run --rm -it \
  -p 8080:8080 \
  -e DEBUG=1 \
  -e STORAGE="amazon" \
  -e STORAGE_AMAZON_BUCKET="my-s3-bucket" \
  -e STORAGE_AMAZON_PREFIX="" \
  -e STORAGE_AMAZON_REGION="us-east-1" \
  -v ~/.aws:/home/chartmuseum/.aws:ro \
  chartmuseum/chartmuseum:latest
  ```
  
##### 2.3 通过 Helm Chart

```
helm install stable/chartmuseum
```