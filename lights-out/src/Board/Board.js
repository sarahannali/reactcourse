import React, { Component } from 'react';
import classes from './Board.module.css';
import Button from './Button/Button'

class Board extends Component {
    constructor(props){
        super(props);
        this.state={
            wonGame: false,
            litButtons: [...Array(25).keys()].map(() => {
                const litChange = Math.random()
                if (litChange <= 0.75){
                    return false
                }
                else{
                    return true
                }
            })
        };
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(i){
        let buttonsToChange = [i-5, i-1, i, i+1, i+5];
        if (i%5 === 0){
            buttonsToChange = [i-5, i, i+1, i+5]
        }
        else if (i%5 === 4){
            buttonsToChange = [i-5, i-1, i, i+5]
        }
        let litButtonsCopy = [...this.state.litButtons];
        for (const e of buttonsToChange){
            litButtonsCopy[e] === false
            ? litButtonsCopy[e] = true
            : litButtonsCopy[e] = false
        }
        this.setState(() => ({litButtons: litButtonsCopy}))
    }

    render() {
        const sideLength = 410;
        const butt = [...Array(25).keys()]
        const buttons = butt.map((_, i) => (
            <Button 
                key={i}
                index={i}
                length={sideLength/5} 
                isLit={this.state.litButtons[i]}
                clickHandler={this.clickHandler}/>
        ));

        return (
        <div>
            <h1><span className={classes.lights}>lights </span><span className={classes.out}>out</span></h1>
            <div className={classes.Board} style={{width: sideLength, height: sideLength}}>
                <span>{buttons}</span>
            </div>
        </div>
        
        );
    }
}

export default Board;