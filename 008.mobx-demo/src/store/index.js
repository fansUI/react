import GameStore from './game'

const initStores = () => ({
    // 这可以有多个store
    game: new GameStore()
})

// 抛出的是一个方法
export { initStores }