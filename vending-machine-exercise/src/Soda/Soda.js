import React, { Component } from 'react';
import classes from './Soda.module.css';
import {Link} from 'react-router-dom';

class Soda extends Component {
  render() {
    return (
        <div className={classes.Soda}>
            <h1>Enjoy your Soda!</h1>
            <img alt="soda icon" src="https://cdn0.iconfinder.com/data/icons/beverage/64/SODA_CAN-512.png"></img>
            <div><Link to='/'>Buy Something Else</Link></div>
        </div>

    );
  }
}

export default Soda;