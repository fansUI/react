import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DEL_TODO_ITEM, INIT_STATE_DATA, TODO_LIST_DATA } from './actionTypes'

export const getChangeInputValueAction = (value)=>({
    type: CHANGE_INPUT_VALUE,
    value
})

export const getAddTodoItemAction = ()=>({
    type: ADD_TODO_ITEM
})

export const getDelTodoItemAction = (index)=>({
    type: DEL_TODO_ITEM,
    index
})

export const getInitStateDataAction = (value)=>({
    type: INIT_STATE_DATA,
    value
})

export const getTodoListData = ()=>({
    type: TODO_LIST_DATA
})