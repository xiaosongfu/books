参考：https://github.com/golang/go/wiki/gopls

`gopls` is currently under active development by the Go team. The code is in the x/tools repository, in [golang.org/x/tools/internal/lsp](https://golang.org/x/tools/internal/lsp) and [golang.org/x/tools/cmd/gopls](https://golang.org/x/tools/cmd/gopls). 

---

## 安装 gopls

我们需要安装 gopls 才能使用。

运行命令：`go get -u golang.org/x/tools/cmd/gopls`

gopls also runs both gofmt and goimports.

gopls 也支持 gofmt 和 goimports。

## 配置 Visual Studio Code

安装好 VSCode 后，首先需要安装 VSCode-Go 插件，然后完成如下配置：

```
"go.useLanguageServer": true,
"go.alternateTools": {
     "go-langserver": "gopls"
},
"go.languageServerExperimentalFeatures": {
    "format": true,
    "autoComplete": true,
    "goToDefinition": true,
    "hover": true,
    "signatureHelp": true,
    "goToTypeDefinition": true,
},
"go.buildOnSave": "off",
"go.vetOnSave": "off",
"editor.formatOnSave": true,
"editor.codeActionsOnSave": {
    "source.organizeImports": true,
},
```