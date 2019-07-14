import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DEL_TODO_ITEM } from './actionTypes'

export const getChangeInputValue = (value)=>({
    type: CHANGE_INPUT_VALUE,
    value
})

export const getAddTodoItem = ()=>({
    type: ADD_TODO_ITEM
})

export const getDelTodoItem = (value)=>({
    type: DEL_TODO_ITEM,
    value
})