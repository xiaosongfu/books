Helm客户端长期以来一直可以从谷歌云存储的存储桶中下载，该存储桶位于 `https://kubernets-helm.storage.googleapis.com`。在Kubernetes成为CNCF的一部分之前，Helm就已经使用了谷歌云中的这个桶。这个桶上的第一个发行版是Helm v2.0.0-alpha.5！

Helm项目现在将客户端下载发布到 `https://get.helm.sh`。所有Helm版本从Helm v2.0-alpha，以及最新的Helm 3 alpha.1版本可供下载。展望未来，这是唯一一个你能找到Helm 3的地方；它们没有被上传到旧的存储桶中。Helm 3.0.0-alpha.1现已可供下载。

## 组成部分

get.helm.sh有三个主要组件：
* Azure Blob存储
* Azure CDN
* get.helm.sh域名

在我们的发布管道中，Helm 2和Helm 3的下载被上传到Azure Blob存储中（为了向后兼容，Helm 2的下载也被上传到谷歌云存储中）。Azure CDN提供该内容，前端是自定义域名。

## 在中国可用性

谷歌云存储在中国是访问不了，Azure CDN 可以使用靠近中国的地点提供内容给中国用户。现在在中国可以下载 Helm。

## 警告：Tiller和Chart的下载

请注意，此更改仅用于Helm客户端下载。Tiller没有从谷歌容器仓库中移出，稳定的和孵化级的Helm chart存储库仍然托管在谷歌云上。
