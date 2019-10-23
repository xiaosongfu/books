回调嵌套代码：

```
login("alice","******").then((id){
 //登录成功后通过，id获取用户信息    
 getUserInfo(id).then((userInfo){
    //获取用户信息后保存 
    saveUserInfo(userInfo).then((){
       //保存用户信息，接下来执行其它操作
        ...
    });
  });
})
```

异步代码：

```
login("alice","******").then((id){
      return getUserInfo(id);
}).then((userInfo){
    return saveUserInfo(userInfo);
}).then((e){
   //执行接下来的操作 
}).catchError((e){
  //错误处理  
  print(e);
});
```

正如上文所述， “Future 的所有API的返回值仍然是一个Future对象，所以可以很方便的进行链式调用” ，如果在then中返回的是一个Future的话，该future会执行，执行结束后会触发后面的then回调，这样依次向下，就避免了层层嵌套。
