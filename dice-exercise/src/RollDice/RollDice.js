import React, { Component } from 'react';
import classes from './RollDice.module.css';
import Die from './Die/Die';

class RollDice extends Component {
    constructor(){
        super();
        this.state = {
            dieOne: 1,
            dieTwo: 1,
            rolling: false,
        }
        this.randNumGen = this.randNumGen.bind(this);
    };

    randNumGen(e){
        this.setState({
            dieOne: Math.floor(Math.random() * 6) +1,
            dieTwo: Math.floor(Math.random() * 6) +1,
            rolling: true,
        })

        setTimeout(() => (
            this.setState({rolling: false})
        ), 1000)
    };

    render() {
        return (
        <div className={classes.RollDice}>
            <Die num={this.state.dieOne} rolling={this.state.rolling}/>
            <Die num={this.state.dieTwo} rolling={this.state.rolling}/>
            <p><button onClick={this.randNumGen} disabled={this.state.rolling}>
                {this.state.rolling === false
                ? "Roll Dice"
                : "Rolling..."}
                </button></p>
        </div>
        );
    }
}

export default RollDice;