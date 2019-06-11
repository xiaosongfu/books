## 	如果需要上传文件，表单数据都保存在http的正文部分

`multipart/form-data`

## 常规的 http 请求以 post 方式传递参数的时候，需要：

`application/x-www-form-urlencoded`

## 如果服务器时需要 json 形式的参数，则：

`application/json`

```
req, err := http.NewRequest(http.MethodPut, fmt.Sprintf("%s%s/%s", *address, "/v1/todo", created.ID), strings.NewReader(fmt.Sprintf(`
		{
			"api":"v1",
			"toDo": {
				"title":"title (%s)",
				"description":"description (%s) + updated",
				"reminder":"%s"
			}
		}
	`, prefix, prefix, prefix)))
	req.Header.Set("Content-Type", "application/json")

	resp, err = http.DefaultClient.Do(req)
	if err != nil {
		log.Fatalf("failed to call Update method: %v", err)
	}

	bodyBytes, err = ioutil.ReadAll(resp.Body)
	resp.Body.Close()
```
