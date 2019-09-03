https://yq.aliyun.com/articles/716964

> 判断服务是否启动成功：

`echo mntr |nc mse-f3288e50-p.zk.mse.aliyuncs.com 2181`

> 一个简单的 dubbo 提供者和消费者：

```
public class DubboProvider {
    private final static String ZOOKEEPER_URL = "mse-f3288e50-p.zk.mse.aliyuncs.com";
    public static void main(String[] args) throws InterruptedException {
        ServiceConfig<GreetingService> service = new ServiceConfig<>();
        service.setApplication(new ApplicationConfig("first-dubbo-provider"));
        service.setRegistry(new RegistryConfig("zookeeper://" + ZOOKEEPER_URL + ":2181"));
        service.setInterface(GreetingService.class);
        service.setRef(new GreetingsServiceImpl());
        service.export();
        System.out.println("======dubbo service started");
        new CountDownLatch(1).await();
    }
}

public class DubboConsumer {
    private final static String ZOOKEEPER_URL = "mse-f3288e50-p.zk.mse.aliyuncs.com";
    public static void main(String[] args) throws InterruptedException {
        ReferenceConfig<GreetingService> reference = new ReferenceConfig<>();
        reference.setApplication(new ApplicationConfig("first-dubbo-consumer"));
        reference.setRegistry(new RegistryConfig("zookeeper://" + ZOOKEEPER_URL + ":2181"));
        reference.setInterface(GreetingService.class);
        GreetingService service = reference.get();
        String message = service.sayHello("dubbo");
        System.out.println("======"+message);
        Thread.sleep(Integer.MAX_VALUE);
    }
}
```
