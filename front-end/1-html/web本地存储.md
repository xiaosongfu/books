前端的本地存储方式有：

* localStorage、sessionStorage
* webSQL
* indexedDB

---

## Web Storage 包含 localStorage 和 sessionStorage 两种机制

Web Storage 包含 localStorage 和 sessionStorage 两种机制，这两种机制是通过 Window.sessionStorage 和  Window.localStorage ，调用其中任意对象会创建 storage 对象，通过对 storage 对象设值、获取和删除进行控制。两者存储的形式只能是字符串类型的键值对。

> 注意：localStorage和SessionStorage都只能保存字符串。

```
//js读取
localStorage.getItem('name');
sessionStorage.getItem('name');

//js写入
localStorage.setItem('name','value');
sessionStorage.setItem('name','value');

//js删除
localStorage.removeItem('name');
sessionStorage.removeItem('name');

//删除所有key/value
localStorage.clear();
sessionStorage.clear();
```

* localStorage：永久存储，在浏览器关闭后，重新打开后数据仍然存在，需要手动删除，不然一直存在。不同浏览器中支持存储的大小不同，一般为5M。
* sessionStorage：在浏览器页面会话期间可用（包换页面重新加载和恢复），会话结束就被删除。

---

当 LocalStorage 变化时，会触发storage事件。利用这个特性，我们可以在发送消息时，把消息写入到某个 LocalStorage 中；然后在各个页面内，通过监听storage事件即可收到通知。

window.addEventListener(storage ,function(e) {
    if(e.key === ctc-msg ){
        constdata =JSON.parse(e.newValue);
        const text =[receive]+data.msg + tab+data.from;
        console.log([StorageI]receive message:,text);
    }
});
```

在各个页面添加如上的代码，即可监听到 LocalStorage 的变化。当某个页面需要发送消息时，只需要使用我们熟悉的setItem方法即可：

```
mydata.st =+(newDate);
window.localStorage.setItem(ctc-msg ,JSON.stringify(mydata));
```

注意，这里有一个细节：我们在mydata上添加了一个取当前毫秒时间戳的.st属性。这是因为，storage事件只有在值真正改变时才会触发。举个例子：

```
window.localStorage.setItem( test ,  123 );
window.localStorage.setItem( test ,  123 );
```

由于第二次的值 123 与第一次的值相同，所以以上的代码只会在第一次setItem时触发storage事件。因此我们通过设置st来保证每次调用时一定会触发storage事件。

---

## webSQL

https://www.w3.org/TR/webdatabase/

> 该文档在 W3C Recommendation 轨道上，但规范工作已停止。规范陷入了僵局：所有感兴趣的实现者都使用了相同的SQL后端（Sqlite），但是我们需要多个独立的实现才能沿着标准化路径进行。

## indexedDB

https://www.w3.org/TR/IndexedDB/
