import React, { Component } from 'react';
import store from './store'
import { getChangeInputValueAction, getAddTodoItemAction, getDelTodoItemAction, getTodoLists } from './store/actionCreators'
import 'antd/dist/antd.css'
import AppUI from './AppUI'

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
    const action = getChangeInputValueAction(e.target.value)
    store.dispatch(action)
    
  }
  handleDel(index){
    const action = getDelTodoItemAction(index)
    store.dispatch(action)
  }
  componentDidMount() {
    // axios.get('/api/lists')
    //   .then((res)=>{
    //     const lists = res.data.lists
    //     const action = getInitListsAction(lists)
    //     console.log(action)
    //     store.dispatch(action)
    //   })


    // 上面使用axios直接发送异步请求获取数据并dispatch(action)
    // 这里把异步操作使用redux-thunk中间件委托给action操作
    const action = getTodoLists()
    store.dispatch(action)
  }
  render() {
    return (
      <AppUI
        inputValue={this.state.inputValue}
        lists={this.state.lists}
        handleChange={this.handleChange}
        handleClick={this.handleClick}
        handleDel={this.handleDel}
      />
    );
  }
}

export default App;
