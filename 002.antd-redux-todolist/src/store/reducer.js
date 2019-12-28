import { stat } from "fs";

let defaultState = {
    inputValue: '',
    lists: []
}

export default (state=defaultState, action)=>{
    let newState = JSON.parse(JSON.stringify(state))  // 把这句话提到这里，可以少写几行代码
    if(action.type==='change_input_value'){
        // let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if(action.type==='add_todo_item'){
        // let newState = JSON.parse(JSON.stringify(state))
        newState.lists.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    if(action.type==='del_todo_item'){
        // let newState = JSON.parse(JSON.stringify(state))
        newState.lists.splice(action.index,1)
        return newState
    }
    return state
}
