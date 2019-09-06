## 1. 新建 maven 项目并添加依赖

添加依赖：

```
<properties>
    <dubbo.version>2.7.3</dubbo.version>
</properties>
    
<dependencies>
    <dependency>
        <groupId>org.apache.dubbo</groupId>
        <artifactId>dubbo</artifactId>
        <version>${dubbo.version}</version>
    </dependency>
    <dependency>
        <groupId>org.apache.dubbo</groupId>
        <artifactId>dubbo-dependencies-zookeeper</artifactId>
        <version>${dubbo.version}</version>
        <type>pom</type>
    </dependency>
</dependencies>
```

## 2. 定义接口规范

```
public interface GreetingService {
    String sayHello(String name);
}
```

## 3. 服务提供者实现规范并暴露服务

实现规范：

```
public class GreetingsServiceImpl implements GreetingsService {
    @Override
    public String sayHi(String name) {
        return "hi, " + name;
    }
}
```

暴露服务：

```
public static void main(String[] args) throws Exception {
    ServiceConfig<GreetingsService> service = new ServiceConfig<>();
    service.setApplication(new ApplicationConfig("dubbo-provider"));
    service.setRegistry(new RegistryConfig("zookeeper://localhost:2181"));
    service.setInterface(GreetingsService.class);
    service.setRef(new GreetingsServiceImpl());
    service.export();

    System.out.println("dubbo service started");
    new CountDownLatch(1).await();
}
```

## 4. 服务消费者调用服务

调用服务：

```
public static void main(String[] args) {
    ReferenceConfig<GreetingsService> reference = new ReferenceConfig<>();
    reference.setApplication(new ApplicationConfig("dubbo-consumer"));
    reference.setRegistry(new RegistryConfig("zookeeper://localhost:2181"));
    reference.setInterface(GreetingsService.class);
    GreetingsService service = reference.get();
    String message = service.sayHi("dubbo");
    System.out.println(message);
}
```
