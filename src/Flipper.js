import React , {Component} from 'react'
import Coin from './Coin'

class Flipper extends Component {
    state = {
        img : 'https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg',
        click: 0,
        faceNum: 1,
        tailNum: 0
    }

    updateState = () => {
        let randomNum = Math.random();
        if (randomNum > 0.5) {
            this.setState(curSt => ({click: curSt.click + 1 , faceNum: curSt.faceNum + 1 , img : 'https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg'}))
            
        }
        else {
           this.setState(curSt => ({click: curSt.click + 1 , tailNum: curSt.tailNum + 1 , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzp9u4RhiE6BBGR1btd9UN5VMIzJWlFBujqjjOnkHlQZQF-VXI1KrB6tUeyLo-ouR2iVQ&usqp=CAU'}))
          
        }
        console.log(this.state)
    }

    render() {
        return (
            <div>
              <Coin img={this.state.img} />
              <button onClick={this.updateState}>Flipp</button>
              <p>You clicked: {this.state.click} Times </p>
              <p>Face Times: {this.state.faceNum} , Tails Times : {this.state.tailNum} </p>
            </div>
            
        )
    }
}

export default Flipper