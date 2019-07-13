## antd-redux-redux-thunk-todolist

```bash
npm install
npm start
```


本项目把003项目拆分成了2个组件:UI组件和容器组件
为什么要拆分?
	首先把逻辑和渲染页面区分开来
	其次把UI组件拆出来从而把其变成无状态的组件，然后以函数的方式定义组件，可以提升性能


本项目使用了redux-thunk中间件，使用方法如下
```
// 安装
yarn add redux-thunk

// 使用：当创建store时使用
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import resucer from './reducer';

const store = createStore(
  resucer,
  applyMiddleware(thunk)
);
```