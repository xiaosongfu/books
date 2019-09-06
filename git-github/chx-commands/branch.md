
git branch
git branch -a

git remote show origin

##  

删除本地分支：`git branch -d 分支名称`

删除远程分支：`git push origin --delete 分支名称`

检出远程分支到本地：`git checkout -b 分支名称 origin/分支名称`

推送本地分支到远程：`git push origin 分支名称:分支名称`

## 远程删除了分支，本地还有

```
git remote prune origin
```

使用该命令删除本地还有，远程没有的分支。

## 

git remote -v

git remote add origin http://xxx.git

git remote set-url origin http://xxx.git
