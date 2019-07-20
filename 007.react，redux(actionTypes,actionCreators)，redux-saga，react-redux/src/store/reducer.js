import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DEL_TODO_ITEM, INIT_STATE_DATA } from './actionTypes'

const defaultState = {
    inputValue: '',
    lists: []
}

export default (state=defaultState,action)=>{
    const newState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case CHANGE_INPUT_VALUE:
            newState.inputValue = action.value
            return newState
        case ADD_TODO_ITEM:
            newState.lists.push(newState.inputValue)
            newState.inputValue = ''
            return newState
        case DEL_TODO_ITEM:
            newState.lists.splice(action.index,1)
            return newState
        case INIT_STATE_DATA:
            console.log(action)
            newState.inputValue = action.value.inputValue
            newState.lists = [...action.value.lists]
            return newState
        default:
            return state
    }
}