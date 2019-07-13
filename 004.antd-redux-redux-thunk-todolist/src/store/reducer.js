import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DEL_TODO_ITEM, INIT_LISTS } from './actionTypes'

let defaultState = {
    inputValue: '',
    lists: ['西瓜']
}

export default (state = defaultState, action) => {
    if(action.type===CHANGE_INPUT_VALUE){
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if(action.type===ADD_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state))
        newState.lists.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    if(action.type===DEL_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state))
        newState.lists.splice(action.value,1)
        return newState
    }
    if(action.type===INIT_LISTS){
        const newState = JSON.parse(JSON.stringify(state))
        newState.lists = action.value
        return newState
    }
    
    return state
}