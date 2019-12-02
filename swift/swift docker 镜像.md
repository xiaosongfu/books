https://github.com/apple/swift-docker

https://hub.docker.com/_/swift

---

## Usage

Pull the Docker image from Docker Hub:

```
docker pull swift
```

Create a container from the image and run it:

```
docker run -it swift /bin/bash
```

If you want to run the Swift REPL you will need to run the container with additional privileges:

```
docker run --security-opt seccomp=unconfined -it swift
```
