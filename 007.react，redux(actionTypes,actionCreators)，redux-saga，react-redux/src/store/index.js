import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import createSagaMiddleware from 'redux-saga'
import mySaga from './mySaga'

const sageMiddleware = createSagaMiddleware()

const store = createStore(reducer, applyMiddleware(sageMiddleware))
sageMiddleware.run(mySaga)


export default store