## blank.yml

https://github.com/actions/starter-workflows/blob/master/ci/blank.yml

```
name: CI

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v1
    - name: Run a one-line script
      run: echo Hello, world!
    - name: Run a multi-line script
      run: |
        echo Add other actions to build,
        echo test, and deploy your project.
```

## 


```

```

## 


```

```

## go.yml

https://github.com/actions/starter-workflows/blob/master/ci/go.yml

```
name: Go

on: [push]

jobs:

  build:
    name: Build
    runs-on: ubuntu-latest
    steps:

    - name: Set up Go 1.13
      uses: actions/setup-go@v1
      with:
        go-version: 1.13
      id: go

    - name: Check out code into the Go module directory
      uses: actions/checkout@v1

    - name: Get dependencies
      run: |
        go get -v -t -d ./...
        if [ -f Gopkg.toml ]; then
            curl https://raw.githubusercontent.com/golang/dep/master/install.sh | sh
            dep ensure
        fi
    - name: Build
      run: go build -v .
```

## rust.yml

https://github.com/actions/starter-workflows/blob/master/ci/rust.yml

```
name: Rust

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v1
    - name: Build
      run: cargo build --verbose
    - name: Run tests
      run: cargo test --verbose
```

## android.yml

https://github.com/actions/starter-workflows/blob/master/ci/android.yml

```
name: Android CI

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v1
    - name: set up JDK 1.8
      uses: actions/setup-java@v1
      with:
        java-version: 1.8
    - name: Build with Gradle
      run: ./gradlew build
```
