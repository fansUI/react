import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      lists: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.hanleClick = this.hanleClick.bind(this)
    this.handleDel = this.handleDel.bind(this)
  }
  handleChange(e){
    const value = e.target.value
    this.setState(()=>({
      inputValue: value
    }))
    console.log(e.target)
    console.log(this.input)
  }
  hanleClick(){
    this.setState((preState)=>{
      return {
        lists: [...preState.lists,preState.inputValue],
        inputValue: ''
      }
    })
  }
  getTodoItem(){
    return this.state.lists.map((item,index)=>{
        return  (
          <TodoItem 
            key={index} 
            index={index} 
            onClick={this.handleDel} 
            content={item}
          />
        )
    })
  }
  handleDel2(index){
    // let { lists } = this.state
    // let lists = this.state.lists.slice()
    let lists = [...this.state.lists]

    lists.splice(index,1)
    this.setState(()=>({
      lists
    }))
  }

  // 删除的第二种写法
  handleDel(index){
    this.setState((preState)=>{
      // let { lists } = preState
      // let lists = preState.lists.slice()
      let lists = [...preState.lists] 
      lists.splice(index,1)
      return {lists}
    })
  }
  componentWillMount() {
    console.log('componentWillMount')
  }
  componentDidMount() {
    console.log('componentDidMount')
  }
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('shouldComponentUpdate')
     return true
  }
  componentWillUpdate() {
    console.log('componentWillUpdate')
    
  }
  componentDidUpdate(prevProps, prevState) {
    
    console.log('componentDidUpdate')
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
    
  }
  render() {
    console.log('render')
    return (
        <Fragment>
          <div>
            <input 
              value={this.state.inputValue}
              onChange={this.handleChange}
              ref={(input)=>this.input = input}
            />
            <button 
              className='btn btn-info'
              onClick={this.hanleClick}
            >添加</button></div>
          <ul>
            {this.getTodoItem()}
          </ul>
        </Fragment>
      );
  }
}

export default App;