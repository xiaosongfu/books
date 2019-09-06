## 1. 查看 TAG

```
git tag

git show v0.9
```

## 2. 打 TAG
```
git tag v1.0

git tag v0.9 commit_id

# 还可以创建带有说明的标签，用-a指定标签名，-m指定说明文字：
git tag -a v0.1 -m "version 0.1 released" 1094adb
```

## 3. 推送 TAG

```
# 将 v0.1.2 这个 Tag 提交到 git 服务器
git push origin v0.1.2

# 将本地所有 Tag 一次性提交到 git 服务器
git push origin –-tags
```

## 4. 删除 TAG

```
# 本地删除 tag
git tag -d v0.1.2

# 本地 tag 删除了，再执行该句，删除线上 tag
git push origin :refs/tags/v0.1.2 
```
