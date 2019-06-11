https://github.com/sohlich/elogrus


```
client, err := elastic.NewClient(elastic.SetURL("http://localhost:9200"))
if err != nil {
    log.Panic(err)
}
hook, err := elogrus.NewElasticHook(client, "localhost", log.DebugLevel, "mylog")
if err != nil {
    log.Panic(err)
}
log.AddHook(hook)
```

Asynchronous hook

```
elogrus.NewAsyncElasticHook(client, "localhost", logrus.DebugLevel, "mylog")
```