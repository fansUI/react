import React, { Component } from 'react';
import { Button, Input, List } from 'antd'
import store from './store'
import { getChangeInpueValueAction, getAddTodoItemAction, getDelTodoItemAction } from './store/actionCreators'
import 'antd/dist/antd.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    
    this.handleUpdate = this.handleUpdate.bind(this)
    store.subscribe(this.handleUpdate)


    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleDel = this.handleDel.bind(this)
  }
  handleUpdate(){
    this.setState(store.getState())
  }
  handleClick(){
    const action = getAddTodoItemAction()
    store.dispatch(action)
  }
  handleChange(e){
    const action = getChangeInpueValueAction(e.target.value)
    store.dispatch(action)
  }
  handleDel(index){
    const action = getDelTodoItemAction(index)
    store.dispatch(action)
  }
  render() {
    return (
      <div style={{padding: '10px 0 0 10px'}}>
        <Input 
          placeholder='info'
          value={this.state.inputValue}
          style={{width: '300px',marginRight: '20px'}}
          onChange={this.handleChange}
        ></Input>
        <Button type='primary'
          onClick={this.handleClick}
        >添加</Button>
        <List
          style={{width: '380px',marginTop: '10px'}}
          bordered
          dataSource={this.state.lists}
          renderItem={(item, index) => (
            <List.Item onClick={()=>this.handleDel(index)}>
              {item}
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default App;