import React, { Component } from 'react';
import classes from './VendingMachine.module.css';
import {Link} from 'react-router-dom';

class VendingMachine extends Component {
  render() {
    return (
      <div className={classes.VendingMachine}>
          <h1>Purchase Something!</h1>
          <img alt="vending machine icon" src="https://cdn2.iconfinder.com/data/icons/free-version/128/vendingmachine-512.png"></img>
          <div><Link to='/Chips'>Chips</Link> || <Link to='/Soda'>Soda</Link> || <Link to='/Candy'>Candy</Link></div>
      </div>
    );
  }
}

export default VendingMachine;