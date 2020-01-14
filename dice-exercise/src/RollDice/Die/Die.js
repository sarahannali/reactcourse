import React, { Component } from 'react';
import classes from './Die.module.css';

class Die extends Component {
    render() {
        function dieImg(num) {
            const numDic = {
                1: "one",
                2: "two",
                3: "three",
                4: "four",
                5: "five",
                6: "six"
            }
            return "fas fa-dice-" + numDic[num]
        }

        const dieClasses = 
            dieImg(this.props.num)
            + " "
            + (this.props.rolling
                ? classes.wobble
                : "")

        return (
        <div className={classes.Die}>
            <i className={dieClasses}></i>
        </div>
        );
    }
}

export default Die;