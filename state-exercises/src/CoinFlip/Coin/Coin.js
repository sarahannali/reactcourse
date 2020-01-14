import React, { Component } from 'react';
import classes from './Coin.module.css';

class Coin extends Component {
    render() {
        const flipDict = {
            0: "fas fa-horse-head",
            1: "fab fa-pagelines"
        }

        return (
            <div className={classes.Coin}>
                <i className={flipDict[this.props.flipNum]}></i>
            </div>
        );
        }
}

export default Coin;