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