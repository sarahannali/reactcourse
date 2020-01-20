import React, { Component } from 'react';
import classes from './Card.module.css';

class Card extends Component {
    constructor(props){
        super(props);
        let angle = Math.random() * 90 - 45;
        this._transform = 'rotate(' + angle + 'deg)';
    }

    
    render() {
        return (
        <div className={classes.Card} style={{transform: this._transform}}>
            <img src={this.props.img} alt="Selected Card"></img>
        </div>
        );
    }
}

export default Card;