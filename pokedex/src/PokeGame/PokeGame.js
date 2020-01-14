import React, { Component } from 'react';
import classes from './PokeGame.module.css';

class PokeGame extends Component {
  render() {
    return (
      <div>
        {this.props.hand > this.props.other
            ? <h1 className={classes.winner}>Winning Hand!</h1> 
            : <h1 className={classes.loser}>Losing Hand :(</h1>}
        <h3>Total Experience: {this.props.hand}</h3>
      </div>
    );
  }
}

export default PokeGame;