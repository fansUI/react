import React, { Component } from 'react';
import { inject, observer } from 'mobx-react'


@inject('game') @observer
class Main extends Component {
    
    render() {
        const { game } = this.props
        return (
            <div>
                {
                    game.gameList.map((item,index)=>(
                        <div key={ index }>{ item }</div>
                    ))
                }
                <button onClick={ ()=>{
                    game.addItem('动态传入的数据，可以是表单输入')
                } } style={{ width: '100px',height: '50px',backgroundColor: 'red' }}>添加item</button>

            </div>
        );
    }
}

export default Main;