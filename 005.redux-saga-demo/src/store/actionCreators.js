import { CHANGE_INPUT_VALUE, DEL_ITEM, ADD_ITEM, INIT_DATA } from './actionTypes' 

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

export const getInitData = ()=>({
    type: INIT_DATA
})