import React, { Component } from 'react';
import classes from './Candy.module.css';
import {Link} from 'react-router-dom';

class Candy extends Component {
  render() {
    return (
        <div className={classes.Candy}>
            <h1>Enjoy your Candy!</h1>
            <img alt="candy icon" src="https://cdn2.iconfinder.com/data/icons/free-color-halloween-icons/24/Candy-Corn-512.png"></img>
            <div><Link to='/'>Buy Something Else</Link></div>
        </div>
    );
  }
}

export default Candy;