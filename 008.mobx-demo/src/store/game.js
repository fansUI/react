import { observable, action } from 'mobx'

class GameStore {
    @observable gameList = ['111','222','333']

    @action addItem = (data) => {
        this.gameList.push(data)
    }
}

export default GameStore