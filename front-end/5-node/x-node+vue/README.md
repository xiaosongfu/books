https://segmentfault.com/a/1190000019458509

## 初始化项目并安装 ts

```
npm init

npm install typescript @types/node -D

tsc --init
```

## 集成 ts-node 和 ts-node-dev

```
npm install ts-node ts-node-dev -D
```

配置 package.json:

```
"scripts": {
    "serve": "ts-node src/server.ts",
    "serve:dev": "ts-node-dev src/server.ts"
},
```

## 集成 tslint



## 集成 jest

```
npm install jest ts-jest @types/jest -D

// 初始化配置文件 jest.config.js
// jest --init
// 发现用 jest --init 初始化的 jest.config.js 不行，
// 没有和 ts-jest 关联起来，需要使用 npx ts-jest config:init 命令
npx ts-jest config:init
```

```
npx ts-jest config:init

Jest configuration written to "/Users/fuxiaosong/dev/project/vue/ts/socket-server/jest.config.js".
```

文件内容如下：

```
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
};
```
