import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DEL_TODO_ITEM } from './actionTypes'

let defaultState = {
    inputValue: '',
    lists: []
}

export default (state=defaultState, action) => {
    if(action.type===CHANGE_INPUT_VALUE){
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if(action.type===ADD_TODO_ITEM){
        let newState = JSON.parse(JSON.stringify(state))
        newState.lists.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    if(action.type===DEL_TODO_ITEM){
        let newState = JSON.parse(JSON.stringify(state))
        newState.lists.splice(action.index,1)
        return newState
    }
    return state
}