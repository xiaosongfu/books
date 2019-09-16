
```
npm install less-loader -D
```


```
{
    test: /\.css$/,
    loader: 'style-loader!css-loader!less-loader'
}
```

先用 less-loader 处理 less，得到 css ，然后使用 css-loader 和 style-loader 处理。
