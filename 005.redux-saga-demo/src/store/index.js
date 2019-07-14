import { createStore,applyMiddleware } from 'redux'
import reducer from './reducer'

// 引入redux-saga中间件
import createSagaMiddleware from 'redux-saga'
import mySaga from './mySaga'
// 创建saga中间件
const sagaMiddleware = createSagaMiddleware()


const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(mySaga)

export default store