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
task() async {
   try{
    String id = await login("alice","******");
    String userInfo = await getUserInfo(id);
    await saveUserInfo(userInfo);
    //执行接下来的操作   
   } catch(e){
    //错误处理   
    print(e);   
   }  
}
```

* async用来表示函数是异步的，定义的函数会返回一个Future对象，可以使用then方法添加回调函数。
* await 后面是一个Future，表示等待该异步任务完成，异步完成后才会往下走；await必须出现在 async 函数内部。

> 其实，无论是在JavaScript还是Dart中，async/await都只是一个语法糖，编译器或解释器最终都会将其转化为一个Promise（Future）的调用链。
