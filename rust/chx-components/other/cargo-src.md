[Announcing cargo src (beta)](https://www.ncameron.org/blog/announcing-cargo-src-beta/)

https://github.com/rust-dev-tools/cargo-src

---

cargo src 是一个用于探索 Rust 代码的新工具。它是一个本地运行的 Cargo 插件，可让您在 Web 浏览器中导航项目。

它具有语法高亮，跳转到定义，悬停类型，语义搜索，查找用途，查找实现等。

使用 `cargo install cargo-src` 安装，在项目目录中运行：`cargo src --open`。

你需要一个 nightly Rust 工具链。


当 `cargo src` 启动时，它需要检查并索引您的项目。如果它是一个大型项目，可能需要一段时间。您可以在网页的左下角看到状态（这当前不是活动的，它会在您加载文件时更新）。Cargo 的构建信息显示在您运行 `cargo src` 的控制台上。建立索引时，您将能够通过语法突出显示您的代码，但不会获得任何语义信息或能够搜索。

可操作标识符带有下划线。单击引用以跳转到定义。单击定义以搜索对该定义的所有引用。右键单击链接以查看更多选项（例如“查找实现”）。

