import React, { Component } from 'react';
import store from './store'
import { Button, Input, List } from 'antd'
import 'antd/dist/antd.css'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = store.getState()
    this.handleUpdate = this.handleUpdate.bind(this)
    store.subscribe(this.handleUpdate)

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }
  handleUpdate(){
    this.setState(store.getState())
  }
  handleInputChange(e){
    const action = {
      type: 'change_input_value',
      value: e.currentTarget.value
    }
    store.dispatch(action)
  }
  handleBtnClick(){
    const action = {
      type: 'add_todo_item'
    }
    store.dispatch(action)
  }
  handleDelete(index){
    const action = {
      type: 'del_todo_item',
      index: index
    }
    store.dispatch(action)
  }
  render() {
    return (
      <div style={{padding: '10px 0 0 10px'}}>
        <Input 
          placeholder='hello world' 
          style={{width: '300px',marginRight: '20px'}}
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        ></Input>
        <Button type='primary'
          onClick={this.handleBtnClick}
        >添加</Button>
        <List
          style={{width: '380px',marginTop: '10px'}}
          bordered
          dataSource={this.state.lists}
          renderItem={(item,index) => (
            <List.Item onClick={()=>this.handleDelete(index)}>
              {item}
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default App;