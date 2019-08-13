import React from 'react';
import { initStores } from './store'
import { Provider } from 'mobx-react'
// 组件
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

// 初始化stores
const stores = initStores()

function App () {
  return (
    // 把store作为props提供给根组件，可以有多个store，所有的子组件都可以获取到
    <Provider game={ stores.game }>
      <div>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    </Provider>
  )
}

export default App;