import React, { Component } from 'react';
import { Input, Button, List } from 'antd'
import 'antd/dist/antd.css'
import { connect } from 'react-redux'
import { getChangeInputValue, getAddTodoItem, getDelTodoItem } from './store/actionCreators'

function App(props){
  const { inputValue, lists, handleChange, handleClick, handleDel } = props
  return (
    <div style={{padding: '10px 0 0 10px'}}>
      <Input 
        style={{width: '300px',marginRight: '20px'}}
        placeholder='info' 
        value={inputValue} 
        onChange={handleChange}
      >
      </Input>
      <Button onClick={handleClick}>添加</Button>
      <List
        style={{width: '380px',marginTop: '10px'}}
        bordered
        dataSource={lists}
        renderItem={(item,index)=>(
          <List.Item key={index} onClick={()=>handleDel(index)}>
            {item}
          </List.Item>
        )}
      ></List>
    </div>
  );
}

const mapStateToProps = (state)=>{
  return {
    inputValue: state.inputValue,
    lists: state.lists
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    handleChange(e){
      const action = getChangeInputValue(e.target.value)
      dispatch(action)
    },
    handleClick(){
      const action = getAddTodoItem()
      dispatch(action)
    },
    handleDel(index){
      const action = getDelTodoItem(index)
      dispatch(action)
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);