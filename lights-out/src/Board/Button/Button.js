import React, { Component } from 'react';
import classes from './Button.module.css';

class Button extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    this.props.clickHandler(this.props.index);
  }

  render() {
    let onClass = classes.Button + " " + classes.on

    return (
      <button 
        className={this.props.isLit === false
          ? classes.Button
          : onClass}
        style={{width: this.props.length, height:this.props.length}}
        onClick={this.handleClick}>
      </button>
    );
  }
}

export default Button;