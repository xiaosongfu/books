EventBus3.0有四种线程模型，分别是：
* POSTING：默认，表示事件处理函数的线程跟发布事件的线程在同一个线程。
* MAIN：表示事件处理函数的线程在主线程(UI)线程，因此在这里不能进行耗时操作。
* BACKGROUND：表示事件处理函数的线程在后台线程，因此不能进行UI操作。如果发布事件的线程是主线程(UI线程)，那么事件处理函数将会开启一个后台线程，如果果发布事件的线程是在后台线程，那么事件处理函数就使用该线程。
* ASYNC：表示无论事件发布的线程是哪一个，事件处理函数始终会新建一个子线程运行，同样不能进行UI操作。

---

public class EventMessage {}

EventBus.getDefault().register(this)
EventBus.getDefault().unregister(this)

```
@Override
 public void onStart() {
     super.onStart();
     EventBus.getDefault().register(this);
 }

 @Override
 public void onStop() {
     super.onStop();
     EventBus.getDefault().unregister(this);
 }
```



@Subscribe(threadMode = ThreadMode.MAIN)
public void onGetMessage(EventMessage msg) {}


EventBus.getDefault().post(new EventMessage(msg))

EventBus.getDefault().postSticky(new EventMessage(msg));
EventBus.getDefault().removeStickyEvent();

EventBus.getDefault().cancelEventDelivery(msg);

---

## 黏性事件

@Subscribe(threadMode = ThreadMode.MAIN, sticky = true)

EventBus.getDefault().postSticky(...);

EventBus.getDefault().removeStickyEvent();

## 优先级

在 @Subscribe 注解中总共有3个参数，第三个参数 priority。
它用来指定订阅方法的优先级，是一个整数类型的值，默认是0，值越大表示优先级越大。
在某个事件被发布出来的时候，优先级较高的订阅方法会首先接受到事件。

这里有几个地方需要注意：
* 只有当两个订阅方法使用相同的 ThreadMode 参数的时候，它们的优先级才会与 priority 指定的值一致；
* 只有当某个订阅方法的 ThreadMode 参数为 POSTING 的时候，它才能停止该事件的继续分发。


EventBus.getDefault().cancelEventDelivery(...);

---


* Android EventBus 的使用：https://www.jianshu.com/p/e7d5c7bda783