容器按照运行时间的长短可分为两类：服务类容器和工作类容器。

服务类容器通常持续提供服务，需要一直运行，比如 http server，daemon 等。工作类容器则是一次性任务，比如批处理程序，完成后容器就退出。

Kubernetes 的 Deployment、ReplicaSet 和 DaemonSet 都用于管理服务类容器；对于工作类容器，我们用 Job。

# 使用 job

```
apiVersion: batch/v1
kind: Job
metadata:
    name: myjob
spec:
    template:
        metadata:
            name: myjob
        spec:
            contailers:
            - name: hello
              image: busybox
              command: ["echo","hello k8s job"]
            restartPolicy: Never
```

① batch/v1 是当前 Job 的 apiVersion。
② 指明当前资源的类型为 Job。
③ restartPolicy 指定什么情况下需要重启容器。对于 Job，只能设置为 Never 或者 OnFailure。对于其他 controller（比如 Deployment）可以设置为 Always 。

# 并行执行 Job

有时，我们希望能同时运行多个 Pod，提高 Job 的执行效率。这个可以通过 parallelism 设置。

可以通过 completions 设置 Job 成功完成 Pod 的总数

如果不指定 completions 和 parallelism，默认值均为 1。

```
apiVersion: batch/v1
kind: Job
metadata:
    name: myjob
spec:
    completions: 6
    parallelism: 2
    template:
        metadata:
            name: myjob
        spec:
            containers:
            - name: hello
              image: busybox
              command: ["echo","hello k8s job"]
            restartPolicy: OnFailure
```

# 定时执行 Job

Linux 中有 cron 程序定时执行任务，Kubernetes 的 CronJob 提供了类似的功能，可以定时执行 Job。CronJob 配置文件示例如下：

```
apiVersion: batch/v2ahphe2
kind: CronJob
metadata:
    name: myjob
spec:
    schedule: "*/1 * * * *"
    jobTemplate:
        spec:
            template:
                spec:
                    containers:
                    - name: hello
                      image: busybox
                      command: ["echo","hello k8s job"]
                    restartPolicy: OnFailure
```

① batch/v2alpha1 是当前 CronJob 的 apiVersion。
② 指明当前资源的类型为 CronJob。
③ schedule 指定什么时候运行 Job，其格式与 Linux cron 一致。这里 */1 * * * * 的含义是每一分钟启动一次。
④ jobTemplate 定义 Job 的模板，格式与前面 Job 一致