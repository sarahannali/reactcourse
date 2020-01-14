import React, { Component } from 'react';

class StateClick extends Component {
    constructor(){
        super();
        this.state={
            num: 1
        };
        this.genRandom = this.genRandom.bind(this);
    }

    genRandom(e) {
        const randNum = Math.floor(Math.random() * 10);
        this.setState({
            num: randNum
        })
    }

    render() {
        return (
        <div>
            <h1>Number is: {this.state.num}</h1>
            {this.state.num === 7 
                ? <h3>You won!</h3>
                : <button onClick={this.genRandom}>Random Number Generator</button>
            }
        </div>
        );
  }
}

export default StateClick;