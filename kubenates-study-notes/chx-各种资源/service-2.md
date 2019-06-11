## ExternalName

将 spec.type 设为 ExternalName，并设置 spec.externalName: "xx.com" 来访问外部服务。该服务不会用 clusterIP，只是设置了一个 CNAME，访问该服务的请求会通过 CNAME 直接访问 xx.com 不会经过服务的代理。

## headless 服务

spec.clusterIP 设为 None ，该访问就会成为一个 headless 服务，使用 DNS 查询该服务时会返回所有后端 pod 的 ip 地址。