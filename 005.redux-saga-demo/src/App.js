import React, { Component } from 'react';
import { Button, Input, List } from 'antd'
import 'antd/dist/antd.css'
import store from './store'
import { getChangeInputValue, getAddItem, getDelItem, getInitData } from './store/actionCreators'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleUpdate = this.handleUpdate.bind(this)
    store.subscribe(this.handleUpdate)

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleDel = this.handleDel.bind(this)
  }
  handleUpdate(){
    this.setState(store.getState())
  }
  handleChange(e){
    const action = getChangeInputValue(e.target.value)
    store.dispatch(action)
  }
  handleClick(){
    const action = getAddItem()
    store.dispatch(action)
  }
  handleDel(value){
    const action = getDelItem(value)
    store.dispatch(action)
  }
  componentDidMount() {
    const action = getInitData()
    store.dispatch(action)
  }
  render() {
    return (
      <div style={{padding: '10px 0 0 10px'}}>
        <Input 
          style={{width: '300px',marginRight: '20px'}}
          placeholder='info'
          value={this.state.inputValue}
          onChange={this.handleChange}
        >
        </Input>
        <Button
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