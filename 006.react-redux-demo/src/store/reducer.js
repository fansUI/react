
import { CHANGE_INPUT_VALUE, ADD_ITEM, DEL_ITEM } from './actionTypes'

const defaultState = {
    inputValue: 'words',
    lists: ['香蕉','西瓜']
}
export default (state=defaultState,action)=>{
    if(action.type===CHANGE_INPUT_VALUE){
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if(action.type===ADD_ITEM){
        const newState = JSON.parse(JSON.stringify(state))
        newState.lists.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    if(action.type===DEL_ITEM){
        const newState = JSON.parse(JSON.stringify(state))
        newState.lists.splice(action.value,1)
        return newState
    }
    return state
}