import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DEL_TODO_ITEM, INIT_LISTS } from './actionTypes'
import axios from 'axios'

export const getChangeInputValueAction = (value)=>({
    type: CHANGE_INPUT_VALUE,
    value   
})

export const getAddTodoItemAction = ()=>({
    type: ADD_TODO_ITEM
})

export const getDelTodoItemAction = (value)=>({
    type: DEL_TODO_ITEM,
    value   
})

export const getInitListsAction = (value)=>({
    type: INIT_LISTS,
    value
})

export const getTodoLists = (value)=>{
    return dispatch=>{
        axios.get('/api/lists')
            .then((res)=>{
                const lists = res.data.lists
                const action = getInitListsAction(lists)
                dispatch(action)
            })
    }
}
