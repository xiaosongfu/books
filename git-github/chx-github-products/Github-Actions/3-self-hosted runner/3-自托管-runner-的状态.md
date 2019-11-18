参考：https://help.github.com/cn/actions/automating-your-workflow-with-github-actions/checking-the-status-of-self-hosted-runners

---

可以在仓库的 `Settings -> Actions -> Self-hosted runners` 中查看自托管 runner 的状态：

或者在自托管 runner 服务器上面查看: 

```

```

都有以下这些状态：

* `Idle`: The runner is connected to GitHub and is ready to execute jobs.
* `Active`: The runner is currently executing a job.
* `Offline`: The runner is not connected to GitHub. This could be because the machine is offline,the self-hosted runner application is not running on the machine, or the self-hosted runner application cannot communicate with GitHub.
