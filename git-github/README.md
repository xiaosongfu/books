

---

.gitignore 仅用于扫描新添加的文件，它与已添加的文件没有任何关系。

git log --pretty=oneline 只显示commit的ID与描述

git reset --hard HEAD 回退到最近的一个版本

git reset --hard commit_id 根据commit_id回退到指定版本

---

Q: Git pull - Please move or remove them before you can merge  
A: 解决方案：这个错误是因为无论原始文件中 .gitignore 文件的内容是什么，文件都被添加到远程存储库中。由于文件存在于远程存储库中，因此git也必须将它们提取到本地工作树，因此会抱怨文件已经存在。因此，解决方案是删除工作树中的文件并提取最新版本。或者长期解决方案是如果错误地添加了文件，则从存储库中删除文件。这时我们在 develop 分支上删除当前目录下没有被 track 过的文件和文件夹 `git clean -d -f`，复制代码现在重新获取更新即可。