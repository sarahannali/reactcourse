import React, { Component } from 'react';
import Coin from './Coin/Coin';

class Layout extends Component {
    constructor(){
        super();
        this.state={
            currentFlip: 1,
            totalFlips: 0,
            heads: 0,
            tails: 0
        };
        this.flipHandler = this.flipHandler.bind(this);
    }

    flipHandler(e){
        const newFlip = (Math.floor(Math.random() * 2));
        this.setState((st) => ({
            currentFlip: newFlip,
            totalFlips: st.totalFlips + 1})) 
        if (newFlip === 0){
            this.setState((st) => ({
                heads: st.heads + 1
            }))
        }
        else{
            this.setState((st) => ({
                tails: st.tails + 1
            }))
        }
    }

    render() {
        return (
        <div>
            <Coin flipNum={this.state.currentFlip}/>
            <button onClick={this.flipHandler}>Flip Coin!</button>
            <p>Out of {this.state.totalFlips}, {this.state.heads} have been heads and {this.state.tails} have been tails.</p>
        </div>
        );
    }
}

export default Layout;