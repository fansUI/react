import { takeEvery, put } from 'redux-saga/effects'
import { TODO_LIST_DATA } from './actionTypes'
import { get } from 'axios'
import { getInitStateDataAction } from './actionCreators'


function* getTodoListData(){
    const res = yield get('http://localhost:3000/api')
    const data = res.data
    yield put(getInitStateDataAction(data))
}

function* mySaga(){
    yield takeEvery(TODO_LIST_DATA, getTodoListData)
}

export default mySaga