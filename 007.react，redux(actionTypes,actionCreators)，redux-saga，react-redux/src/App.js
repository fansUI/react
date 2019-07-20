import React, { Component } from 'react';
import { List, Button, Input } from 'antd'
import 'antd/dist/antd.css'
import * as actionCreators from './store/actionCreators'
import { connect } from 'react-redux'

class App extends Component {
    
    componentDidMount(){
        this.props.getTodoListData()
    }
    
    render() {
        const { handleChange, inputValue, handleClick, lists, handleDel } = this.props
        return (
            <div style={{padding: '10px 0 0 10px'}}>
                <Input 
                    placeholder='hello' 
                    style={{width: '300px',marginRight: '20px'}} 
                    onChange={handleChange}
                    value={inputValue}
                ></Input>
                <Button onClick={handleClick}>添加</Button>
                <List
                    style={{width: '380px',marginTop: '10px'}}
                    bordered
                    dataSource={lists}
                    renderItem={(item,index)=>(
                        <List.Item 
                            key={index} 
                            onClick={()=>handleDel(index)}
                        >
                            {item}
                        </List.Item>
                    )}
                ></List>
            </div>
        );
    }
}

const mapState = (state)=>{
    return {
        inputValue: state.inputValue,
        lists: state.lists
    }
}

const mapDispatch = (dispatch)=>{
    return {
        handleChange(e){
            dispatch(actionCreators.getChangeInputValueAction(e.target.value))
        },
        handleClick(){
            dispatch(actionCreators.getAddTodoItemAction())
        },
        handleDel(index){
            dispatch(actionCreators.getDelTodoItemAction(index))
        },
        getTodoListData(){
            dispatch(actionCreators.getTodoListData())
        }
    }
}

export default connect(mapState,mapDispatch)(App);