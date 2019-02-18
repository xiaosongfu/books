参考官网文档：https://kubernetes.io/docs/concepts/services-networking/ingress/

# Ingress rules

每个 http 规则都包含以下信息：
* 可选主机。在此示例中，未指定主机，因此规则适用于通过IP地址指定的所有入站HTTP流量。如果提供了主机（例如，foo.bar.com），则规则适用于该主机。
* 路径列表（例如，/testpath），每个路径都有一个使用serviceName和servicePort定义的关联后端。在负载均衡器将流量引导到引用的服务之前，主机和路径都必须与传入请求的内容匹配。
* 后端是服务文档中描述的服务和端口名称的组合。对Ingress匹配主机和规则路径的HTTP（和HTTPS）请求将被发送到列出的后端。

默认后端通常在 Ingress controller 中配置，该控制器将为与规范中的路径不匹配的任何请求提供服务。