```
$ kubeless function deploy hello --runtime python2.7 \
                                --from-file test.py \
                                --handler test.hello

$ kubeless function list

$ kubeless function call hello --data 'Hello world!'

$ kubeless function delete hello

$ kubeless get-server-config

```
