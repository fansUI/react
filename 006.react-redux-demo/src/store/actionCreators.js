import { CHANGE_INPUT_VALUE, ADD_ITEM, DEL_ITEM } from './actionTypes'

export const getChangeInputValue = (value)=>({
    type: CHANGE_INPUT_VALUE,
    value
})

export const getAddItem = ()=>({
    type: ADD_ITEM
})

export const getDelItem = (value)=>({
    type: DEL_ITEM,
    value
})
