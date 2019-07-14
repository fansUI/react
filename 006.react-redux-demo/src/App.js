import React from 'react';
import { Button, Input, List } from 'antd'
import 'antd/dist/antd.css'
import { connect } from 'react-redux'
import { getChangeInputValue, getAddItem, getDelItem } from './store/actionCreators'

function App(props){
  const { inputValue, lists, handleChange, handleClick, handleDel } = props
  return (
    <div>
      <Input
        style={{width: '300px',marginRight: '20px'}}
        placeholder='hello'
        value={inputValue}
        onChange={handleChange}
      ></Input>
      <Button
        onClick={handleClick}
      >添加</Button>
      <List
        style={{width: '380px',marginTop: '10px'}}
        bordered
        dataSource={lists}
        renderItem={(item,index)=>(
          <List.Item
            onClick={()=>handleDel(index)}
            key={index}
          >
            {item}
          </List.Item>
        )}
      ></List>
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    lists: state.lists
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange(e){
      const action = getChangeInputValue(e.target.value)
      dispatch(action)
    },
    handleClick(){
      const action = getAddItem()
      dispatch(action)
    },
    handleDel(index){
      const action = getDelItem(index)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
