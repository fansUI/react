import { CHANGE_INPUT_VALUE, ADD_ITEM, DEL_ITEM, INIT_LIST_DATA } from './actionTypes' 

let defaultState = {
    inputValue: '',
    lists: []
}

export default (state=defaultState,action)=>{
    if(action.type===CHANGE_INPUT_VALUE){
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if(action.type===INIT_LIST_DATA){
        let newState = JSON.parse(JSON.stringify(state))
        newState = action.value
        return newState
    }
    if(action.type===ADD_ITEM){
        let newState = JSON.parse(JSON.stringify(state))
        newState.lists.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    if(action.type===DEL_ITEM){
        let newState = JSON.parse(JSON.stringify(state))
        newState.lists.splice(action.value,1)
        return newState
    }
    return state
}