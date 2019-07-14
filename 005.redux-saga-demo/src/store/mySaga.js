import { takeEvery, put } from 'redux-saga/effects'
import axios from 'axios'



function* getInitLists(){
    const res = yield axios.get('http://localhost:3000/api/lists')
    yield put({
        type: 'init_list_data',
        value: res.data
    })

}


function* mySaga() {
    yield takeEvery("init_data", getInitLists);
}

export default mySaga