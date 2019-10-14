```  
usage: git stash list [<options>]
   or: git stash show [<stash>]
   or: git stash drop [-q|--quiet] [<stash>]
   or: git stash ( pop | apply ) [--index] [-q|--quiet] [<stash>]
   or: git stash branch <branchname> [<stash>]
   or: git stash save [--patch] [-k|--[no-]keep-index] [-q|--quiet] [-u|--include-untracked] [-a|--all] [<message>]
   or: git stash [push [--patch] [-k|--[no-]keep-index] [-q|--quiet]
                       [-u|--include-untracked] [-a|--all] [-m <message>]
                       [-- <pathspec>...]]
   or: git stash clear

```  


---  


``` 

git stash list

git stash clear

git stash show stash@{0}

git stash drop stash@{3}

git stash save "优化 ChatMessage"

git stash pop stash@{0}

git stash apply stash@{0}

(git stash apply stash@{num}方法除了不在stash队列删除外,其他和git stash pop 完全一样)
```  