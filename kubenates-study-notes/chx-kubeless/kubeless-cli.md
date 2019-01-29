1. kubeless -h
2. kubeless function 命令



### 1. kubeless -h
```
uxiaosongdeMac-mini:~ fuxiaosong$ kubeless
Serverless framework for Kubernetes

Usage:
  kubeless [command]

Available Commands:
  autoscale         manage autoscale to function on Kubeless
  completion        Output shell completion code for the specified shell.
  function          function specific operations
  get-server-config Print the current configuration of the controller
  help              Help about any command
  topic             manage message topics in Kubeless
  trigger           trigger specific operations
  version           Print the version of Kubeless

Flags:
  -h, --help   help for kubeless

Use "kubeless [command] --help" for more information about a command.
fuxiaosongdeMac-mini:~ fuxiaosong$
```


### 2. kubeless function 命令

```
fuxiaosongdeMac-mini:~ fuxiaosong$ kubeless help function
function command allows user to list, deploy, edit, delete functions running on Kubeless

Usage:
  kubeless function SUBCOMMAND [flags]
  kubeless function [command]

Available Commands:
  call        call function from cli
  delete      delete a function from Kubeless
  deploy      deploy a function to Kubeless
  describe    describe a function deployed to Kubeless
  list        list all functions deployed to Kubeless
  logs        get logs from a running function
  top         display function metrics
  update      update a function on Kubeless

Flags:
  -h, --help   help for function

Use "kubeless function [command] --help" for more information about a command.
fuxiaosongdeMac-mini:~ fuxiaosong$
```

```
fuxiaosongs-MacBook-Air:~ fuxiaosong$ kubeless function deploy --help
deploy a function to Kubeless

Usage:
  kubeless function deploy <function_name> FLAG [flags]

Flags:
      --cpu string                 Request amount of cpu for the function, which is measured in units of cores. Please see the following link for more information: https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/#meaning-of-cpu
  -d, --dependencies string        Specify a file containing list of dependencies for the function
      --dryrun                     Output JSON manifest of the function without creating it
  -e, --env strings                Specify environment variable of the function. Both separator ':' and '=' are allowed. For example: --env foo1=bar1,foo2:bar2
  -f, --from-file string           Specify code file or a URL to the code file
      --handler string             Specify handler
      --headless                   Deploy http-based function without a single service IP and load balancing support from Kubernetes. See: https://kubernetes.io/docs/concepts/services-networking/service/#headless-services
  -h, --help                       help for deploy
      --image-pull-policy string   Image pull policy (default "Always")
  -l, --label strings              Specify labels of the function. Both separator ':' and '=' are allowed. For example: --label foo1=bar1,foo2:bar2
      --memory string              Request amount of memory, which is measured in bytes, for the function. It is expressed as a plain integer or a fixed-point interger with one of these suffies: E, P, T, G, M, K, Ei, Pi, Ti, Gi, Mi, Ki
  -n, --namespace string           Specify namespace for the function
  -o, --output string              Output format (default "yaml")
      --port int32                 Deploy http-based function with a custom port (default 8080)
  -r, --runtime string             Specify runtime
      --runtime-image string       Custom runtime image
      --schedule string            Specify schedule in cron format for scheduled function
      --secrets strings            Specify Secrets to be mounted to the functions container. For example: --secrets mySecret
      --timeout string             Maximum timeout (in seconds) for the function to complete its execution (default "180")
fuxiaosongs-MacBook-Air:~ fuxiaosong$
```