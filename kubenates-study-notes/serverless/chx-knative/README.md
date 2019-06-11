Knative 中的服务不了解或不关心事件和请求是如何获取的。它可以是来自入口网关的 HTTP 请求，也可以是从通道发送来的事件。无论何种方式，我们的服务仅接收 HTTP 请求。这是 Knative 中一个重要的解耦，它确保我们将代码编写到我们的架构中，而不是在于底层。


# kubectl get 可以获取的资源

kubectl get revisions
kubectl get configurations
kubectl get ksvc

kubectl get buildtemplates

## 事件系统

Event Source 支持的有：
* GCP PubSub
* Kubernetes Events
* GitHub
* Websockets

Channel 支持的有：
* in-memory-channel
* GCP PubSub
* Kafka
* NATS

# 自动伸缩需要注入的 pod

```
...
Containers:
  user-container:
    Container ID:  docker://f02dc...
    Image:         index.docker.io/gswk/knative-helloworld...
...
  queue-proxy: 
    Container ID:  docker://1afcb...
    Image:         gcr.io/knative-releases/github.com/knative...
...
```

# CRD 自定义资源定义

## Serving

serving.knative.dev/v1alpha1 --> Configuration Route Service


## build

build.knative.dev/v1alpha1 --> Build BuildTemplate

```
apiVersion: build.knative.dev/v1alpha1
kind: Build
metadata:
  name: kaniko-build
spec:
  serviceAccountName: build-bot
  source:
    git:
      url: https://github.com/my-user/my-repo
      revision: master
  template:
    name: kaniko
    arguments:
    - name: IMAGE
      value: us.gcr.io/my-project/my-app
```

```
apiVersion: build.knative.dev/v1alpha1
kind: BuildTemplate
metadata:
  name: kaniko
spec:
  parameters:
  - name: IMAGE
    description: The name of the image to push
  - name: DOCKERFILE
    description: Path to the Dockerfile to build.
    default: /workspace/Dockerfile

  steps:
  - name: build-and-push
    image: gcr.io/kaniko-project/executor
    args:
    - --dockerfile=${DOCKERFILE}
    - --destination=${IMAGE}
    env:
    - name: DOCKER_CONFIG
      value: /builder/home/.docker
```

## Eventing

eventing.knative.dev/v1alpha1  --> Channel ClusterChannelProvisioner Subscription

sources.eventing.knative.dev/v1alpha1  --> KubernetesEventSource