比如说在 mounted 里面修改了属性的值导致要更新 DOM，更新界面，但是又想在这个 mounted 方法里面操作 DOM，那么直接使用 this.$refs.foo 获取到的 DOM 会是更新之前的 DOM，而不是最新的 DOM。

解决办法是使用 $nextTick() 方法。

它是在 DOM 更新结束之后执行回调函数，在修改数据之后使用此方法，可以让方法回调在 DOM 更新之后再调用：

```
mounted() {
    this.isShow = true // 导致界面更新

    console.log(this.$refs.foo) // 拿到的是更新之前的 DOM ，而不是最新的 DOM

    this.$nextTick(()=>{
        console.log(this.$refs.foo) // 此时拿到的就是最新的 DOM 了，它会在 DOM 更新完成后才被调用
    })
}
```
