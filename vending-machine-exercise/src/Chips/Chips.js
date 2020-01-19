import React, { Component } from 'react';
import classes from './Chips.module.css';
import {Link} from 'react-router-dom';

class Chips extends Component {
  render() {
    return (
        <div className={classes.Chips}>
            <h1>Enjoy your Chips!</h1>
            <img alt="chips icon" src="https://cdn1.iconfinder.com/data/icons/cartoon-snack/128/chips-512.png"></img>
            <div><Link to='/'>Buy Something Else</Link></div>
        </div>
    );
  }
}

export default Chips;