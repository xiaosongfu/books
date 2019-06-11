### http.PostForm

```
func PostForm(url string, data url.Values) (resp *Response, err error) {
	return DefaultClient.PostForm(url, data)
}
```

```
func (c *Client) PostForm(url string, data url.Values) (resp *Response, err error) {
	return c.Post(url, "application/x-www-form-urlencoded", strings.NewReader(data.Encode()))
}
```

```
func (c *Client) Post(url, contentType string, body io.Reader) (resp *Response, err error) {
	req, err := NewRequest("POST", url, body)
	if err != nil {
		return nil, err
	}
	req.Header.Set("Content-Type", contentType)
	return c.Do(req)
}
```

```
func Post(url, contentType string, body io.Reader) (resp *Response, err error) {
	return DefaultClient.Post(url, contentType, body)
}
```

使用 PATCH 等方法请求时，需要设置：`request.Header.Set("Content-Type", "application/x-www-form-urlencoded")` 才能将参数进行编码到 request body 里面，服务器端才能通过 PostForm、Post 等方式获取到值，不然是取不到值得。


