如果一个目录下存在一个 tsconfig.json 文件，那么它意味着这个目录是TypeScript项目的根目录。

tsconfig.json 文件中指定了用来编译这个项目的根文件和编译选项。


## noEmitOnError

TypeScript 编译的时候即使报错了，还是会生成编译结果，我们仍然可以使用这个编译之后的文件。
如果要在报错的时候终止 js 文件的生成，可以在 tsconfig.json 中配置 noEmitOnError 即可