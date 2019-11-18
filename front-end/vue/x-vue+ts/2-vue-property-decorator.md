
```
import Vue, { PropOptions, WatchOptions } from 'vue';
import Component, { mixins } from 'vue-class-component';
import { InjectKey } from 'vue/types/options';
export declare type Constructor = {
    new (...args: any[]): any;
};
export { Component, Vue, mixins as Mixins };

......

export declare function Inject(options?: InjectOptions | InjectKey): import("vue-class-component").VueDecorator;

export declare function InjectReactive(options?: InjectOptions | InjectKey): import("vue-class-component").VueDecorator;

export declare function Provide(key?: string | symbol): import("vue-class-component").VueDecorator;

export declare function ProvideReactive(key?: string | symbol): import("vue-class-component").VueDecorator;

export declare function Model(event?: string, options?: PropOptions | Constructor[] | Constructor): (target: Vue, key: string) => void;

export declare function Prop(options?: PropOptions | Constructor[] | Constructor): (target: Vue, key: string) => void;

export declare function PropSync(propName: string, options?: PropOptions | Constructor[] | Constructor): PropertyDecorator;

export declare function Watch(path: string, options?: WatchOptions): import("vue-class-component").VueDecorator;

export declare function Emit(event?: string): (_target: Vue, key: string, descriptor: any) => void;

export declare function Ref(refKey?: string): import("vue-class-component").VueDecorator;
```

以下这些来自该包：

* Vue
* Component --> 来自于 `vue-class-component` 包
* Mixins

* Inject
* InjectReactive
* Provide
* ProvideReactive
* Model
* Prop
* PropSync
* Watch
* Emit
* Ref
